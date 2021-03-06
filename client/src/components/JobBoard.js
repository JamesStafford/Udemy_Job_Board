import { useEffect, useState } from "react";
import { getJobs } from "../graphql/queries";
import JobList from "./JobList";

function JobBoard() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getJobs()
      .then(setJobs)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  } else {
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
  }
}

export default JobBoard;
