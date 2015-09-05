# template-scope
Manage nested scopes for use in template engines

## Installing

```
npm install --save template-scope
```

## Example

```javascript
var Scope = require("template-scope");

var __scope = new Scope();

__scope.push({
    foo: "bar"
});

__scope.get("foo"); // -> "bar"

__scope.push({
    foo: "baz"
});

__scope.get("foo"); // -> "baz"

__scope.pop();

__scope.get("foo"); // -> "bar";
```

## API
### `new Scope()`
Creates a new instance of the scope. Doesn't take any arguments so do what you will.

### `Scope#push(scope)`
Adds an object for use in the lookup. Objects added later will be searched first.
- `scope` An object for use in the lookup process

Returns the scope instance for chaining.

### `Scope#pop()`
Removes one level from the scope chain. If the chain is empty, there is no effect.

Returns the scope instance for chaining

### `Scope#get(key)`
Looks up a key within the scope chain and returns the value of the first one found. If nothing is found, it returns `undefined`. If the key is an empty string, it returns the last known scope (In case you wanted a way to reference the last scope in the chain by value).
- `key` The key to look up

Returns the value found or `undefined`

### `Scope#peek()`
Returns the last object pushed into the scope chain. If the chain is empty, returns `undefined`

Returns The last object in the scope chain or `undefined`

### `Scope#all()`
Returns the list of objects in the scope chain. This is a copy of the list so it's OK to mutate it as long as you don't mutate the actual values in the objects.

Returns the list of objects in the scope chain.
