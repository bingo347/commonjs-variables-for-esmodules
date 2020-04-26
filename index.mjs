import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {join, dirname} from 'path';

const getParentPath = join(dirname(fileURLToPath(import.meta.url)), 'get-parent.cjs');

function createVariables({url}) {
    const __filename = fileURLToPath(url);
    const variables = {
        __filename,
        __dirname: dirname(__filename)
    };
    lazy(variables, 'require', createRequire, __filename);
    lazy(variables, 'module', createModule, variables);
    return variables;
}

export default createVariables;

function lazy(target, property, factory, ...args) {
    Object.defineProperty(target, property, {
        enumerable: true,
        configurable: true,
        get() {
            const value = factory(...args);
            Object.defineProperty(target, property, {
                enumerable: true,
                configurable: true,
                value
            });
            return value;
        }
    });
}

function createModule(variables) {
    console.log(variables.require, getParentPath);
    return variables.require(getParentPath);
}