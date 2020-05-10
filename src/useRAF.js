import { useCallback, useEffect, useRef } from 'react';

export default callback => {
	const raf = useRef();

	const handleRaf = useCallback(
		time => {
			callback(time);
			raf.current = window.requestAnimationFrame(handleRaf);
		},
		[callback]
	);

	useEffect(() => {
		raf.current = window.requestAnimationFrame(handleRaf);
		return () => window.cancelAnimationFrame(handleRaf);
	}, []);
};
