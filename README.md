# material-ripple-effects

### Material Design Ripple Effects.

material-ripple-effects makes you able to have Material Design Ripple Effect on any element you want.

#### material-ripple-effects comes with two colors:

1. Light
2. Dark

## Installation

### Using NPM or Yarn or Pnpm

1. Install the material-ripple-effects from npm or yarn or pnpm.

```
npm i @cmdjs/material-ripple-effects
yarn add @cmdjs/material-ripple-effects
pnpm add @cmdjs/material-ripple-effects
```

2. Import the material-ripple-effects in to your project.

```
import Ripple from '@cmdjs/material-ripple-effects';
```

3. use in React.

```
import React from "react";
import Ripple from '@cmdjs/material-ripple-effects';

export default function Button() {
  const ripple = new Ripple();

  return (
    <>
      <button onMouseUp={(e) => ripple.create(e, 'light')>Material Ripple</button>
      <button onMouseUp={(e) => ripple.create(e, 'dark')>Material Ripple</button>
    </>
  );
}
```

4. use in Svelte.

```
<script lang="ts">
import Ripple from '@cmdjs/material-ripple-effects';

const ripple = new Ripple();
</script>

<button on:click={(e) => ripple.create(e, "light")}>Material Ripple</button>
<button on:click={(e) => ripple.create(e, "dark")}>Material Ripple</button>
```
