![solidjs card](https://assets.solidjs.com/banner?type=solid-marquee&background=tiles&project=%20)

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
![NPM](https://img.shields.io/npm/l/solid-marquee?style=for-the-badge)
![package bundle size](https://img.shields.io/bundlephobia/minzip/solid-marquee?label=Size&style=for-the-badge)
![package version](https://img.shields.io/npm/v/solid-marquee?label=version&style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dw/solid-marquee?style=for-the-badge)

A lightweight Solid component that utilizes the power of CSS animations to create silky smooth marquees. 

## Quick start

Install it:

```bash
npm i solid-marquee
# or
yarn add solid-marquee
# or
pnpm add solid-marquee
```

## Usage

To use the component, first import `Marquee` into your file using either the default import or named import

```tsx
import Marquee from "solid-marquee"
// or
import { Marquee } from "solid-marquee"
```

Then wrap the `<Marquee>` tags around any component or text you'd like to slide.

```tsx
<Marquee>
  I can be a Solid component, multiple Solid components, or just some text.
</Marquee>
```

A sample file might look like this:

```tsx
import MyComponent from "../components/MyComponent"
import Marquee from "solid-marquee"

const App = () => {
  return (
    <Marquee>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>
    </Marquee>
  )
}

export default App
```

## Props

| Property        | Type                        | Default           | Description                                              |
| :-------------- | :-------------------------- | :---------------- | :------------------------------------------------------- |
| `style`         | `object`                    | `{}`              | Inline style for the container div                       |
| `className`     | `string`                    | `""`              | Name of the css class to style the container div         |
| `play`          | `boolean`                   | `true`            | Whether to play or pause the marquee                     |
| `pauseOnHover`  | `boolean`                   | `false`           | Whether to pause the marquee when hovered                |
| `pauseOnClick`  | `boolean`                   | `false`           | Whether to pause the marquee when clicked                |
| `direction`     | `"left"` or `"right"`       | `"left"`          | The direction the marquee is sliding                     |
| `speed`         | `number`                    | `20`              | Speed calculated as pixels/second                        |
| `delay`         | `number`                    | `0`               | Duration to delay the animation after render, in seconds |
| `iterations`          | `number`                    | `0`               | The number of times the marquee should loop, 0 is equivalent to infinite         |
| `onFinish` | `Function` | `null` | A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.    |
| `onCycleComplete` | `Function`        | `null`             | A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).                 |
| `children`      | `ReactNode`                 | `null`            | The children rendered inside the marquee                 |

## Contributors

[![contributors](https://contrib.rocks/image?repo=jcanotorr06/solid-marquee)](https://github.com/jcanotorr06/solid-marquee/graphs/contributors)

## Licence

[MIT](LICENSE)
