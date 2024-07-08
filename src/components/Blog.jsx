import React from 'react';
import { useNavigate } from 'react-router-dom';
import serversideImage from '../assets/serverside.jpg';
import AiImage from '../assets/Ai.webp';
import internetImage from '../assets/internet.png';

const BlogPost = ({ imgSrc, title, description, onClick }) => {
  return (
    <div 
      className="post-box tech bg-inherit shadow-md rounded-lg overflow-hidden mb-6 p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg" 
      onClick={onClick}
    >
      <img src={imgSrc} alt={title} className="post-img w-full h-60 object-cover" />
      <div className="p-3 text-center">
        <h3 className="post-title text-lg text-white font-semibold mb-2">{title}</h3>
        <p className="post-description text-gray-100 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  const navigate = useNavigate();

  const posts = [
    {
      imgSrc: serversideImage,
      title: "Server-Side Rendering",
      description: "Server-side rendering (SSR) is a technique that involves generating the initial HTML for a web page on the server. This approach offers several advantages.",
      url: '/server-side-rendering'
    },
    {
      imgSrc: AiImage,
      title: "Artificial Intelligence (AI)",
      description: "AI stands at the forefront of technological advancement, with applications ranging from autonomous vehicles and natural language processing to healthcare and finance.",
      url: '/artificial-intelligence'
    },
    {
      imgSrc: internetImage,
      title: "Internet of Things (IoT)",
      description: "The Internet of Things (IoT) refers to the network of interconnected devices embedded with sensors, software, and other technologies, enabling them to collect and exchange data.",
      url: '/internet-of-things'
    },
  ];

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-5">Articles</h1>
      <div className="flex flex-wrap justify-between">
        {posts.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-6">
            <BlogPost
              imgSrc={post.imgSrc}
              title={post.title}
              description={post.description}
              onClick={() => navigate(post.url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
