import React from 'react'; // eslint-disable-line no-unused-vars
import Context from './BreakpointContext'; // eslint-disable-line no-unused-vars

const defaultBreakpoints = {
	xs: 600,
	sm: 900,
	md: 1200,
	lg: 1800,
	xl: 2200,
};

export default props => {
	const { breakpoints = defaultBreakpoints, children } = props;
	return <Context.Provider value={breakpoints}>{children}</Context.Provider>;
};
