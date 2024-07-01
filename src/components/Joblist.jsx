import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: 1, title: 'Software Engineer', location: 'Bangalore, India', type: 'Full-time' },
  { id: 2, title: 'Product Manager', location: 'Bangalore, India', type: 'Full-time' },
  { id: 3, title: 'Web Developer', location: 'Bangalore, India', type: 'Intern' },
  { id: 4, title: 'Data Scientist', location: 'Bangalore, India', type: 'Full-time' },
  { id: 5, title: 'UX Designer', location: 'Bangalore, India', type: 'Contract' },
  { id: 6, title: 'DevOps Engineer', location: 'Bangalore, India', type: 'Full-time' }
  // Add more job listings here
];

const JobList = () => {
  const [visibleJobs, setVisibleJobs] = useState(3);

  const handleViewMore = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 3);
  };

  return (
    <div className="job-list mt-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.slice(0, visibleJobs).map(job => (
          <div key={job.id} className="job-item border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="mt-2 text-gray-800">Location: {job.location}</p>
            <p className="text-gray-800">Type: {job.type}</p>
            <Link to={`/job/${job.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
      {visibleJobs < jobs.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-600 transition-colors duration-200"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
