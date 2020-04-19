import React, { useCallback, useEffect, useRef, useState } from 'react'; // eslint-disable-line no-unused-vars
import { ResizeObserver } from '@juggle/resize-observer';

export default () => {
	const [ref, setRef] = useState(null);
	const [layout, setLayout] = useState(null);

	const observer = useRef(null);

	const handleRef = useCallback(
		el => {
			if (!ref && el) {
				setRef(el);
			}
		},
		[ref]
	);

	useEffect(() => {
		if (ref && !observer.current) {
			observer.current = new ResizeObserver(entries => {
				const [entry] = entries;
				setLayout(entry.contentRect);
			});
			observer.current.observe(ref);
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [ref]);

	return [layout, handleRef];
};
