"use strict";
<<<<<<< HEAD
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
=======
>>>>>>> ee3a204c0eb486552aee7f7685975628380b8c93
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

<<<<<<< HEAD
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: 'Bad Request',\n    404: 'This page could not be found',\n    405: 'Method Not Allowed',\n    500: 'Internal Server Error'\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n        return(/*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: 'body { margin: 0 }'\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\")))));\n    }\n}\nError.displayName = 'ErrorPage';\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error;\nconst styles = {\n    error: {\n        color: '#000',\n        background: '#fff',\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: '100vh',\n        textAlign: 'center',\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'center'\n    },\n    desc: {\n        display: 'inline-block',\n        textAlign: 'left',\n        lineHeight: '49px',\n        height: '49px',\n        verticalAlign: 'middle'\n    },\n    h1: {\n        display: 'inline-block',\n        borderRight: '1px solid rgba(0, 0, 0,.3)',\n        margin: 0,\n        marginRight: '20px',\n        padding: '10px 23px 10px 0',\n        fontSize: '24px',\n        fontWeight: 500,\n        verticalAlign: 'top'\n    },\n    h2: {\n        fontSize: '14px',\n        fontWeight: 'normal',\n        lineHeight: 'inherit',\n        margin: 0,\n        padding: 0\n    }\n}; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaQSw4Q0FBNkMsQ0FBQztJQUMxQ0csS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsa0JBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUNHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU87QUFDbkQsR0FBRyxDQUFDQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFvQjtTQUN0REQsc0JBQXNCLENBQUNHLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHLENBQUM7UUFDbENMLE9BQU8sRUFBRUssR0FBRztJQUNoQixDQUFDO0FBQ0wsQ0FBQztBQUNELEtBQUssQ0FBQ0UsV0FBVyxHQUFHLENBQUM7SUFDakIsR0FBRyxFQUFFLENBQWE7SUFDbEIsR0FBRyxFQUFFLENBQThCO0lBQ25DLEdBQUcsRUFBRSxDQUFvQjtJQUN6QixHQUFHLEVBQUUsQ0FBdUI7QUFDaEMsQ0FBQztTQUNRQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBR0MsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRixHQUFHLENBQUNFLFVBQVUsR0FBR0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFVBQVUsR0FBRyxHQUFHO0lBQ3RGLE1BQU0sQ0FBQyxDQUFDO1FBQ0pBLFVBQVU7SUFDZCxDQUFDO0FBQ0wsQ0FBQztNQUNLQyxLQUFLLFNBQVNYLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxTQUFTO0lBQ3hDQyxNQUFNLEdBQUcsQ0FBQztRQUNOLEtBQUssQ0FBQyxDQUFDLENBQUNILFVBQVUsRUFBRSxD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Q0FBTTtRQUNuQkMsT0FBTyxFQUFFLENBQWtCO1FBQzNCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLEdBQUc7UUFDZk4sYUFBYSxFQUFFLENBQUs7SUFDeEIsQ0FBQztJQUNEZixFQUFFLEVBQUUsQ0FBQztRQUNEb0IsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFRO1FBQ3BCUCxVQUFVLEVBQUUsQ0FBUztRQUNyQkcsTUFBTSxFQUFFLENBQUM7UUFDVEUsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0FBQ0wsQ0FBQyxDQUVELENBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZXJyb3JcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHN0YXR1c0NvZGUgPyBgJHtzdGF0dXNDb2RlfTogJHt0aXRsZX1gIDogJ0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogJ2JvZHkgeyBtYXJnaW46IDAgfSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgxXG4gICAgICAgIH0sIHN0YXR1c0NvZGUpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmgyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpKTtcbiAgICB9XG59XG5FcnJvci5kaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnO1xuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3I7XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZXJyb3I6IHtcbiAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICBmb250RmFtaWx5OiAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxuICAgICAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgcGFkZGluZzogMFxuICAgIH1cbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiZGVzYyIsImgyIiwiRnJhZ21lbnQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250RmFtaWx5IiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImJvcmRlclJpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");
=======


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}

class Error1 extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
  }

}

Error1.displayName = 'ErrorPage';
Error1.getInitialProps = _getInitialProps;
Error1.origGetInitialProps = _getInitialProps;
exports.default = Error1;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};
>>>>>>> ee3a204c0eb486552aee7f7685975628380b8c93

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

<<<<<<< HEAD
})();
=======
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2Vycm9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBbEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NHLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ0wsSUFBQUEsT0FBTyxFQUFFSztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1FLFdBQVcsR0FBRztBQUNoQixPQUFLLGFBRFc7QUFFaEIsT0FBSyw4QkFGVztBQUdoQixPQUFLLG9CQUhXO0FBSWhCLE9BQUs7QUFKVyxDQUFwQjs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQjtBQUFFQyxFQUFBQSxHQUFGO0FBQVFDLEVBQUFBO0FBQVIsQ0FBMUIsRUFBMEM7QUFDdEMsUUFBTUMsVUFBVSxHQUFHRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBWCxHQUF3QkYsR0FBRyxDQUFDRSxVQUE1QixHQUF5Q0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFVBQVAsR0FBb0IsR0FBbkY7QUFDQSxTQUFPO0FBQ0hBLElBQUFBO0FBREcsR0FBUDtBQUdIOztBQUNELE1BQU1DLE1BQU4sU0FBcUJYLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlYSxTQUFwQyxDQUE4QztBQUMxQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFSCxNQUFBQTtBQUFGLFFBQWtCLEtBQUtJLEtBQTdCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxJQUFvQlQsV0FBVyxDQUFDSSxVQUFELENBQS9CLElBQStDLGtDQUE3RDtBQUNBLFdBQU8sYUFBY1YsTUFBTSxDQUFDRCxPQUFQLENBQWVpQixhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQ3JEQyxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7QUFEdUMsS0FBcEMsRUFFbEIsYUFBY25CLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QmIsS0FBSyxDQUFDSixPQUFuQyxFQUE0QyxJQUE1QyxFQUFrRCxhQUFjQyxNQUFNLENBQUNELE9BQVAsQ0FBZWlCLGFBQWYsQ0FBNkIsT0FBN0IsRUFBc0MsSUFBdEMsRUFBNENOLFVBQVUsR0FBSSxHQUFFQSxVQUFXLEtBQUlLLEtBQU0sRUFBM0IsR0FBK0IseURBQXJGLENBQWhFLENBRkksRUFFOE0sYUFBY2YsTUFBTSxDQUFDRCxPQUFQLENBQWVpQixhQUFmLENBQTZCLEtBQTdCLEVBQW9DLElBQXBDLEVBQTBDLGFBQWNoQixNQUFNLENBQUNELE9BQVAsQ0FBZWlCLGFBQWYsQ0FBNkIsT0FBN0IsRUFBc0M7QUFDM1VJLE1BQUFBLHVCQUF1QixFQUFFO0FBQ3JCQyxRQUFBQSxNQUFNLEVBQUU7QUFEYTtBQURrVCxLQUF0QyxDQUF4RCxFQUk3T1gsVUFBVSxHQUFHLGFBQWNWLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QixJQUE3QixFQUFtQztBQUM5REMsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNJO0FBRGdELEtBQW5DLEVBRTVCWixVQUY0QixDQUFqQixHQUVHLElBTmdPLEVBTTFOLGFBQWNWLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUNyRUMsTUFBQUEsS0FBSyxFQUFFQyxNQUFNLENBQUNLO0FBRHVELEtBQXBDLEVBRWxDLGFBQWN2QixNQUFNLENBQUNELE9BQVAsQ0FBZWlCLGFBQWYsQ0FBNkIsSUFBN0IsRUFBbUM7QUFDaERDLE1BQUFBLEtBQUssRUFBRUMsTUFBTSxDQUFDTTtBQURrQyxLQUFuQyxFQUVkLEtBQUtWLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQkwsVUFBcEIsR0FBaUNLLEtBQWpDLEdBQXlDLGFBQWNmLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlaUIsYUFBZixDQUE2QmhCLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlMEIsUUFBNUMsRUFBc0QsSUFBdEQsRUFBNEQsd0dBQTVELENBRnpDLEVBRWdOLEdBRmhOLENBRm9CLENBTjRNLENBRjVOLENBQXJCO0FBYUg7O0FBakJ5Qzs7QUFtQjlDZCxNQUFNLENBQUNlLFdBQVAsR0FBcUIsV0FBckI7QUFDQWYsTUFBTSxDQUFDZ0IsZUFBUCxHQUF5QnBCLGdCQUF6QjtBQUNBSSxNQUFNLENBQUNpQixtQkFBUCxHQUE2QnJCLGdCQUE3QjtBQUNBVixlQUFBLEdBQWtCYyxNQUFsQjtBQUNBLE1BQU1PLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxLQUFLLEVBQUU7QUFDSFUsSUFBQUEsS0FBSyxFQUFFLE1BREo7QUFFSEMsSUFBQUEsVUFBVSxFQUFFLE1BRlQ7QUFHSEMsSUFBQUEsVUFBVSxFQUFFLDJIQUhUO0FBSUhDLElBQUFBLE1BQU0sRUFBRSxPQUpMO0FBS0hDLElBQUFBLFNBQVMsRUFBRSxRQUxSO0FBTUhDLElBQUFBLE9BQU8sRUFBRSxNQU5OO0FBT0hDLElBQUFBLGFBQWEsRUFBRSxRQVBaO0FBUUhDLElBQUFBLFVBQVUsRUFBRSxRQVJUO0FBU0hDLElBQUFBLGNBQWMsRUFBRTtBQVRiLEdBREk7QUFZWGQsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZXLElBQUFBLE9BQU8sRUFBRSxjQURQO0FBRUZELElBQUFBLFNBQVMsRUFBRSxNQUZUO0FBR0ZLLElBQUFBLFVBQVUsRUFBRSxNQUhWO0FBSUZOLElBQUFBLE1BQU0sRUFBRSxNQUpOO0FBS0ZPLElBQUFBLGFBQWEsRUFBRTtBQUxiLEdBWks7QUFtQlhqQixFQUFBQSxFQUFFLEVBQUU7QUFDQVksSUFBQUEsT0FBTyxFQUFFLGNBRFQ7QUFFQU0sSUFBQUEsV0FBVyxFQUFFLDRCQUZiO0FBR0FDLElBQUFBLE1BQU0sRUFBRSxDQUhSO0FBSUFDLElBQUFBLFdBQVcsRUFBRSxNQUpiO0FBS0FDLElBQUFBLE9BQU8sRUFBRSxrQkFMVDtBQU1BQyxJQUFBQSxRQUFRLEVBQUUsTUFOVjtBQU9BQyxJQUFBQSxVQUFVLEVBQUUsR0FQWjtBQVFBTixJQUFBQSxhQUFhLEVBQUU7QUFSZixHQW5CTztBQTZCWGYsRUFBQUEsRUFBRSxFQUFFO0FBQ0FvQixJQUFBQSxRQUFRLEVBQUUsTUFEVjtBQUVBQyxJQUFBQSxVQUFVLEVBQUUsUUFGWjtBQUdBUCxJQUFBQSxVQUFVLEVBQUUsU0FIWjtBQUlBRyxJQUFBQSxNQUFNLEVBQUUsQ0FKUjtBQUtBRSxJQUFBQSxPQUFPLEVBQUU7QUFMVDtBQTdCTyxDQUFmOzs7Ozs7Ozs7O0FDL0NBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICAgIDQwNDogJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLFxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gICAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJ1xufTtcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cbmNsYXNzIEVycm9yMSBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmVycm9yXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMVxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogc3R5bGVzLmRlc2NcbiAgICAgICAgfSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxuICAgICAgICB9LCB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGUgPyB0aXRsZSA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChzZWUgdGhlIGJyb3dzZXIgY29uc29sZSBmb3IgbW9yZSBpbmZvcm1hdGlvbilcIiksIFwiLlwiKSkpKSk7XG4gICAgfVxufVxuRXJyb3IxLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XG5FcnJvcjEuZ2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbkVycm9yMS5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yMTtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yMSIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> ee3a204c0eb486552aee7f7685975628380b8c93
