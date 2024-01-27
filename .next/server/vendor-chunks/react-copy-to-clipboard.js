"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-copy-to-clipboard";
exports.ids = ["vendor-chunks/react-copy-to-clipboard"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-copy-to-clipboard/lib/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nfunction _typeof(obj) {\n    \"@babel/helpers - typeof\";\n    return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function(obj) {\n        return typeof obj;\n    } : function(obj) {\n        return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    }, _typeof(obj);\n}\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.CopyToClipboard = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nvar _copyToClipboard = _interopRequireDefault(__webpack_require__(/*! copy-to-clipboard */ \"(ssr)/./node_modules/copy-to-clipboard/index.js\"));\nvar _excluded = [\n    \"text\",\n    \"onCopy\",\n    \"options\",\n    \"children\"\n];\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        \"default\": obj\n    };\n}\nfunction ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        enumerableOnly && (symbols = symbols.filter(function(sym) {\n            return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n        })), keys.push.apply(keys, symbols);\n    }\n    return keys;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = null != arguments[i] ? arguments[i] : {};\n        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {\n            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    Object.defineProperty(Constructor, \"prototype\", {\n        writable: false\n    });\n    return Constructor;\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    Object.defineProperty(subClass, \"prototype\", {\n        writable: false\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    } else if (call !== void 0) {\n        throw new TypeError(\"Derived constructors may only return object or undefined\");\n    }\n    return _assertThisInitialized(self);\n}\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar CopyToClipboard = /*#__PURE__*/ function(_React$PureComponent) {\n    _inherits(CopyToClipboard, _React$PureComponent);\n    var _super = _createSuper(CopyToClipboard);\n    function CopyToClipboard() {\n        var _this;\n        _classCallCheck(this, CopyToClipboard);\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        _this = _super.call.apply(_super, [\n            this\n        ].concat(args));\n        _defineProperty(_assertThisInitialized(_this), \"onClick\", function(event) {\n            var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;\n            var elem = _react[\"default\"].Children.only(children);\n            var result = (0, _copyToClipboard[\"default\"])(text, options);\n            if (onCopy) {\n                onCopy(text, result);\n            } // Bypass onClick if it was present\n            if (elem && elem.props && typeof elem.props.onClick === \"function\") {\n                elem.props.onClick(event);\n            }\n        });\n        return _this;\n    }\n    _createClass(CopyToClipboard, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);\n                var elem = _react[\"default\"].Children.only(children);\n                return /*#__PURE__*/ _react[\"default\"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {\n                    onClick: this.onClick\n                }));\n            }\n        }\n    ]);\n    return CopyToClipboard;\n}(_react[\"default\"].PureComponent);\nexports.CopyToClipboard = CopyToClipboard;\n_defineProperty(CopyToClipboard, \"defaultProps\", {\n    onCopy: undefined,\n    options: undefined\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL0NvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViLFNBQVNBLFFBQVFDLEdBQUc7SUFBSTtJQUEyQixPQUFPRCxVQUFVLGNBQWMsT0FBT0UsVUFBVSxZQUFZLE9BQU9BLE9BQU9DLFFBQVEsR0FBRyxTQUFVRixHQUFHO1FBQUksT0FBTyxPQUFPQTtJQUFLLElBQUksU0FBVUEsR0FBRztRQUFJLE9BQU9BLE9BQU8sY0FBYyxPQUFPQyxVQUFVRCxJQUFJRyxXQUFXLEtBQUtGLFVBQVVELFFBQVFDLE9BQU9HLFNBQVMsR0FBRyxXQUFXLE9BQU9KO0lBQUssR0FBR0QsUUFBUUM7QUFBTTtBQUUvVUssOENBQTZDO0lBQzNDRyxPQUFPO0FBQ1QsQ0FBQyxFQUFDO0FBQ0ZELHVCQUF1QixHQUFHLEtBQUs7QUFFL0IsSUFBSUcsU0FBU0MsdUJBQXVCQyxtQkFBT0EsQ0FBQyx3R0FBTztBQUVuRCxJQUFJQyxtQkFBbUJGLHVCQUF1QkMsbUJBQU9BLENBQUMsMEVBQW1CO0FBRXpFLElBQUlFLFlBQVk7SUFBQztJQUFRO0lBQVU7SUFBVztDQUFXO0FBRXpELFNBQVNILHVCQUF1QlgsR0FBRztJQUFJLE9BQU9BLE9BQU9BLElBQUllLFVBQVUsR0FBR2YsTUFBTTtRQUFFLFdBQVdBO0lBQUk7QUFBRztBQUVoRyxTQUFTZ0IsUUFBUUMsTUFBTSxFQUFFQyxjQUFjO0lBQUksSUFBSUMsT0FBT2QsT0FBT2MsSUFBSSxDQUFDRjtJQUFTLElBQUlaLE9BQU9lLHFCQUFxQixFQUFFO1FBQUUsSUFBSUMsVUFBVWhCLE9BQU9lLHFCQUFxQixDQUFDSDtRQUFTQyxrQkFBbUJHLENBQUFBLFVBQVVBLFFBQVFDLE1BQU0sQ0FBQyxTQUFVQyxHQUFHO1lBQUksT0FBT2xCLE9BQU9tQix3QkFBd0IsQ0FBQ1AsUUFBUU0sS0FBS0UsVUFBVTtRQUFFLEVBQUMsR0FBSU4sS0FBS08sSUFBSSxDQUFDQyxL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LEtBQUs7WUFDTDNCLE9BQU8sU0FBU21HO2dCQUNkLElBQUlDLGVBQWUsSUFBSSxDQUFDeEQsS0FBSyxFQUN6QnlELFFBQVFELGFBQWFULElBQUksRUFDekJXLFVBQVVGLGFBQWFSLE1BQU0sRUFDN0JXLFdBQVdILGFBQWFOLE9BQU8sRUFDL0JELFdBQVdPLGFBQWFQLFFBQVEsRUFDaENqRCxRQUFRYix5QkFBeUJxRSxjQUFjOUY7Z0JBRW5ELElBQUl5RixPQUFPN0YsTUFBTSxDQUFDLFVBQVUsQ0FBQzhGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSjtnQkFFM0MsT0FBTyxXQUFXLEdBQUUzRixNQUFNLENBQUMsVUFBVSxDQUFDc0csWUFBWSxDQUFDVCxNQUFNM0UsY0FBY0EsY0FBYyxDQUFDLEdBQUd3QixRQUFRLENBQUMsR0FBRztvQkFDbkdzRCxTQUFTLElBQUksQ0FBQ0EsT0FBTztnQkFDdkI7WUFDRjtRQUNGO0tBQUU7SUFFRixPQUFPakc7QUFDVCxFQUFFQyxNQUFNLENBQUMsVUFBVSxDQUFDdUcsYUFBYTtBQUVqQzFHLHVCQUF1QixHQUFHRTtBQUUxQjJCLGdCQUFnQjNCLGlCQUFpQixnQkFBZ0I7SUFDL0MyRixRQUFRYztJQUNSWixTQUFTWTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkL2xpYi9Db21wb25lbnQuanM/NTkwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db3B5VG9DbGlwYm9hcmQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY29weVRvQ2xpcGJvYXJkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY29weS10by1jbGlwYm9hcmRcIikpO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1widGV4dFwiLCBcIm9uQ29weVwiLCBcIm9wdGlvbnNcIiwgXCJjaGlsZHJlblwiXTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgQ29weVRvQ2xpcGJvYXJkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29weVRvQ2xpcGJvYXJkLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDb3B5VG9DbGlwYm9hcmQpO1xuXG4gIGZ1bmN0aW9uIENvcHlUb0NsaXBib2FyZCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29weVRvQ2xpcGJvYXJkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcy50ZXh0LFxuICAgICAgICAgIG9uQ29weSA9IF90aGlzJHByb3BzLm9uQ29weSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpcyRwcm9wcy5vcHRpb25zO1xuXG4gICAgICB2YXIgZWxlbSA9IF9yZWFjdFtcImRlZmF1bHRcIl0uQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICAgIHZhciByZXN1bHQgPSAoMCwgX2NvcHlUb0NsaXBib2FyZFtcImRlZmF1bHRcIl0pKHRleHQsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAob25Db3B5KSB7XG4gICAgICAgIG9uQ29weSh0ZXh0LCByZXN1bHQpO1xuICAgICAgfSAvLyBCeXBhc3Mgb25DbGljayBpZiBpdCB3YXMgcHJlc2VudFxuXG5cbiAgICAgIGlmIChlbGVtICYmIGVsZW0ucHJvcHMgJiYgdHlwZW9mIGVsZW0ucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbGVtLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvcHlUb0NsaXBib2FyZCwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIF90ZXh0ID0gX3RoaXMkcHJvcHMyLnRleHQsXG4gICAgICAgICAgX29uQ29weSA9IF90aGlzJHByb3BzMi5vbkNvcHksXG4gICAgICAgICAgX29wdGlvbnMgPSBfdGhpcyRwcm9wczIub3B0aW9ucyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczIsIF9leGNsdWRlZCk7XG5cbiAgICAgIHZhciBlbGVtID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNsb25lRWxlbWVudChlbGVtLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvcHlUb0NsaXBib2FyZDtcbn0oX3JlYWN0W1wiZGVmYXVsdFwiXS5QdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0cy5Db3B5VG9DbGlwYm9hcmQgPSBDb3B5VG9DbGlwYm9hcmQ7XG5cbl9kZWZpbmVQcm9wZXJ0eShDb3B5VG9DbGlwYm9hcmQsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgb25Db3B5OiB1bmRlZmluZWQsXG4gIG9wdGlvbnM6IHVuZGVmaW5lZFxufSk7Il0sIm5hbWVzIjpbIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJDb3B5VG9DbGlwYm9hcmQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jb3B5VG9DbGlwYm9hcmQiLCJfZXhjbHVkZWQiLCJfX2VzTW9kdWxlIiwib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJmb3JFYWNoIiwia2V5IiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsIl9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInNlbGYiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsImUiLCJnZXRQcm90b3R5cGVPZiIsIl9SZWFjdCRQdXJlQ29tcG9uZW50IiwiX3N1cGVyIiwiX3RoaXMiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbmNhdCIsImV2ZW50IiwiX3RoaXMkcHJvcHMiLCJ0ZXh0Iiwib25Db3B5IiwiY2hpbGRyZW4iLCJvcHRpb25zIiwiZWxlbSIsIkNoaWxkcmVuIiwib25seSIsIm9uQ2xpY2siLCJyZW5kZXIiLCJfdGhpcyRwcm9wczIiLCJfdGV4dCIsIl9vbkNvcHkiLCJfb3B0aW9ucyIsImNsb25lRWxlbWVudCIsIlB1cmVDb21wb25lbnQiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-copy-to-clipboard/lib/Component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _require = __webpack_require__(/*! ./Component */ \"(ssr)/./node_modules/react-copy-to-clipboard/lib/Component.js\"), CopyToClipboard = _require.CopyToClipboard;\nCopyToClipboard.CopyToClipboard = CopyToClipboard;\nmodule.exports = CopyToClipboard;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29weS10by1jbGlwYm9hcmQvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBRWIsSUFBSUEsV0FBV0MsbUJBQU9BLENBQUMscUZBQ25CQyxrQkFBa0JGLFNBQVNFLGVBQWU7QUFFOUNBLGdCQUFnQkEsZUFBZSxHQUFHQTtBQUNsQ0MsT0FBT0MsT0FBTyxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb3B5LXRvLWNsaXBib2FyZC9saWIvaW5kZXguanM/YWRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9Db21wb25lbnQnKSxcbiAgICBDb3B5VG9DbGlwYm9hcmQgPSBfcmVxdWlyZS5Db3B5VG9DbGlwYm9hcmQ7XG5cbkNvcHlUb0NsaXBib2FyZC5Db3B5VG9DbGlwYm9hcmQgPSBDb3B5VG9DbGlwYm9hcmQ7XG5tb2R1bGUuZXhwb3J0cyA9IENvcHlUb0NsaXBib2FyZDsiXSwibmFtZXMiOlsiX3JlcXVpcmUiLCJyZXF1aXJlIiwiQ29weVRvQ2xpcGJvYXJkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-copy-to-clipboard/lib/index.js\n");

/***/ })

};
;