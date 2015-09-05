"use strict";

var lookup = require("./lookup");

module.exports = Scope;

/**
 * Creates a new scope instance
 */
function Scope() {
	this._scopes = [];
}

/**
 * Defines the different methods that a scope can have
 * @type {Object}
 */
Scope.prototype = {
	push: push,
	pop: pop,
	peek: peek,
	get: get,
	all: all
};

/**
 * Adds an object to use for lookups
 * @param  {Object} scope The new value to use for the scope lookup
 * @return {Scope}        Returns self for chaining
 */
function push(scope) {
	this._scopes.push(scope);
	return this;
}

/**
 * Removes the last object from the scope
 * @return {Scope} Returns self for chaining
 */
function pop() {
	this._scopes.pop();
	return this;
}

/**
 * Returns the first object that will be used for lookups
 * @return {Object} The bottom most object in the scope chain
 */
function peek() {
	var scopes = this._scopes;
	var length = scopes.length;
	if (!length) return;
	return scopes[length - 1];
}

/**
 * Gets a key from the scope chain looking at each object at a time
 * @param  {String} key The key to look up
 * @return {Any}     The first value found under that key, or undefined
 */
function get(key) {
	if (key === "")
		return this.peek();

	return lookup(this._scopes, key);
}

/**
 * Gets the entire chain that's currently being used. Note that this is a copy of the array so it's OK to mutate it.
 * @return {Array} The chain of object used for lookups
 */
function all() {
	return this._scopes.slice(0);
}
