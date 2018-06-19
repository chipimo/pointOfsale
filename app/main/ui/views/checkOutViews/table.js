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
var styles_1 = require("material-ui/styles");
var Table_1 = require("material-ui/Table");
var Toolbar_1 = require("material-ui/Toolbar");
var Typography_1 = require("material-ui/Typography");
var Paper_1 = require("material-ui/Paper");
var Checkbox_1 = require("material-ui/Checkbox");
var IconButton_1 = require("material-ui/IconButton");
var Tooltip_1 = require("material-ui/Tooltip");
var Delete_1 = require("material-ui-icons/Delete");
var FilterList_1 = require("material-ui-icons/FilterList");
var Menu_1 = require("material-ui/Menu");
var Form_1 = require("material-ui/Form");
var Select_1 = require("material-ui/Select");
var IteminputField_1 = require("./IteminputField");
var counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}
var CustomTableCell = styles_1.withStyles(function (theme) { return ({
    head: {
        backgroundColor: '#303F9F',
        color: '#fff',
        fontSize: 14,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderTopColor: '#D6D6D6',
        '&hover': {
            backgroundColor: 'green',
        },
    },
    body: {
        fontSize: 14,
        paddingLeft: 10,
    },
}); })(Table_1.TableCell);
var columnData = [
    {
        id: 'description',
        numeric: false,
        disablePadding: true,
        label: 'Description (100g serving)',
    },
    { id: 'id', numeric: true, disablePadding: false, label: 'Product (id)' },
    { id: 'qt', numeric: true, disablePadding: false, label: 'Qt' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price (k)' },
    { id: 'total', numeric: true, disablePadding: false, label: 'Total (k)' },
];
var EnhancedTableHead = /** @class */ (function (_super) {
    __extends(EnhancedTableHead, _super);
    function EnhancedTableHead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createSortHandler = function (property) { return function (event) {
            _this.props.onRequestSort(event, property);
        }; };
        return _this;
    }
    EnhancedTableHead.prototype.render = function () {
        var _this = this;
        var _a = this.props, onSelectAllClick = _a.onSelectAllClick, order = _a.order, orderBy = _a.orderBy, numSelected = _a.numSelected, rowCount = _a.rowCount;
        return (React.createElement(Table_1.TableHead, null,
            React.createElement(Table_1.TableRow, null,
                React.createElement(CustomTableCell, { padding: "checkbox" },
                    React.createElement(Checkbox_1.default, { indeterminate: numSelected > 0 && numSelected < rowCount, checked: numSelected === rowCount, onChange: onSelectAllClick, color: "primary", className: "headerCheck" })),
                columnData.map(function (column) {
                    return (React.createElement(CustomTableCell, { key: column.id, numeric: column.numeric, padding: column.disablePadding ? 'none' : 'default', sortDirection: orderBy === column.id ? order : false },
                        React.createElement(Tooltip_1.default, { title: "Sort", placement: column.numeric ? 'bottom-end' : 'bottom-start', enterDelay: 300 },
                            React.createElement(Table_1.TableSortLabel, { active: orderBy === column.id, direction: order, onClick: _this.createSortHandler(column.id) }, column.label))));
                }, this))));
    };
    return EnhancedTableHead;
}(React.Component));
var toolbarStyles = {
    root: {
        paddingRight: 10,
    },
    highlight: {
        color: '#3b3b3b',
        backgroundColor: '#CDE5B3',
    },
    highlighted: {
        color: '#E50050',
        backgroundColor: '#FBE0EA',
    },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: '#3b3b3b',
    },
    title: {
        flex: '0 0 auto',
    },
};
var EnhancedTableToolbar = /** @class */ (function (_super) {
    __extends(EnhancedTableToolbar, _super);
    function EnhancedTableToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            doctype: 'Invoice',
            name: 'hai',
        };
        _this.handleChange = function (event) {
            _this.setState((_a = {}, _a[event.target.name] = event.target.value, _a));
            var _a;
        };
        return _this;
    }
    EnhancedTableToolbar.prototype.render = function () {
        var numSelected = this.props.numSelected;
        return (React.createElement(Toolbar_1.default, { style: numSelected > 0 ? toolbarStyles.highlighted : toolbarStyles.highlight },
            React.createElement("div", { style: toolbarStyles.title }, numSelected > 0 ? (React.createElement(Typography_1.default, { color: "inherit", variant: "subheading" },
                numSelected,
                " selected")) : (React.createElement(Typography_1.default, { variant: "title" }, this.state.doctype))),
            React.createElement("div", { style: toolbarStyles.spacer }),
            React.createElement("div", { style: toolbarStyles.actions },
                React.createElement("div", { style: { position: 'absolute', marginLeft: -600 } },
                    React.createElement("div", null,
                        React.createElement(IteminputField_1.default, null)),
                    React.createElement("div", { style: { position: 'absolute', marginLeft: 400, marginTop: -45 } },
                        React.createElement(Form_1.FormControl, { style: { minWidth: 120 } },
                            React.createElement(Select_1.default, { value: this.state.doctype, onChange: this.handleChange, displayEmpty: true, name: "doctype" },
                                React.createElement(Menu_1.MenuItem, { value: "By defualt is doc will be set to (Invoice)" },
                                    React.createElement("em", null, "none")),
                                React.createElement(Menu_1.MenuItem, { value: "Invoice" }, "Invoice"),
                                React.createElement(Menu_1.MenuItem, { value: "POS Recepit" }, "POS Recepit"),
                                React.createElement(Menu_1.MenuItem, { value: "Quotation" }, "Quotation")),
                            React.createElement(Form_1.FormHelperText, null, "Document type")))),
                numSelected > 0 ? (React.createElement(Tooltip_1.default, { title: "Delete" },
                    React.createElement(IconButton_1.default, { "aria-label": "Delete" },
                        React.createElement(Delete_1.default, null)))) : (React.createElement(Tooltip_1.default, { title: "Filter list" },
                    React.createElement(IconButton_1.default, { "aria-label": "Filter list" },
                        React.createElement(FilterList_1.default, null)))))));
    };
    return EnhancedTableToolbar;
}(React.Component));
var styles = {
    root: {
        width: '100%',
        marginTop: 10,
    },
    table: {
        minWidth: 700,
        fontSize: 20,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
};
var EnhancedTable = /** @class */ (function (_super) {
    __extends(EnhancedTable, _super);
    function EnhancedTable(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleRequestSort = function (event, property) {
            var orderBy = property;
            var order = 'desc';
            if (_this.state.orderBy === property && _this.state.order === 'desc') {
                order = 'asc';
            }
            var data = order === 'desc'
                ? _this.state.data.sort(function (a, b) { return (b[orderBy] < a[orderBy] ? -1 : 1); })
                : _this.state.data.sort(function (a, b) { return (a[orderBy] < b[orderBy] ? -1 : 1); });
            _this.setState({ data: data, order: order, orderBy: orderBy });
        };
        _this.handleSelectAllClick = function (event, checked) {
            if (checked) {
                _this.setState({ selected: _this.state.data.map(function (n) { return n.id; }) });
                return;
            }
            _this.setState({ selected: [] });
        };
        _this.handleClick = function (event, id) {
            var selected = _this.state.selected;
            var selectedIndex = selected.indexOf(id);
            var newSelected = [];
            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, id);
            }
            else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            }
            else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            }
            else if (selectedIndex > 0) {
                newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
            }
            _this.setState({ selected: newSelected });
        };
        _this.handleChangePage = function (event, page) {
            _this.setState({ page: page });
        };
        _this.handleChangeRowsPerPage = function (event) {
            _this.setState({ rowsPerPage: event.target.value });
            _this.props.SetrowsPerPage(event.target.value);
        };
        _this.isSelected = function (id) { return _this.state.selected.indexOf(id) !== -1; };
        _this.state = {
            order: 'asc',
            orderBy: 'calories',
            selected: [],
            data: [
                createData('Cupcake', 305, 3.7, 67, 4.3),
                createData('Donut', 452, 25.0, 51, 4.9),
                createData('Eclair', 262, 16.0, 24, 6.0),
                createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                createData('Gingerbread', 356, 16.0, 49, 3.9),
                createData('Honeycomb', 408, 3.2, 87, 6.5),
                createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                createData('Jelly Bean', 375, 0.0, 94, 0.0),
                createData('KitKat', 518, 26.0, 65, 7.0),
                createData('Lollipop', 392, 0.2, 98, 0.0),
                createData('Marshmallow', 318, 0, 81, 2.0),
                createData('Nougat', 360, 19.0, 9, 37.0),
                createData('Oreo', 437, 18.0, 63, 4.0),
            ].sort(function (a, b) { return (a.calories < b.calories ? -1 : 1); }),
            page: 0,
            rowsPerPage: 5,
        };
        return _this;
    }
    EnhancedTable.prototype.render = function () {
        var _this = this;
        var _a = this.state, data = _a.data, order = _a.order, orderBy = _a.orderBy, selected = _a.selected, rowsPerPage = _a.rowsPerPage, page = _a.page;
        var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
        return (React.createElement(Paper_1.default, { style: styles.root },
            React.createElement(EnhancedTableToolbar, { numSelected: selected.length }),
            React.createElement("div", { style: styles.tableWrapper },
                React.createElement(Table_1.default, { style: styles.table },
                    React.createElement(EnhancedTableHead, { numSelected: selected.length, order: order, orderBy: orderBy, onSelectAllClick: this.handleSelectAllClick, onRequestSort: this.handleRequestSort, rowCount: data.length }),
                    React.createElement(Table_1.TableBody, null,
                        data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(function (n) {
                            var isSelected = _this.isSelected(n.id);
                            return (React.createElement(Table_1.TableRow, { hover: true, onClick: function (event) { return _this.handleClick(event, n.id); }, role: "checkbox", "aria-checked": isSelected, tabIndex: -1, key: n.id, selected: isSelected },
                                React.createElement(CustomTableCell, { padding: "checkbox" },
                                    React.createElement(Checkbox_1.default, { checked: isSelected })),
                                React.createElement(CustomTableCell, { padding: "none" }, n.name),
                                React.createElement(CustomTableCell, { numeric: true }, n.calories),
                                React.createElement(CustomTableCell, { numeric: true }, n.fat),
                                React.createElement(CustomTableCell, { numeric: true }, n.carbs),
                                React.createElement(CustomTableCell, { numeric: true }, n.protein)));
                        }),
                        emptyRows > 0 && (React.createElement(Table_1.TableRow, { style: { height: 49 * emptyRows } },
                            React.createElement(CustomTableCell, { colSpan: 6 })))))),
            React.createElement(Table_1.TablePagination, { component: "div", count: data.length, rowsPerPage: rowsPerPage, page: page, backIconButtonProps: {
                    'aria-label': 'Previous Page',
                }, nextIconButtonProps: {
                    'aria-label': 'Next Page',
                }, onChangePage: this.handleChangePage, onChangeRowsPerPage: this.handleChangeRowsPerPage })));
    };
    return EnhancedTable;
}(React.Component));
exports.default = EnhancedTable;
//# sourceMappingURL=table.js.map