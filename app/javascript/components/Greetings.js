import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Greeting from './Greeting'

const Greetings = () => {

  const messages = useSelector(() => messages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(messages());
    }
  }, []);

  return (
    <div class="all-messages">
      { messages && messages.map((message) => (
          <Greeting message={message} key={message.id} />
        )) }
    </div>
  )
}

export default Greetings
