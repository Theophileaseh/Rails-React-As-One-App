import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMessages } from '../redux/messages';
import Greeting from './Greeting';

const Greetings = () => {
  const messages = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(getMessages());
    }
  }, [dispatch, messages.length]);

  return (
    <div className="all-messages">
      { messages && messages.map((message) => (
        <Greeting message={message} key={message.id} />
      )) }
      <div className="links-section">
        <Link to="/">Go back</Link>
&nbsp;&nbsp;
        <Link to="new">Add message</Link>
      </div>
    </div>
  );
};

export default Greetings;
