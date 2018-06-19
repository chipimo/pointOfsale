import React = require('react');
import Button from 'material-ui/Button';
import { Typography, Divider } from 'material-ui';
import { Paper } from 'react-md';

class CustomerViewPot extends React.Component {
  render() {
    return (
      <div>
        <div style={{ paddingTop: 10, paddingLeft: 10 }}>
          <div style={{}}>
            <div style={{ width: 100, height: 100, background: '#ccc' }}>
              prof
            </div>
            <div
              style={{ position: 'absolute', marginTop: -100, marginLeft: 110 }}
            >
              <Typography style={{ marginBottom: 5 }} variant="title">
                Cutomer Name
              </Typography>
              <Divider />
              <Typography variant="subheading">
                Cutomer contact number
              </Typography>
              <Typography variant="subheading">Cutomer email</Typography>
              <Typography variant="subheading">Cutomer location</Typography>
            </div>
            <div style={{ marginTop: 10 }}>
              <Button variant="raised" color="primary">
                Add new cutomer
              </Button>
            </div>
          </div>
          <div
            style={{ position: 'absolute', marginTop: -140, marginLeft: 400 }}
          >
            <Paper style={{ width: 520, height: 150, padding: 10 }}>
              <Typography style={{ marginBottom: 5 }} variant="title">
                Total (k)
              </Typography>
              <Typography style={{ marginBottom: 5 }} variant="title">
                Paid (k)
              </Typography>
              <Typography style={{ marginBottom: 5 }} variant="title">
                Change (k)
              </Typography>

              <div style={{ marginTop: 20 }}>
                <Button variant="raised" color="secondary">
                  Make Payment
                </Button>
                <Button variant="raised" color="secondary" style={{marginLeft:10}}>
                  Make payment and save
                </Button>
                <Button variant="raised" style={{marginLeft:10}}>
                  Creadit
                </Button>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerViewPot;
