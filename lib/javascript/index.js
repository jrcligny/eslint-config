import async from './async.js';
import builtin from './builtin.js';
import builtinArray from './builtin-array.js';
import builtinFunction from './builtin-function.js';
import builtinNumeric from './builtin-numeric.js';
import builtinObject from './builtin-object.js';
import builtinObjectClass from './builtin-object-class.js';
import builtinRegexp from './builtin-regexp.js';
import builtinString from './builtin-string.js';
import expression from './expression.js';
import expressionConditional from './expression-conditional.js';
import identifier from './identifier.js';
import importExport from './import-export.js';
import misc from './misc.js';
import miscComplexity from './misc-complexity.js';
import miscFormatting from './misc-formatting.js';
import statementControlFlow from './statement-control-flow.js';
import statementVariable from './statement-variable.js';

export default {
	...async,
	...builtin,
	...builtinArray,
	...builtinFunction,
	...builtinNumeric,
	...builtinObject,
	...builtinObjectClass,
	...builtinRegexp,
	...builtinString,
	...expression,
	...expressionConditional,
	...identifier,
	...importExport,
	...misc,
	...miscComplexity,
	...miscFormatting,
	...statementControlFlow,
	...statementVariable,
};
