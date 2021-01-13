/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Container from './components/Container';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import Spinner from './components/Spinner';
import GlobalStyle from './styles/GlobalStyle';
import Typography from './styles/Typography';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  // takes in an event provided by input
  // every time an event changes, this function is called
  // we'll pass this function down to our SearchForm
  function handleParamChange(e) {
    const param = e.target.name;
    const { value } = e.target;
    // set to page 1 on each new search (i.e., input field(s) are updated)
    setPage(1);
    // (below) => create new object with current params, and...
    setParams((prevParams) => {
      // ...return current params along with new param (value) rep desc input
      // we'll create key inside params called 'desc' which links to form input
      // [param] reps new param value; value reps text entered in input description field
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <>
      <GlobalStyle />
      <Typography />
      <Container>
        <h1 className='mb-4'>Github Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
        {loading && <Spinner />}
        {error && <h1>Error -- refresh browser.</h1>}
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </Container>
    </>
  );
}
export default App;
