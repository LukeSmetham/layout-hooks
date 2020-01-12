# Layout Hooks

A set of React Hooks that help make your components responsive, either to their own width, their parent width or the browser width with `matchMedia`.

## `useResize`

The `useResize` hook allows you measure a component by passing in a ref. This works even during css transitions, meaning you can always get an up to date value for the dimensions of a component and alter it's children accordingly. This is great for building totally encapsulated components that respond to their own width and can work in a variety of settings.

## `useMedia` / `useStyledMedia`

The `useMedia` hooks operate exactly the same, one using our `BreakpointProvider` and the other will look for a `breakpoints` key on your `styled-components` theme. You can then pass a breakpoint name and the hook will fire every time the media query changes.
