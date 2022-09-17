import React from 'react';
import { PropTypes } from 'prop-types';

const Greeting = (props) => {
  const message = props;
  const {
    id, greeting
  } = message.message;
  return (
    <div class="single-message" key={id}>
      <p class="message-info">{greeting}</p>      
    </div>
  )
}

Greeting.protoTypes = {
  message: PropTypes.object.isRequired,
};

export default Greeting
