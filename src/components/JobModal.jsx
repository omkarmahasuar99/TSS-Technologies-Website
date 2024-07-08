import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, IconButton } from '@mui/material';
import ApplyForm from './ApplyForm';
import CloseIcon from '@mui/icons-material/Close';

const jobDetails = {
  1: {
    title: 'Software Engineer',
    description: 'We are looking for a passionate Software Engineer to design, develop and install software solutions.',
    qualifications: [
      'Bachelor’s degree in Computer Science or related field',
      'B.Tech or BE in Computer Science'
    ],
    skills: [
      'Proven work experience as a Software Engineer or Software Developer',
      'Ability to develop software in Java, MERN, C++ or other programming languages',
      'Excellent knowledge of databases like SQL or MongoDB',
      'Experience developing web applications using at least one popular web framework (JSF, Wicket, Angular, GWT, Spring MVC)'
    ],
    responsibilities: [
      'Execute full software development life cycle (SDLC)',
      'Develop flowcharts, layouts and documentation to identify requirements and solutions',
      'Write well-designed, testable code',
      'Integrate software components into a fully functional software system',
      'Ensure software is updated with latest features'
    ],
  },
  2: {
    title: 'DevOps Engineer',
    description: 'We are looking for a DevOps Engineer to help us build functional systems that improve customer experience.',
    qualifications: [
      'Bachelor’s degree in Computer Science or a related field.',
      'B.Tech or BE in Computer Science',
      '2+ years experience is needed'
    ],
    skills: [
      'Good knowledge of Ruby or Python',
      'Familiarity with CI/CD tools such as Jenkins, GitLab CI, or Travis CI',
      'Team spirit',
      'Working knowledge of databases and SQL',
      'Work experience as a DevOps Engineer or similar software engineering role'
    ],
    responsibilities: [
      'Implement integrations requested by customers',
      'Deploy updates and fixes',
      'Provide Level 2 technical support',
      'Build tools to reduce occurrences of errors and improve customer experience',
      'Develop software to integrate with internal back-end systems'
    ],
  },
  3: {
    title: 'Data Scientist',
    description: 'As a Data Scientist you will identify business trends and problems through complex big data analysis. You will interpret results from multiple sources using a variety of techniques, ranging from simple data aggregation via statistical analysis to complex data mining independently.',
    qualifications: [
      'Bachelor’s degree in Computer Science, Statistics, Mathematics, or a related field.',
      'B.Tech or BE in Computer Science'
    ],
    skills: [
      'Proficiency in Python, R and SQL',
      'Expertise in mining AI/ML opportunities from open-ended business problems and driving solution design/development while closely collaborating with engineering, product and business teams',
      'Experience with analytical programming languages, tools and libraries (Python a must) as well as Shell scripting',
      'Experience in using NoSQL databases. A candidate who can handle unstructured data with ease is preferred',
      'Experience in end-to-end delivery of AI-driven Solutions (Deep learning, traditional data science projects) is a big plus'
    ],
    responsibilities: [
      'Use data analyses and statistical techniques to develop solutions to improve customer experience and to guide business decision making',
      'Identify predictors and causes of business-related problems and implement novel approaches related to forecasting and prediction',
      'Identify, develop, manage, and execute analyses to uncover areas of opportunity and present written business recommendations',
      'Collaborate with multiple teams as a leader of quantitative analysis and where you develop solutions that utilize the highest standards of analytical rigor and data integrity'
    ],
  },
  4: {
    title: 'App Developer',
    description: 'We are looking for a dedicated mobile app developer who will join our dynamic mobile app development team and participate in designing and developing high-end mobile applications.',
    qualifications: [
      'Bachelor’s degree in Computer Science or a related field.',
      'B.Tech or BE in Computer Science'
    ],
    skills: [
      'Proficiency in working with Flutter with Dart/Kotlin/Swift/React Native ',
      'Navigate through unique and complex React Native issues and if required contribute to libraries themselves',
      'Drives productivity within the organization and makes sure processes and protocols are followed',
      'A true believer in building performant, decoupled, and maintainable code in a functional way'
    ],
    responsibilities: [
      'Adherence to the current rich standard of code quality, testability, and commitment towards React Native/Kotlin/Flutter/Swift best practices, including documentation',
      'Keep a close eye on recent developments in the react-native community and help keep our apps up to date with all the new changes',
      'Craft the opportunity for reusable frameworks, toolkits that would be used across the board',
      'Ownership of product requirements and Tech OKRs',
      'Diagnose and fix bugs and performance bottlenecks to get butter smooth performance'
    ],
  },
  5: {
    title: 'Digital Marketing',
    description: 'We are looking for a Digital marketer who can take charge of a significant percentage of the company online presence. A content management system should be manageable by a digital marketer.',
    qualifications: [
      'Bachelor degree in BBA or MBA',
      'Any certification on Digital Marketing or Content Creator'
    ],
    skills: [
      'It is necessary to have at least 2 years of experience in digital marketing or advertising ',
      'Experience with multiple social media platforms, as well as best practices and website analytics',
      'Keep up with the latest digital trends and technological advancements ',
      'Interpersonal and communication skills are exceptional',
      'Analytical and creative abilities are exceptional'
    ],
    responsibilities: [
      'Analyze digital data to make essential website optimization recommendations',
      'Conduct social media audits to ensure you are following best practices',
      'To track progress, keep an eye on crucial internet marketing KPIs',
      'Create and update web listings for e-commerce sites'
    ],
  },
  6: {
    title: 'Java Full Stack',
    description: 'We are looking for Software Engineer to produce and implement Technology / Software solutions for an Enterprise Application/Platform on Clou',
    qualifications: [
      'Bachelor’s degree in Computer Science or a related field.',
      'B.Tech or BE in Computer Science'
    ],
    skills: [
      'Knowledge and understanding into Java, spring, hibernate, web services',
      'Experience with React frontend',
      'Solid understanding of WebAPI and HTTP protocols, AJAX and REST',
      'Comprehensive knowledge of Web design patterns and front-end technologies like HTML5, jQuery and MVC framework like Struts/Spring.'
    ],
    responsibilities: [
      'Participate in the complete product development cycle starting from analysis, architecture, design, coding, unit integration, and system testing of software',
      'Provide ongoing sustaining support to the product, addressing end to end feature enhancements',
      'Design, Develop and maintain the software solution based on high-level product description or requirement document',
      'Follow well-defined Design Patterns and practice SOLID principles',
      'Responsible for deliveries in the required deadlines. Deliveries can be modules, documentation, customer releases, etc.,',
      'Make software designs at the module level that are highly reusable'
    ],
  },
  // Add more job details here
};

export default function JobModal({ isOpen, onClose, selectedjob }) {
  if (!selectedjob || !jobDetails[selectedjob]) {
    return null; // Handle case where no job is selected or selected job does not exist
  }

  const job = jobDetails[selectedjob];

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {job.title}
        <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ px: 10, pt: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
          Job Description:
        </Typography>
        <ul className='list-disc list-inside space-y-2 mb-3'>
          {job.description}
          </ul>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
          Responsibilities:
        </Typography>
        <ul className='list-disc list-inside space-y-2 mb-3'>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
          Qualifications:
        </Typography>
        <ul className='list-disc list-inside space-y-2 mb-3'>
          {job.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
          Skills:
        </Typography>
        <ul className='list-disc list-inside space-y-2 mb-3'>
          {job.skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ApplyForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
