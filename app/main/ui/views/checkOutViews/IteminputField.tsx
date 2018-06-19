import React = require('react');
import Select from 'react-select';

class IteminputField extends React.Component {
  state = {
    selectedOption: '',
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div>
        <Select
        style={{width:350, marginTop:5}}
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
      </div>
    );
  }
}

export default IteminputField;
