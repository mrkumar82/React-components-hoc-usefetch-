import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: '',
};
const ACTIONS = {
  LOADING: 'loading',
  FETCHING: 'fetchdata',
  ERROR: 'error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true, data: [], error: '' };
    case ACTIONS.FETCHING:
      return { ...state, loading: false, data: action.payload, error: '' };
    case ACTIONS.ERROR:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

function useFetch(url, arg) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: ACTIONS.FETCHING, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: error });
      });
  }, [url]);

  return state;
}

export default useFetch;
