"use strict";
module.exports = lookup;

function lookup(scopes, key) {
	var index = scopes.length - 1;
	var current;
	while (index >= 0) {
		current = scopes[index];
		if (key in current)
			return current[key];
		index--;
	}
}
