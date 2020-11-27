import { useReducer } from 'react';

function reducer(state, action) {

}

export default function useFetchJobs(params, page) {

  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  dispatch({ type: 'hello', payload: { x: 3}})

  return {
    jobs: [],
    loading: false,
    error: true
  }
}