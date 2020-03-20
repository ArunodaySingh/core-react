(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Nav-docs-Nav-dox"],{

/***/ "./src/components/Nav/docs/Nav.dox":
/*!*****************************************!*\
  !*** ./src/components/Nav/docs/Nav.dox ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var earth_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! earth-ui */ \"./src/components/index.js\");\n/* harmony import */ var widgets_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! widgets/Demo */ \"./site/widgets/Demo/index.js\");\n/* harmony import */ var widgets_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! widgets/Doc */ \"./site/widgets/Doc/index.js\");\n/* harmony import */ var widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! widgets/Markdown */ \"./site/widgets/Markdown/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar codeNavBasic = \"import React, { Component } from 'react'\\nimport { notification, Nav, SubNav, NavItemGroup, NavItem } from 'earth-ui'\\n\\nclass NavBasic extends Component {\\n  handleClick = res => {\\n    console.log(res)\\n    notification.success(res.title);\\n  }\\n  render () {\\n    return (\\n      <div style={{display: 'flex', height: 800}}>\\n        <Nav selectedId=\\\"1\\\" onItemClick={this.handleClick} logoUrl=\\\"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/paypal_payments.svg\\\">\\n          <NavItem id=\\\"1\\\" icon=\\\"envelope-o\\\" title=\\\"NavItem 1\\\" />\\n          <SubNav icon=\\\"th\\\" title=\\\"SubNav 1\\\" defaultOpen>\\n            <NavItem id=\\\"2\\\" title=\\\"NavItem 2\\\" />\\n            <NavItem id=\\\"3\\\" title=\\\"NavItem 3\\\" />\\n          </SubNav>\\n          <SubNav icon=\\\"th\\\" title=\\\"SubNav 2\\\" defaultOpen>\\n            <NavItemGroup title=\\\"NavItemGroup 1\\\">\\n              <NavItem id=\\\"4\\\" title=\\\"NavItem 4\\\" />\\n              <NavItem id=\\\"5\\\" title=\\\"NavItem 5\\\" />\\n            </NavItemGroup>\\n            <NavItemGroup title=\\\"NavItemGroup 2\\\">\\n              <NavItem id=\\\"7\\\" title=\\\"NavItem 7\\\" />\\n              <NavItem id=\\\"8\\\" title=\\\"NavItem 8\\\" />\\n            </NavItemGroup>\\n          </SubNav>\\n        </Nav>\\n        <div style={{border: '2px solid red', width: 700}}>Main content</div>\\n      </div>\\n    )\\n  }\\n}\";\n\nvar NavBasic =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NavBasic, _Component);\n\n  function NavBasic() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, NavBasic);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavBasic)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleClick\", function (res) {\n      console.log(res);\n      earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].success(res.title);\n    });\n\n    return _this;\n  }\n\n  _createClass(NavBasic, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          display: 'flex',\n          height: 800\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n        selectedId: \"1\",\n        onItemClick: this.handleClick,\n        logoUrl: \"https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/paypal_payments.svg\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"1\",\n        icon: \"envelope-o\",\n        title: \"NavItem 1\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"SubNav\"], {\n        icon: \"th\",\n        title: \"SubNav 1\",\n        defaultOpen: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"2\",\n        title: \"NavItem 2\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"3\",\n        title: \"NavItem 3\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"SubNav\"], {\n        icon: \"th\",\n        title: \"SubNav 2\",\n        defaultOpen: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItemGroup\"], {\n        title: \"NavItemGroup 1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"4\",\n        title: \"NavItem 4\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"5\",\n        title: \"NavItem 5\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItemGroup\"], {\n        title: \"NavItemGroup 2\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"7\",\n        title: \"NavItem 7\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n        id: \"8\",\n        title: \"NavItem 8\"\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          border: '2px solid red',\n          width: 700\n        }\n      }, \"Main content\"));\n    }\n  }]);\n\n  return NavBasic;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar summary = \"\";\nvar docs = [{\n  \"name\": \"Nav\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"selectedId\",\n    \"desc\": \"<p>当前选中的导航项的 id</p>\\n\",\n    \"type\": \"string\",\n    \"required\": true\n  }, {\n    \"name\": \"collapsed\",\n    \"desc\": \"<p>导航是否收起状态</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }, {\n    \"name\": \"indent\",\n    \"desc\": \"<p>导航缩进宽度</p>\\n\",\n    \"type\": \"number\",\n    \"required\": false\n  }, {\n    \"name\": \"width\",\n    \"desc\": \"<p>导航宽度</p>\\n\",\n    \"type\": \"number\",\n    \"required\": false\n  }, {\n    \"name\": \"onItemClick\",\n    \"desc\": \"<p>叶子节点 NavItem 点击事件，参数为当前 NavItem 的 props 以及 event 对象</p>\\n\",\n    \"type\": \"func\",\n    \"required\": false\n  }],\n  \"apis\": []\n}, {\n  \"name\": \"SubNav\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"children\",\n    \"desc\": \"<p>二级导航的导航项</p>\\n\",\n    \"type\": \"node\",\n    \"required\": true\n  }, {\n    \"name\": \"title\",\n    \"desc\": \"<p>二级导航标题，可以是文本字符串，也可以是 React 元素</p>\\n\",\n    \"type\": \"string | element\",\n    \"required\": false\n  }, {\n    \"name\": \"onClick\",\n    \"desc\": \"<p>点击二级导航项调用此函数</p>\\n\",\n    \"type\": \"func\",\n    \"required\": false\n  }, {\n    \"name\": \"icon\",\n    \"desc\": \"<p>二级导航项图标，参考 Icon 组件 type 属性</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }, {\n    \"name\": \"defaultOpen\",\n    \"desc\": \"<p>初始化是否展开（不可控）</p>\\n\",\n    \"type\": \"bool\",\n    \"required\": false\n  }],\n  \"apis\": []\n}, {\n  \"name\": \"NavItemGroup\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"children\",\n    \"desc\": \"<p>分组的导航项项</p>\\n\",\n    \"type\": \"node\",\n    \"required\": true\n  }, {\n    \"name\": \"title\",\n    \"desc\": \"<p>分组导航标题，可以是文本字符串，也可以是 React 元素</p>\\n\",\n    \"type\": \"string | element\",\n    \"required\": false\n  }],\n  \"apis\": []\n}, {\n  \"name\": \"NavItem\",\n  \"defaultProps\": {},\n  \"props\": [{\n    \"name\": \"id\",\n    \"desc\": \"<p>导航项 id</p>\\n\",\n    \"type\": \"string\",\n    \"required\": true\n  }, {\n    \"name\": \"title\",\n    \"desc\": \"<p>导航项标题，可以是文本字符串，也可以是 React 元素</p>\\n\",\n    \"type\": \"string | element\",\n    \"required\": false\n  }, {\n    \"name\": \"onClick\",\n    \"desc\": \"<p>点击导航项调用此函数</p>\\n\",\n    \"type\": \"func\",\n    \"required\": false\n  }, {\n    \"name\": \"icon\",\n    \"desc\": \"<p>导航项图标，参考 Icon 组件 type 属性</p>\\n\",\n    \"type\": \"string\",\n    \"required\": false\n  }],\n  \"apis\": []\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, !!summary && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Markdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    html: summary\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Demo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"\\u57FA\\u672C\\u529F\\u80FD\",\n    code: codeNavBasic,\n    desc: \"\",\n    note: \"\",\n    renderModel: \"right\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBasic, null)), docs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(earth_ui__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    col: \"md-16\"\n  }, docs.map(function (doc) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(widgets_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      key: doc.name\n    }, doc));\n  }))));\n});\n\n//# sourceURL=webpack:///./src/components/Nav/docs/Nav.dox?");

/***/ })

}]);