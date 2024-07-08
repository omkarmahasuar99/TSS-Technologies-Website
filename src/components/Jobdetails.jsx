import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApplyForm from './ApplyForm';
 
const jobDetails = {
  1: {
    title: 'Software Engineer',
    description: 'We are looking for a skilled software engineer to join our team.',
    responsibilities: [
      'Write clean, scalable, and efficient code.',
      'Collaborate with team members to design and implement new features.',
      'Stay updated with emerging trends and technologies in software development.',
      'Follow best practices for software development and ensure code quality through unit testing and documentation.'
    ],
    requirements: [
      'Bachelor degree in Computer Science, Engineering, or a related field.',
      'Basic understanding of software development methodologies ',
      'Strong understanding of programming languages such as Java, MERN or JavaScript.'
    ],
  },
  2: {
    title: 'DevOps Engineer',  
    description: 'We are looking for a dedicated DevOps Engineer to join our team.',
    responsibilities: [
      'Assist in the deployment, automation, management, and maintenance of cloud-based systems.',
      'Help maintain and improve the CI/CD pipeline.',
      'Collaborate with the development team to ensure continuous integration and delivery.'
    ],
    requirements: [
      'Bachelor’s degree in Computer Science, Engineering, or a related field.',
      'Basic knowledge of cloud platforms like AWS, Azure, or Google Cloud.',
      'Familiarity with CI/CD tools such as Jenkins, GitLab CI, or Travis CI.'
    ],
  },
  3: {
    title: 'Data Sciencetist',
    description: 'We are looking for a skilled Data Sciencetist to join our team.',
    responsibilities: [
      'Collect, clean, and preprocess data for analysis.',
      'Use statistical methods and machine learning algorithms to analyze data and build predictive models.',
      'Stay updated with the latest data science techniques and tools.'
    ],
    requirements: [
      'Bachelor’s degree in Computer Science, Statistics, Mathematics, or a related field.',
      'Basic knowledge of statistical analysis and machine learning techniques.',
      'Proficiency in programming languages such as Python or R.',
      'Familiarity with data visualization tools like Matplotlib, Seaborn, or Tableau.'
    ],
  },
  4: {
    title: 'App Development',
    description: 'We are looking for a skilled App Development to join our team.',
    responsibilities: [
      'Develop, test, and deploy mobile applications for iOS and/or Android platforms.',
      'Work with the design team to implement UI/UX designs.',
      'Collaborate with cross-functional teams to define, design, and ship new features.',
      'Troubleshoot and debug applications to ensure optimal performance.'
    ],
    requirements: [
      'Bachelor’s degree in Computer Science, Engineering, or a related field.',
      'Familiarity with mobile app development languages such as Swift for iOS, Kotlin for Android, or frameworks like React Native and Flutter.',
      'Knowledge of RESTful APIs and integration with backend services.'
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
        <ApplyForm job={job} />
      </div>
    </div>
  );
};
 
export default JobDetails;