import axios from '../base/axios';

const GET_MESSAGES = 'railsreactapp/redux/GET_MESSAGES';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;

    default:
      return state;
  }
};

export const getMessages = () => (dispatch) => {
  axios.get('messages').then((res) => {
    dispatch({
      type: GET_MESSAGES,
      payload: res.data,
    });
  });
};


export default messageReducer;
