import React from 'react';
import PropTypes from 'prop-types';

import './Textarea.less';

const Textarea = props => <textarea className='chat__send-textarea' style={props.style} {...props}> </textarea>

Textarea.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Textarea;