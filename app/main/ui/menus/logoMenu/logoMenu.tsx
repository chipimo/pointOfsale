import React = require('react');
import { iconPath } from '../../../../../../assets/img/icons/paths';
import { Image, Icon } from 'semantic-ui-react';
import Settings from 'material-ui-icons/settings';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import People from 'material-ui-icons/People';
import Assignment from 'material-ui-icons/Assignment';
import AccountCircle from 'material-ui-icons/AccountCircle';

class LogoMenu extends React.Component {
  state = { searchWidth: 300, inputWidth:270 };
  businessLabel = () => {};

  render() {
    const { searchWidth, inputWidth } = this.state;
    return (
      <div style={{ paddingTop: 10, paddingLeft: 20, width: '100%' }}>
        <div>
          <div style={{ display: 'inline-block' }}>
            <Image src={iconPath + '/logo.png'} avatar />
            <span style={{ color: '#ccc' }}>Company name</span>
          </div>
          <div
            style={{ display: 'inline-block', marginTop: -20, marginLeft: 20 }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.3)',
                height: 30,
                borderRadius: 2,
              }}
              >
              <input
                style={{
                  transition: 'all 0.5s',
                  background: 'transparent',
                  border: 'none',
                  paddingLeft: 10,
                  outline: 'none',
                  height: 30,
                  width: inputWidth,
                  color: '#fff',
                }}
                placeholder="Search"
                onFocus={() => this.setState({  inputWidth:400 })}
                onBlur={() => this.setState({  inputWidth:270 })}
              />
              <Icon name="search" style={{ color: '#ccc', paddingRight:20, }} />
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              marginTop: -35,
              marginLeft: 950,
              textAlign: 'right',
            }}
          >
            <Tooltip title="Point of sale">
              <IconButton>
                <ShoppingCart style={{ color: '#6CFBFF' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Stock Control">
              <IconButton>
                <Assignment style={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Stock Control">
              <IconButton>
                <Settings style={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>

            <IconButton>
              <AccountCircle style={{ color: '#fff' }} />
            </IconButton>
            <span style={{ color: '#fff' }}>melvlin chipimo</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoMenu;
