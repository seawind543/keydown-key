[![NPM](https://nodei.co/npm/keydown-key.png?downloads=true&stars=true)](https://www.npmjs.com/package/keydown-key/)

# keydown-key

A utility function to normalize the KeyboardEvent.key especially during IME composition

## Why need this?

To handle the different behaviors (with IME) between browsers on different OS.

- The keyDown.key behavior of Chrome is different on Mac and Windows
  - Mac: key === `Enter` with IME
  - Windows: key === `Process` with IME
- The keyDown.key behavior of Chrome and FireFox are different on Mac
  - FireFox key === `Process` with IME for both Mac and Windows

### Playground

[Vanilla JS] https://codepen.io/seawind543/pen/gOWNVYR
[React JS] https://codepen.io/seawind543/pen/xxdvZyE

## Installation

1. Install the latest version of [keydown-key](https://github.com/seawind543/keydown-key):

  ```cmd
  yarn add keydown-key
  ```

2. At this point you can import `keydown-key` in your application by:

  ```javascript
  import keyDownKey from 'keydown-key';

  // ... omit

  function handleKeyDown(KeyboardEvent) { 
    const { key } = keyDownKey(KeyboardEvent);
    switch() {
      case 'Enter':
        // Do what you want for Enter key
        break;

      case 'Process':
        // it's keyDown on "Enter" with IME
        break;

      default: 
    }
  }

  inputBox.addEventListener('keydown', handleKeyDown);
  ```

## License

[MIT](./LICENSE)