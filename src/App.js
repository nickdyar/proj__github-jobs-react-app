/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import JobsPagination from './JobsPagination';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Github Jobs</h1>
      <JobsPagination page={page} setPage={setPage} />
      {loading && <h1>Fetching jobs...</h1>}
      {error && <h1>Oops! Try refreshing browser.</h1>}
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
      <JobsPagination page={page} setPage={setPage} hasNextPage />
    </Container>
  );
}

export default App;
