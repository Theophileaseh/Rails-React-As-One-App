import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../redux/messages';
import Greeting from './Greeting';

const Greetings = () => {
  const messages = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(getMessages());
    }
  }, []);

  return (
    <div className="all-messages">
      { messages && messages.map((message) => (
        <Greeting message={message} key={message.id} />
      )) }
    </div>
  );
};

export default Greetings;
