// import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [
  {
    // Globally ignoring files
    // If ignores is used without any other keys in the configuration object, then the patterns act as global ignores.
    // https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
    // https://eslint.org/docs/latest/use/configure/ignore
    ignores: [
      "**/lib/",
      "**/coverage/"
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2021,
      // globals: {
      //   // ...globals.browser,
      //   ...globals.jest
      // }
    },
  },
  {
    files: ["**/*.ts", "**/*.js", "**/*.mjs"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        // requireConfigFile: false,
        babelOptions: {
          parserOpts: {
            allowImportExportEverywhere: true,
          },
          configFile: './babel.config.js',
          // babelrc: false,
          // configFile: './babel.config.js',
          // presets: ["@babel/preset-env"]
        },
      },
    },
  },
];
