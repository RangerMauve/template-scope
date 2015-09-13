"use strict";
module.exports = lookup;

function lookup(scopes, key) {
	var index = scopes.length - 1;
	var current;
	while (index >= 0) {
		current = scopes[index];
		index--;
		if (!validType(current))
			continue;
		if (key in current)
			return current[key];
	}
}

// Check if we are able to look up keys in a scope
function validType(scope) {
	if (!scope)
		return false;
	if ((typeof scope) !== "object")
		return false;
	return true;
}
