# Layout Hooks

A set of React Hooks that help make your components responsive, either to their own size, their parents size or the browser viewport.

## `useLayout`

The `useLayout` hook allows you measure a component in realtime. This works even during css transitions, meaning you can always get an up to date value for the dimensions of a component and alter it's children accordingly. This is great for building totally encapsulated components that respond to their own width and can work in a variety of settings.

```
import React from "react";
import { useLayout, } from "layout-hooks";

export default () => {
  const [layout, setRef] = useLayout();
  
  console.log("layout", layout);
  
  return (
    <div ref={setRef} />
  );
}
```

The `useLayout` hook will return a [DOMRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) everytime the dimensions of the element stored in the ref change. 

Under the hood it uses the `ResizeObserver` API and depends on [this polyfill](https://www.npmjs.com/package/@juggle/resize-observer).


## `useMedia` / `useStyledMedia`

Using either a `breakpoints` object on your `styled-components` theme or by importing the `BreakpointProvider`, you can pass the name of a breakpoint and the hook will fire every time the media query changes. By utilizing `matchMedia` the hook will only run when the breakpoints "matched" state changes from `true` to `false` or vice-versa, reducing rerenders and making it more performant than a standard resize listener.


```
import React from "react";
import { useLayout, } from "layout-hooks";

const App = () => {
  const isSm = useMedia('sm');
  const notSm = useMedia('sm', 'max');
  
  return (
    <div />
  );
}

// NOTE: Alternatively, you can add breakpoints
// as an object on your styled components theme
// & import useStyledMedia instead above.
const breakpoints = {
  xs: 600,
  sm: 900,
  md: 1200,
  lg: 1800,
  xl: 2200,
};

export default () => {
  <BreakpointsProvider breakpoints={breakpoints}>
    <App />
  </BreakpointsProvider>
}
```

The `useMedia` and `useStyled` media hooks return a `Boolean` value.
