import React from 'react';
import useFectchJobs from './useFetchJobs';
import { Container } from 'react'

function App() {

  const { jobs, loading, error } = useFetchJobs()

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error -- Refresh page.</h1>}
      <h1>{jobs.length}</h1>
    </Container>

  )
}

export default App;