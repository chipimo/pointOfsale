import React = require('react');
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import { lighten } from 'material-ui/styles/colorManipulator';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import IteminputField from './IteminputField';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

const CustomTableCell = withStyles(theme => ({
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
}))(TableCell);

const columnData = [
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

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <CustomTableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              color="primary"
              className="headerCheck"
            />
          </CustomTableCell>
          {columnData.map(column => {
            return (
              <CustomTableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </CustomTableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

const toolbarStyles = {
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

class EnhancedTableToolbar extends React.Component {
  state = {
    doctype: 'Invoice',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { numSelected } = this.props;

    return (
      <Toolbar
        style={
          numSelected > 0 ? toolbarStyles.highlighted : toolbarStyles.highlight
        }
      >
        <div style={toolbarStyles.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="title">{this.state.doctype}</Typography>
          )}
        </div>
        <div style={toolbarStyles.spacer} />
        <div style={toolbarStyles.actions}>
          <div style={{ position: 'absolute', marginLeft: -600 }}>
            <div>
              <IteminputField />
            </div>
            <div
              style={{ position: 'absolute', marginLeft: 400, marginTop: -45 }}
            >
              <FormControl style={{ minWidth: 120 }}>
                <Select
                  value={this.state.doctype}
                  onChange={this.handleChange}
                  displayEmpty
                  name="doctype"
                >
                  <MenuItem value="By defualt is doc will be set to (Invoice)">
                    <em>none</em>
                  </MenuItem>
                  <MenuItem value="Invoice">Invoice</MenuItem>
                  <MenuItem value="POS Recepit">POS Recepit</MenuItem>
                  <MenuItem value="Quotation">Quotation</MenuItem>
                </Select>
                <FormHelperText>Document type</FormHelperText>
              </FormControl>
            </div>
          </div>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
  }
}

const styles = {
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

class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
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
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    this.props.SetrowsPerPage(event.target.value);
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper style={styles.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div style={styles.tableWrapper}>
          <Table style={styles.table}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <CustomTableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </CustomTableCell>
                      <CustomTableCell padding="none">{n.name}</CustomTableCell>
                      <CustomTableCell numeric>{n.calories}</CustomTableCell>
                      <CustomTableCell numeric>{n.fat}</CustomTableCell>
                      <CustomTableCell numeric>{n.carbs}</CustomTableCell>
                      <CustomTableCell numeric>{n.protein}</CustomTableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <CustomTableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default EnhancedTable;
