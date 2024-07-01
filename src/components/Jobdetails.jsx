import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApplyForm from './ApplyForm';

const jobDetails = {
  1: {
    title: 'Software Engineer',
    description: 'We are looking for a skilled software engineer to join our team.',
    responsibilities: [
      'Develop high-quality software design and architecture.',
      'Identify, prioritize and execute tasks in the software development life cycle.',
      'Develop tools and applications by producing clean, efficient code.',
    ],
    requirements: [
      'Proven experience as a Software Engineer.',
      'Experience in software development, scripting, and project management.',
      'Knowledge of coding languages and frameworks/systems.',
    ],
  },
  2: {
    title: 'Product Manager',
    description: 'We are looking for a dedicated product manager to join our team.',
    responsibilities: [
      'Define product strategy and roadmap.',
      'Work with cross-functional teams to deliver products.',
      'Manage product lifecycle from planning to execution.',
    ],
    requirements: [
      'Proven experience as a Product Manager.',
      'Strong understanding of product lifecycle management.',
      'Familiarity with Agile framework.',
    ],
  },
  // Add more job details here
};

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobDetails[jobId];

  if (!job) {
    return <p className="text-center mt-12">Job not found.</p>;
  }

  return (
    <div className="job-details container mx-auto px-4 py-12 bg-white rounded-lg shadow-lg max-w-3xl relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="text-center mb-8">
        <h1 className="text-2xl text-black font-bold mb-4">{job.title}</h1>
        <p className="text-lg text-gray-700">{job.description}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-1xl font-bold text-green-600 mb-4">Responsibilities</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {job.responsibilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-1xl font-bold text-green-600 mb-4">Requirements</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {job.requirements.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        <ApplyForm />
      </div>
    </div>
  );
};

export default JobDetails;
