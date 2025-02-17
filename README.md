[![NPM](https://nodei.co/npm/keydown-key.png?downloads=true&stars=true)](https://www.npmjs.com/package/keydown-key/)

# keydown-key

An utility to normalize the KeyboardEvent.key especially during IME composition

## Why need this?

To address the inconsistent behavior of [IME](https://en.wikipedia.org/wiki/Input_method) across different browsers and platforms:  

When selecting a [CJK character](https://en.wikipedia.org/wiki/CJK_characters) using the Enter key with IME, the `keyDownEvent.key` value varies depending on the platform and browser combination.  

### IME `keyDown.key` Issue in Chrome on Mac  

**Example:** [Screenshot](https://imgur.com/63EJixc)  

#### Differences in `keyDown.key` Values with IME  

- **Chrome:**  
  - **Mac:** `key === "Enter"`  
  - **Windows:** `key === "Process"`  

- **Firefox:**  
  - `key === "Process"` on both **Mac** and **Windows**  

This discrepancy can cause inconsistencies when handling keyboard events in web applications.

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

[3] add support for SyntheticKeyboardEvent#isComposing https://github.com/facebook/react/issues/13104

[4] Support IME https://github.com/seawind543/react-token-input/issues/1#issuecomment-896190656

[5] Element: keydown event https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition

## License

[MIT](./LICENSE)