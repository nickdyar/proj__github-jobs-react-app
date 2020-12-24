import { useReducer, useEffect } from 'react';
import axios from 'axios';

// let's define all our actions to ACTION variable set to an object that defines our actions for reference them later
// these are the actions we can perform on our STATE
const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page',
};

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

// reducer function gets called each time `dispatch` is called
// `dispatch`: whatever we pass to it is populated inside `action` variable
// `state` is current state of application
function reducer(state, action) {
  switch (action.type) {
    // 1: MAKE_REQUEST
    case ACTIONS.MAKE_REQUEST:
      // show loading + clear any jobs from prev search
      return { loading: true, jobs: [] }; // clears jobs on each new request
    // 2: GET_DATA
    case ACTIONS.GET_DATA:
      // grab current state and put into new state, turn off loading, and pass
      // in jobs via payload
      return { ...state, loading: false, jobs: action.payload.jobs };
    // 3: ERROR
    case ACTIONS.ERROR:
      // grab current state and spread across new state, turn off loading, pass
      // in error object via payload, and clear jobs
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    // 4: UPDATE_HAS_NEXT_PAGE
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
    // if we pass in action type not defined in our list, we'll return default without updating anything
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  // jobs & loading are default values
  // any time change to params or page require reload -- accomplished via useEffect
  // make hook do something => useReducer will make it do somethin'
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    // AXIOS INITIAL
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { markdown: true, page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    // AXIOS CHECK NEXT PAGE
    const cancelToken2 = axios.CancelToken.source();
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken2.token,
        params: { markdown: true, page: page + 1, ...params },
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
          payload: { hasNextPage: res.data.length !== 0 },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);

  return state;
}
