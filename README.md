# commonjs-variables-for-esmodules

Simple function for extract node variables __dirname, __filename, require and module from import.meta

## Install

```bash
npm install --save commonjs-variables-for-esmodules
# or
yarn add commonjs-variables-for-esmodules
```

## Limitations

- node 12.2 or higher
- use only in native ES modules

## Usage

```javascript
import commonjsVariables from 'commonjs-variables-for-esmodules';

const {
    __filename,
    __dirname,
    require,
    module
} = commonjsVariables(import.meta);
```

## License

MIT
