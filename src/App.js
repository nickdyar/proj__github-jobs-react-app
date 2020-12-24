/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  // takes in an event provided by input
  // every time an event changes, this function is called
  function handleParamChange(e) {
    const param = e.target.name;
    const { value } = e.target;
    setPage(1);
    setParams((prevParams) => {
      // [param] reps new param value; value reps text entered in input description field
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>fetching jobs...</h1>}
      {error && <h1>Error -- try refreshing the browser.</h1>}
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}
export default App;
