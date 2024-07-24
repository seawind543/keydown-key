[![NPM](https://nodei.co/npm/keydown-key.png?downloads=true&stars=true)](https://www.npmjs.com/package/keydown-key/)

# keydown-key

An utility to normalize the KeyboardEvent.key especially during IME composition

## Why need this?

To handle the different behaviors (with [IME](https://en.wikipedia.org/wiki/Input_method)) between browsers on different platforms.

> With the different `platform + browser`, the `keyDownEvent.key` has a different value when `selecting a CJK character` by pressing the `Enter key` with `IME`.

[IME keyDown.key issue] Chrome on Mac

- Example of the issue: https://imgur.com/63EJixc

- With IME, the keyDown.key value of Chrome is different on Mac and Windows
  - Mac: key === `Enter`
  - Windows: key === `Process`
- With IME, the keyDown.key value of Chrome and FireFox are different on Mac
  - FireFox key === `Process` on both Mac and Windows

### Playground

- [Vanilla JS] https://codepen.io/seawind543/pen/gOWNVYR
- [React JS] https://codepen.io/seawind543/pen/xxdvZyE

## Installation

1. Install the latest version of [keydown-key](https://github.com/seawind543/keydown-key):

  ```sh
  yarn add keydown-key
  ```

2. Apply `keydown-key` in your application

### Example (Vanilla JS)

  ```javascript
  import keyDownKey from 'keydown-key';

  // ... omit

  function handleKeyDown(event: KeyboardEvent) { 
    const { key } = keyDownKey(event);

    switch(key) {
      case 'Enter':
        // Do what you want for real `Enter` key
        break;

      case 'Process':
        // The keyDown on "Enter" with IME will be here
        break;

      default: 
    }
  }

  inputBox.addEventListener('keydown', handleKeyDown);
  ```

### Example (React JS)

  ```javascript
  import React from "react";
  import keydownKey from "keydown-key";

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // use the `nativeEvent` attribute to get the browser KeyboardEvent
    // https://reactjs.org/docs/events.html#overview
    const { key } = keydownKey(event.nativeEvent);

    switch(key) {
      case 'Enter':
        // Do what you want for real `Enter` key
        break;

      case 'Process':
        // The keyDown on "Enter" with IME will be here
        break;

      default: 
    }
  };

  const App = () => {
    return <input onKeyDown={handleKeyDown} />;
  };

  export default App;
  ```

## Reference

[1] IME https://en.wikipedia.org/wiki/Input_method

[2] CJK characters https://en.wikipedia.org/wiki/CJK_characters 

## License

[MIT](./LICENSE)