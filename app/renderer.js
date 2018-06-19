"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var app_1 = require("./app");
// import { composeWithDevTools } from 'redux-devtools-extension';
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var User_1 = require("../app/Reducers/User/User");
var detials_1 = require("./Reducers/CompanyDetials/detials");
// installExtension(REDUX_DEVTOOLS)
//   .then(name => console.log(`Added Extension:  ${name}`))
//   .catch(err => console.log('An error occurred: ', err));
var AllReducers = redux_1.combineReducers({
    user: User_1.default,
    company: detials_1.default,
});
var store = redux_1.createStore(AllReducers, redux_1.applyMiddleware(redux_thunk_1.default));
exports.default = store;
var action = function (type) { return store.dispatch(type); };
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(app_1.default, null)));
    };
    return Main;
}(React.Component));
ReactDom.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(Main, null))), document.querySelector('main'));
//# sourceMappingURL=renderer.js.map