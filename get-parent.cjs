// Simple hack for get the module object for ES modules

// I know, it's dirty hack! But thanks it this module run every time when you require it
delete require.cache[module.id];

const {parent} = module;

if(!parent.id.endsWith('.mjs')) {
    throw new TypeError('You cannot require this module from non es modules');
}

module.exports = Object.assign(parent, {
    loaded: true,
    // because es modules haven't exports object
    exports: null
});