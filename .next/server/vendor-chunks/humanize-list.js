"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/humanize-list";
exports.ids = ["vendor-chunks/humanize-list"];
exports.modules = {

/***/ "(ssr)/./node_modules/humanize-list/index.js":
/*!*********************************************!*\
  !*** ./node_modules/humanize-list/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function humanizeList(list, options) {\n    if (!Array.isArray(list)) {\n        throw new TypeError(\"humanize-list expected an array\");\n    }\n    options = options || {};\n    options.conjunction = options.conjunction || \"and\";\n    var listLength = list.length;\n    if (listLength === 1) {\n        return list[0];\n    }\n    if (options.skipConjunction) {\n        return list.join(\", \");\n    }\n    var humanizedList = \"\";\n    for(var i = 0; i < listLength; i++){\n        if (i === listLength - 1) {\n            if (options.oxfordComma) {\n                humanizedList += \",\";\n            }\n            humanizedList += \" \" + options.conjunction + \" \";\n        } else if (i !== 0) {\n            humanizedList += \", \";\n        }\n        humanizedList += list[i];\n    }\n    return humanizedList;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHVtYW5pemUtbGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsYUFBY0MsSUFBSSxFQUFFQyxPQUFPO0lBQ25ELElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSCxPQUFPO1FBQ3hCLE1BQU0sSUFBSUksVUFBVTtJQUN0QjtJQUVBSCxVQUFVQSxXQUFXLENBQUM7SUFDdEJBLFFBQVFJLFdBQVcsR0FBR0osUUFBUUksV0FBVyxJQUFJO0lBRTdDLElBQUlDLGFBQWFOLEtBQUtPLE1BQU07SUFFNUIsSUFBSUQsZUFBZSxHQUFHO1FBQ3BCLE9BQU9OLElBQUksQ0FBQyxFQUFFO0lBQ2hCO0lBRUEsSUFBSUMsUUFBUU8sZUFBZSxFQUFFO1FBQzNCLE9BQU9SLEtBQUtTLElBQUksQ0FBQztJQUNuQjtJQUVBLElBQUlDLGdCQUFnQjtJQUNwQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsWUFBWUssSUFBSztRQUNuQyxJQUFJQSxNQUFNTCxhQUFhLEdBQUc7WUFDeEIsSUFBSUwsUUFBUVcsV0FBVyxFQUFFO2dCQUN2QkYsaUJBQWlCO1lBQ25CO1lBRUFBLGlCQUFpQixNQUFNVCxRQUFRSSxXQUFXLEdBQUc7UUFDL0MsT0FBTyxJQUFJTSxNQUFNLEdBQUc7WUFDbEJELGlCQUFpQjtRQUNuQjtRQUVBQSxpQkFBaUJWLElBQUksQ0FBQ1csRUFBRTtJQUMxQjtJQUVBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvaHVtYW5pemUtbGlzdC9pbmRleC5qcz8xMTIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh1bWFuaXplTGlzdCAobGlzdCwgb3B0aW9ucykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdodW1hbml6ZS1saXN0IGV4cGVjdGVkIGFuIGFycmF5JylcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIG9wdGlvbnMuY29uanVuY3Rpb24gPSBvcHRpb25zLmNvbmp1bmN0aW9uIHx8ICdhbmQnXG5cbiAgdmFyIGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aFxuXG4gIGlmIChsaXN0TGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIGlmIChvcHRpb25zLnNraXBDb25qdW5jdGlvbikge1xuICAgIHJldHVybiBsaXN0LmpvaW4oJywgJylcbiAgfVxuXG4gIHZhciBodW1hbml6ZWRMaXN0ID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0TGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gbGlzdExlbmd0aCAtIDEpIHtcbiAgICAgIGlmIChvcHRpb25zLm94Zm9yZENvbW1hKSB7XG4gICAgICAgIGh1bWFuaXplZExpc3QgKz0gJywnXG4gICAgICB9XG5cbiAgICAgIGh1bWFuaXplZExpc3QgKz0gJyAnICsgb3B0aW9ucy5jb25qdW5jdGlvbiArICcgJ1xuICAgIH0gZWxzZSBpZiAoaSAhPT0gMCkge1xuICAgICAgaHVtYW5pemVkTGlzdCArPSAnLCAnXG4gICAgfVxuXG4gICAgaHVtYW5pemVkTGlzdCArPSBsaXN0W2ldXG4gIH1cblxuICByZXR1cm4gaHVtYW5pemVkTGlzdFxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJodW1hbml6ZUxpc3QiLCJsaXN0Iiwib3B0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsIlR5cGVFcnJvciIsImNvbmp1bmN0aW9uIiwibGlzdExlbmd0aCIsImxlbmd0aCIsInNraXBDb25qdW5jdGlvbiIsImpvaW4iLCJodW1hbml6ZWRMaXN0IiwiaSIsIm94Zm9yZENvbW1hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/humanize-list/index.js\n");

/***/ })

};
;