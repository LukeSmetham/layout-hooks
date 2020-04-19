import React, { useContext, useEffect, useMemo, useState } from 'react'; // eslint-disable-line no-unused-vars
import BreakpointContext from './BreakpointContext';

export default (breakpoint, minmax = 'min') => {
	const [matches, setMatch] = useState(false);
	const breakpoints = useContext(BreakpointContext);

	if (!breakpoint || !breakpoints[breakpoint]) {
		throw new Error(
			'useStyledMedia: breakpoint argument is missing or invalid.'
		);
	}

	// Memoize the query so that the useEffect on line 27
	// doesn't continually re-render.
	const query = useMemo(
		() =>
			window.matchMedia(
				`(${minmax}-width: ${breakpoints[breakpoint] -
					(minmax === 'max' ? 1 : 0)}px)`
			),
		[breakpoint, minmax]
	);

	// Callback to set the matched state.
	const handleChange = ({ matches: isMatched }) => setMatch(!isMatched);

	// Initialize query listener
	useEffect(() => {
		query.addListener(handleChange);
		return () => query.removeListener(handleChange);
	}, [query]);

	// Check initial matched state.
	useEffect(() => setMatch(!query.matches), []);

	return matches;
};
