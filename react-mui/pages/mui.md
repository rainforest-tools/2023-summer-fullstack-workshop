# MUI

Material UI is an open-source React component library that implements Google's Material Design.

- Ship faster
- **Beautiful by default**
- Customizability
- Cross-team collaboration
- **Trusted by thousands of organizations**

## Installation

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

---

## [Stack](https://mui.com/material-ui/react-stack/)
[Interactive demo](https://mui.com/material-ui/react-stack/#interactive-demo)

<div class="flex gap-4 mb-4">

  <img alt="Stack" src="stack-interactive-demo.png" class="w-1/2" />

  <div class="flex-col gap-4">

  ```tsx
  <Stack
    direction="row" 
    // row(default), column, row-reverse, column-reverse
    justifyContent="center" 
    // flex-start, center, flex-end, space-between, 
    // space-around, space-evenly
    alignItems="center" 
    // flex-start, center, flex-end, stretch, baseline
    spacing={2}
  >
  ```

  - justifyContent: align items along the main axis
  
  - alignItems: align items along the cross axis

  </div>

</div>

> [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## [Grid v2](https://mui.com/material-ui/react-grid2/)
A responsive grid layout component for Material UI.

<div class="flex gap-4 mb-4">
  <img alt="Columns, gutters, and margins" src="https://lh3.googleusercontent.com/_rKc6ogXgmiQWxZQ7u3XvV_PSGUr4FmQvqBapHhuNyyWTGeQ68tWB8xZJC9FS1duQGSEPl6Q6TNK23OeWFy6qKFiLtboumotsZMQng=w1064-v0" class="w-1/2" />

<div class="flex flex-col">

1. Columns
```tsx
<Grid container spacing={2}>
  <Grid xs={8}></Grid>
</Grid>
```
2. Gutters
```tsx
<Grid ... spacing={2}>
```
3. Margins

</div>

</div>

> [Material Design - Responsive layout grid](https://m2.material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins)

---

## [Breakpoints](https://mui.com/material-ui/customization/breakpoints/)


Default breakpoints
Each breakpoint (a key) matches with a fixed screen width (a value):

- xs, extra-small: 0px
- sm, small: 600px
- md, medium: 900px
- lg, large: 1200px
- xl, extra-large: 1536px

```tsx
<Grid container spacing={2} textAlign="center" marginTop={4}>
  <Grid xs={2} md={6} xl={10}><Paper><Box paddingX={4} paddingY={3}>Item 1</Box></Paper></Grid>
  <Grid xs={10} md={6} xl={2}><Paper><Box paddingX={4} paddingY={3}>Item 2</Box></Paper></Grid>
  <Grid xs={10} md={6} xl={2}><Paper><Box paddingX={4} paddingY={3}>Item 3</Box></Paper></Grid>
  <Grid xs={2} md={6} xl={10}><Paper><Box paddingX={4} paddingY={3}>Item 4</Box></Paper></Grid>
  <Grid xs={12}><Input fullWidth /></Grid>
</Grid>
```

---

## Components

- [Button](https://mui.com/components/buttons/)
  - variant: text(default), outlined, contained
  - color: primary(default), secondary, inherit, success, error, info, warning
  - size: small, medium(default), large
- [Input](https://mui.com/components/text-fields/)
  - variant: outlined(default), filled, standard
  - size: small, medium(default)
