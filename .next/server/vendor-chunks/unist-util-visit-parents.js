"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents";
exports.ids = ["vendor-chunks/unist-util-visit-parents"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit-parents/color.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\nmodule.exports = color;\nfunction color(d) {\n    return \"\\x1b[33m\" + d + \"\\x1b[39m\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2NvbG9yLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHQztBQUNqQixTQUFTQSxNQUFNQyxDQUFDO0lBQ2QsT0FBTyxhQUFlQSxJQUFJO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9jb2xvci5qcz80MGRlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY29sb3JcbmZ1bmN0aW9uIGNvbG9yKGQpIHtcbiAgcmV0dXJuICdcXHUwMDFCWzMzbScgKyBkICsgJ1xcdTAwMUJbMzltJ1xufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb2xvciIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/color.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nmodule.exports = visitParents;\nvar convert = __webpack_require__(/*! unist-util-is/convert */ \"(ssr)/./node_modules/unist-util-is/convert.js\");\nvar color = __webpack_require__(/*! ./color */ \"(ssr)/./node_modules/unist-util-visit-parents/color.js\");\nvar CONTINUE = true;\nvar SKIP = \"skip\";\nvar EXIT = false;\nvisitParents.CONTINUE = CONTINUE;\nvisitParents.SKIP = SKIP;\nvisitParents.EXIT = EXIT;\nfunction visitParents(tree, test, visitor, reverse) {\n    var step;\n    var is;\n    if (typeof test === \"function\" && typeof visitor !== \"function\") {\n        reverse = visitor;\n        visitor = test;\n        test = null;\n    }\n    is = convert(test);\n    step = reverse ? -1 : 1;\n    factory(tree, null, [])();\n    function factory(node, index, parents) {\n        var value = typeof node === \"object\" && node !== null ? node : {};\n        var name;\n        if (typeof value.type === \"string\") {\n            name = typeof value.tagName === \"string\" ? value.tagName : typeof value.name === \"string\" ? value.name : undefined;\n            visit.displayName = \"node (\" + color(value.type + (name ? \"<\" + name + \">\" : \"\")) + \")\";\n        }\n        return visit;\n        function visit() {\n            var grandparents = parents.concat(node);\n            var result = [];\n            var subresult;\n            var offset;\n            if (!test || is(node, index, parents[parents.length - 1] || null)) {\n                result = toResult(visitor(node, parents));\n                if (result[0] === EXIT) {\n                    return result;\n                }\n            }\n            if (node.children && result[0] !== SKIP) {\n                offset = (reverse ? node.children.length : -1) + step;\n                while(offset > -1 && offset < node.children.length){\n                    subresult = factory(node.children[offset], offset, grandparents)();\n                    if (subresult[0] === EXIT) {\n                        return subresult;\n                    }\n                    offset = typeof subresult[1] === \"number\" ? subresult[1] : offset + step;\n                }\n            }\n            return result;\n        }\n    }\n}\nfunction toResult(value) {\n    if (value !== null && typeof value === \"object\" && \"length\" in value) {\n        return value;\n    }\n    if (typeof value === \"number\") {\n        return [\n            CONTINUE,\n            value\n        ];\n    }\n    return [\n        value\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsVUFBVUMsbUJBQU9BLENBQUM7QUFDdEIsSUFBSUMsUUFBUUQsbUJBQU9BLENBQUM7QUFFcEIsSUFBSUUsV0FBVztBQUNmLElBQUlDLE9BQU87QUFDWCxJQUFJQyxPQUFPO0FBRVhOLGFBQWFJLFFBQVEsR0FBR0E7QUFDeEJKLGFBQWFLLElBQUksR0FBR0E7QUFDcEJMLGFBQWFNLElBQUksR0FBR0E7QUFFcEIsU0FBU04sYUFBYU8sSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsT0FBTztJQUNoRCxJQUFJQztJQUNKLElBQUlDO0lBRUosSUFBSSxPQUFPSixTQUFTLGNBQWMsT0FBT0MsWUFBWSxZQUFZO1FBQy9EQyxVQUFVRDtRQUNWQSxVQUFVRDtRQUNWQSxPQUFPO0lBQ1Q7SUFFQUksS0FBS1gsUUFBUU87SUFDYkcsT0FBT0QsVUFBVSxDQUFDLElBQUk7SUFFdEJHLFFBQVFOLE1BQU0sTUFBTSxFQUFFO0lBRXRCLFNBQVNNLFFBQVFDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPO1FBQ25DLElBQUlDLFFBQVEsT0FBT0gsU0FBUyxZQUFZQSxTQUFTLE9BQU9BLE9BQU8sQ0FBQztRQUNoRSxJQUFJSTtRQUVKLElBQUksT0FBT0QsTUFBTUUsSUFBSSxLQUFLLFVBQVU7WUFDbENELE9BQ0UsT0FBT0QsTUFBTUcsT0FBTyxLQUFLLFdBQ3JCSCxNQUFNRyxPQUFPLEdBQ2IsT0FBT0gsTUFBTUMsSUFBSSxLQUFLLFdBQ3RCRCxNQUFNQyxJQUFJLEdBQ1ZHO1lBRU5DLE1BQU1DLFdBQVcsR0FDZixXQUFXcEIsTUFBTWMsTUFBTUUsSUFBSSxHQUFJRCxDQUFBQSxPQUFPLE1BQU1BLE9BQU8sTUFBTSxFQUFDLEtBQU07UUFDcEU7UUFFQSxPQUFPSTtRQUVQLFNBQVNBO1lBQ1AsSUFBSUUsZUFBZVIsUUFBUVMsTUFBTSxDQUFDWDtZQUNsQyxJQUFJWSxTQUFTLEVBQUU7WUFDZixJQUFJQztZQUNKLElBQUlDO1lBRUosSUFBSSxDQUFDcEIsUUFBUUksR0FBR0UsTUFBTUMsT0FBT0MsT0FBTyxDQUFDQSxRQUFRYSxNQUFNLEdBQUcsRUFBRSxJQUFJLE9BQU87Z0JBQ2pFSCxTQUFTSSxTQUFTckIsUUFBUUssTUFBTUU7Z0JBRWhDLElBQUlVLE1BQU0sQ0FBQyxFQUFFLEtBQUtwQixNQUFNO29CQUN0QixPQUFPb0I7Z0JBQ1Q7WUFDRjtZQUVBLElBQUlaLEtBQUtpQixRQUFRLElBQUlMLE1BQU0sQ0FBQyxFQUFFLEtBQUtyQixNQUFNO2dCQUN2Q3VCLFNBQVMsQ0FBQ2xCLFVBQVVJLEtBQUtpQixRQUFRLENBQUNGLE1BQU0sR0FBRyxDQUFDLEtBQUtsQjtnQkFFakQsTUFBT2lCLFNBQVMsQ0FBQyxLQUFLQSxTQUFTZCxLQUFLaUIsUUFBUSxDQUFDRixNQUFNLENBQUU7b0JBQ25ERixZQUFZZCxRQUFRQyxLQUFLaUIsUUFBUSxDQUFDSCxPQUFPLEVBQUVBLFFBQVFKO29CQUVuRCxJQUFJRyxTQUFTLENBQUMsRUFBRSxLQUFLckIsTUFBTTt3QkFDekIsT0FBT3FCO29CQUNUO29CQUVBQyxTQUNFLE9BQU9ELFNBQVMsQ0FBQyxFQUFFLEtBQUssV0FBV0EsU0FBUyxDQUFDLEVBQUUsR0FBR0MsU0FBU2pCO2dCQUMvRDtZQUNGO1lBRUEsT0FBT2U7UUFDVDtJQUNGO0FBQ0Y7QUFFQSxTQUFTSSxTQUFTYixLQUFLO0lBQ3JCLElBQUlBLFVBQVUsUUFBUSxPQUFPQSxVQUFVLFlBQVksWUFBWUEsT0FBTztRQUNwRSxPQUFPQTtJQUNUO0lBRUEsSUFBSSxPQUFPQSxVQUFVLFVBQVU7UUFDN0IsT0FBTztZQUFDYjtZQUFVYTtTQUFNO0lBQzFCO0lBRUEsT0FBTztRQUFDQTtLQUFNO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcz85NmU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJylcblxudmFyIENPTlRJTlVFID0gdHJ1ZVxudmFyIFNLSVAgPSAnc2tpcCdcbnZhciBFWElUID0gZmFsc2VcblxudmlzaXRQYXJlbnRzLkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0UGFyZW50cy5TS0lQID0gU0tJUFxudmlzaXRQYXJlbnRzLkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIHZhciBzdGVwXG4gIHZhciBpc1xuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgaXMgPSBjb252ZXJ0KHRlc3QpXG4gIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgZmFjdG9yeSh0cmVlLCBudWxsLCBbXSkoKVxuXG4gIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZSAhPT0gbnVsbCA/IG5vZGUgOiB7fVxuICAgIHZhciBuYW1lXG5cbiAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID1cbiAgICAgICAgdHlwZW9mIHZhbHVlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgOiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLm5hbWVcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICB2aXNpdC5kaXNwbGF5TmFtZSA9XG4gICAgICAgICdub2RlICgnICsgY29sb3IodmFsdWUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgKyAnKSdcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRcblxuICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgdmFyIGdyYW5kcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KG5vZGUpXG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhciBzdWJyZXN1bHRcbiAgICAgIHZhciBvZmZzZXRcblxuICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPiAtMSAmJiBvZmZzZXQgPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3Rvcnkobm9kZS5jaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgaWYgKHN1YnJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIG9mZnNldCA9XG4gICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidmlzaXRQYXJlbnRzIiwiY29udmVydCIsInJlcXVpcmUiLCJjb2xvciIsIkNPTlRJTlVFIiwiU0tJUCIsIkVYSVQiLCJ0cmVlIiwidGVzdCIsInZpc2l0b3IiLCJyZXZlcnNlIiwic3RlcCIsImlzIiwiZmFjdG9yeSIsIm5vZGUiLCJpbmRleCIsInBhcmVudHMiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwidGFnTmFtZSIsInVuZGVmaW5lZCIsInZpc2l0IiwiZGlzcGxheU5hbWUiLCJncmFuZHBhcmVudHMiLCJjb25jYXQiLCJyZXN1bHQiLCJzdWJyZXN1bHQiLCJvZmZzZXQiLCJsZW5ndGgiLCJ0b1Jlc3VsdCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/index.js\n");

/***/ })

};
;