import { useReducer, useEffect } from 'react';
import axios from 'axios';

// let's define all our actions to ACTION variable set to an object that defines our actions for reference them later
// these are the actions we can perform on our STATE
const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

// reducer function gets called each time `dispatch` is called
// `dispatch`: whatever we pass to it is populated inside `action` variable
// `state` is current state of application
function reducer(state, action) {
  switch (action.type) {
    // MAKE_REQUEST
    case ACTIONS.MAKE_REQUEST:
      // show loading + clear any jobs from prev search
      return { loading: true, jobs: [] };

    // GET_DATA
    case ACTIONS.GET_DATA:
      // grab current state and put into new state, turn off loading, and pass
      // in jobs via payload
      return { ...state, loading: false, jobs: action.payload.jobs };

    // ERROR
    case ACTIONS.ERROR:
      // grab current state and spread across new state, turn off loading, pass
      // in error object via payload, and clear jobs
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };

    // if we pass in action type not defined in our list, we'll return default without updating anything
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  // jobs & loading are default values
  // any time change to params or page require reload -- accomplished via useEffect
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken.token,
        params: { markdown: true, page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);

  // EX: Given the following for dispatch:
  // dispatch({ type: 'hello', payload: {x: 3 }})
  // then reducer function (above) would contain `action.payload.x`
  // where action = hello and and payload.x = 3
  // hello is the ACTION TYPE and payload is the DATA for that ACTION TYPE
  // return {
  //   jobs: [],
  //   loading: false,
  //   error: false,
  // };

  return state;
}
