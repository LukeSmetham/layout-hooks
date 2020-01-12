import React, { useContext, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import BreakpointContext from './BreakpointContext';

export default (breakpoint, minmax = 'min') => {
	if (!breakpoint) {
		throw new Error('Must provide a breakpoint');
	}

	const breakpoints = useContext(BreakpointContext);

	// eslint-disable-next-line no-undef
	const query = window.matchMedia(
		`(${minmax}-width: ${breakpoints[breakpoint]}px)`
	);

	let matches = !query.matches;

	const handleChange = ({ matches: isMatched }) => {
		matches = !isMatched;
	};

	useEffect(() => {
		query.addListener(handleChange);
		return query.removeListener(handleChange);
	}, []);

	return matches;
};
