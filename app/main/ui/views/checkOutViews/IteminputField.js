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
var react_select_1 = require("react-select");
var IteminputField = /** @class */ (function (_super) {
    __extends(IteminputField, _super);
    function IteminputField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedOption: '',
        };
        _this.handleChange = function (selectedOption) {
            _this.setState({ selectedOption: selectedOption });
            console.log("Selected: " + selectedOption.label);
        };
        return _this;
    }
    IteminputField.prototype.render = function () {
        var selectedOption = this.state.selectedOption;
        var value = selectedOption && selectedOption.value;
        return (React.createElement("div", null,
            React.createElement(react_select_1.default, { style: { width: 350, marginTop: 5 }, name: "form-field-name", value: value, onChange: this.handleChange, options: [
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ] })));
    };
    return IteminputField;
}(React.Component));
exports.default = IteminputField;
//# sourceMappingURL=IteminputField.js.map