import React = require('react');
import { connect } from 'react-redux';
import { Paper } from 'react-md';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import LogoMenu from './menus/logoMenu/logoMenu';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
// import { AnimatedRoute } from 'react-router-transition';
import EnhancedTable from './views/checkOutViews/table';
import CustomerViewPot from './views/checkOutViews/CustomerViewPot';
import SideControlViewPort from './views/checkOutViews/SideControlViewPort/SideControlViewPort';

class WindowUi extends React.Component {
  state = { rowsPerPage: 5 };

  handlerowsPerPage = e => {
    this.setState({
      rowsPerPage: e,
    });
  };

  render() {
    return (
      <Router>
        <Paper>main</Paper>
      </Router>
    );
  }
}

export default WindowUi;
