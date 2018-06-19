import React = require('react');

class NumPad extends React.Component {
  render() {
    return (
      <div>
        <ul id="keyboard">
          <li className="letter">1</li>
          <li className="letter">2</li>
          <li className="letter">3</li>
          <li className="letter clearl">4</li>
          <li className="letter">5</li>
          <li className="letter">6</li>

          <li className="letter clearl">7</li>
          <li className="letter ">8</li>
          <li className="letter">9</li>
          <li className="letter">0</li>
          <li className="switch">abc</li>
          <li className="return">retur</li>
          <li className="delete lastitem">x</li>
        </ul>
      </div>
    );
  }
}

export default NumPad;
