[![NPM](https://nodei.co/npm/keydown-key.png?downloads=true&stars=true)](https://www.npmjs.com/package/keydown-key/)

# keydown-key

A utility function to normalize the KeyboardEvent.key especially during IME composition

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

2. At this point you can import `keydown-key` in your application by:

  ```javascript
  import keyDownKey from 'keydown-key';

  // ... omit

  function handleKeyDown(KeyboardEvent) { 
    const { key } = keyDownKey(KeyboardEvent);

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

## Reference

[1] IME https://en.wikipedia.org/wiki/Input_method

[2] CJK characters https://en.wikipedia.org/wiki/CJK_characters 

## License

[MIT](./LICENSE)