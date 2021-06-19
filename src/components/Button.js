import PropTypes from 'prop-types'
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
//   import "react-awesome-button/dist/styles.css";
  import './button.css';


function Button(onClick) {

    return (
        // <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
        <AwesomeButton type="primary">Primary</AwesomeButton>
    )
}

// Button.defaultProps = {
//     color: 'steelblue'
// }

// Button.protoTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
//     onClick: PropTypes.func,
// }

export default Button
