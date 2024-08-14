import React from 'react';

function App() {
  // Access the environment variables
  const name = process.env.REACT_APP_NAME;
  const jobTitle = process.env.REACT_APP_JOB_TITLE;
  const branch = process.env.REACT_APP_BRANCH;

  return (
    <div>
      <h1>Display Environment Variables</h1>
      <p>Name: {name}</p>
      <p>Job Title: {jobTitle}</p>
      <p> Branch: {branch}</p>
    </div>
  );
}

export default App;
