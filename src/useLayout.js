import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { ResizeObserver } from '@juggle/resize-observer';

export default ref => {
	const [layout, setLayout] = useState(null);

	useEffect(() => {
		if (ref.current) {
			const observer = new ResizeObserver(entries => {
				const [entry] = entries;
				setLayout(entry.contentRect);
			});

			observer.observe(ref.current);

			return observer.disconnect();
		}
	}, [ref]);

	return layout;
};
