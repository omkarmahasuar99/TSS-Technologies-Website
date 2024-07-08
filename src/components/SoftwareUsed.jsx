/* eslint-disable react/display-name */
import React, { useState, useRef, useEffect } from "react";
import TSS from "./../assets/TSS.png";
import curve1 from "./../assets/curve-1.svg";
import curve2 from "./../assets/curve-2.svg";
import check from "./../assets/check.png";

import reactIcon from "../assets/react.png";
import jsIcon from "../assets/JS.png";
import nodeIcon from "../assets/nodejs.png";
import mongodbIcon from "../assets/mongodb.png";
import flutterIcon from "../assets/flutter.png";
import javaIcon from "../assets/java.png";
import mysqlIcon from "../assets/MySql.png";
import pythonIcon from "../assets/python.png";

const collabApps = [
  {
    id: "0",
    title: "JS",
    icon: jsIcon,
    width: 26,
    height: 36,
    text: "JavaScript is a versatile programming language commonly used in web development to create interactive and dynamic content. It enables developers to enhance user interfaces, control multimedia, animate images, and manage asynchronous events. As a core technology of the web, alongside HTML and CSS, JavaScript is essential for building responsive websites and applications. It runs in the browser, making it ideal for client-side scripting, but also has server-side capabilities through environments like Node.js. JavaScript’s vast ecosystem and wide-ranging frameworks make it a fundamental tool for modern web development.",
  },
  {
    id: "1",
    title: "React",
    icon: reactIcon,
    width: 34,
    height: 36,
    text: "React.js is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components, enabling efficient and flexible rendering of dynamic data. React uses a virtual DOM to optimize updates and improve performance. Its component-based architecture promotes modular and maintainable code. React supports server-side rendering, making it suitable for both web and mobile applications. With tools like React Router and Redux, it enhances state management and navigation in complex applications. React’s popularity and ecosystem make it a powerful choice for modern web development.",
  },
  {
    id: "2",
    title: "Node",
    icon: nodeIcon,
    width: 36,
    height: 28,
    text: "Node.js is a runtime environment that allows JavaScript to be executed on the server side. Built on Chrome's V8 JavaScript engine, Node.js enables developers to use JavaScript for backend development, creating scalable and high-performance applications. It uses an event-driven, non-blocking I/O model, making it efficient for handling concurrent connections. Node.js is ideal for building real-time applications like chat servers and APIs. Its package manager, npm, provides access to a vast ecosystem of libraries and tools. Node.js simplifies development by using a single programming language for both client and server sides.",
  },
  {
    id: "3",
    title: "MongoDb",
    icon: mongodbIcon,
    width: 34,
    height: 35,
    text: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance, handling large volumes of data and traffic efficiently. Unlike traditional relational databases, MongoDB does not use tables and schemas, allowing for more dynamic and unstructured data storage. It supports features like indexing, replication, and sharding, which enhance query performance and data availability. MongoDB is ideal for applications requiring real-time analytics, content management, and Internet of Things (IoT) systems. Its flexible data model allows for rapid development and iteration.",
  },
  {
    id: "4",
    title: "flutter",
    icon: flutterIcon,
    width: 34,
    height: 34,
    text: "Flutter is an open-source UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets that allow developers to create visually appealing and highly performant applications. Flutter's hot reload feature enables quick experimentation and iteration by allowing real-time code changes. Its architecture is based on reactive programming, making UI development intuitive. Flutter's versatility and ability to deliver a consistent experience across platforms make it a popular choice for cross-platform development.",
  },
  {
    id: "5",
    title: "Java",
    icon: javaIcon,
    width: 34,
    height: 34,
    text: "Java is a high-level, class-based, object-oriented programming language widely used for building robust, scalable, and portable applications. It follows the principle of write once, run anywhere,meaning compiled Java code can run on any platform with a Java Virtual Machine (JVM). Java's syntax is similar to C++, but it eliminates many low-level complexities. It is extensively used in web and enterprise applications, Android development, and large systems. Java's rich API, strong memory management, and vast community support contribute to its enduring popularity and reliability in software development.",
  },
  {
    id: "6",
    title: "MySql",
    icon: mysqlIcon,
    width: 42,
    height: 38,
    text: "MySQL is a popular open-source relational database management system (RDBMS) used to manage and store data in structured tables. It uses SQL (Structured Query Language) for database operations such as querying, updating, and managing data. MySQL is known for its reliability, ease of use, and performance. It supports various storage engines, including InnoDB and MyISAM, offering flexibility in handling different types of data. MySQL is widely used in web applications, including popular platforms like WordPress, and is integral to the LAMP stack (Linux, Apache, MySQL, PHP/Python/Perl).",
  },
  {
    id: "7",
    title: "python",
    icon: pythonIcon,
    width: 38,
    height: 32,
    text: "Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python's syntax allows developers to write concise code, making it popular for rapid application development and scripting. It boasts a rich standard library and active community support, offering solutions for diverse tasks from web development to data analysis, scientific computing, and artificial intelligence. Python's interpreted nature facilitates easy debugging and prototyping. Its cross-platform compatibility ensures programs run consistently across different operating systems.",
  },
];

const collabContent = [
  {
    id: "0",
    title: "JavaScript",
  },
  {
    id: "1",
    title: "React",
  },
  {
    id: "2",
    title: "Node Js",
  },
  {
    id: "3",
    title: "MongoDB",
  },
  {
    id: "4",
    title: "Flutter",
  },
];

const CollabContentItem = React.memo(({ item }) => (
  <li className="mb-3 py-3">
    <div className="flex items-center">
      <img src={check} width={24} height={24} alt="check" />
      <h6 className="body-2 ml-5">{item.title}</h6>
    </div>
  </li>
));

function SoftwareUsed() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const lastDivRef = useRef(null);

  const handleClick = (app) => {
    setSelectedApp(app);
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (lastDivRef.current && !lastDivRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="lg:flex py-10 px-[7%] bg-gradient-to-b from-black n-8 ">
        <div className="max-w-[25rem] z-30">
          <h3 className="h3 mb-4 md:mb-8 ">Core Software That We Use</h3>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <CollabContentItem key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-16 z-30 ">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-[conic-gradient(var(--tw-gradient-stops))] from-orange-400 via-red-500 to-yellow-500 rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={TSS} width={48} height={48} alt="TSS" />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute z-1 top-[10%] sm:top-0 left-1/2 h-[40%] sm:h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    onClick={() => handleClick(app)}
                    className={`relative group -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    } transform transition-transform hover:scale-125 cursor-pointer z-2`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
              <img src={curve1} width={522} height={182} alt="Curve 1" />
            </div>

            <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
              <img src={curve2} width={162} height={76} alt="Curve 2" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={lastDivRef}
        className={`transition-all duration-500 px-4 lg:px-28 ${
          isVisible ? "h-[700px] lg:h-[300px] opacity-100" : "h-0 opacity-0"
        } overflow-hidden flex items-center justify-center`}
      >
        <div className="w-full lg:w-full lg:border-[1px] border-n-6 rounded-2xl h-[640px] lg:h-[280px] lg:flex lg:items-center lg:justify-between px-8 shadow-md shadow-neutral-800">
          <div className="w-[250px] lg:h-[250px]  mr-2 flex items-center justify-between">
            {selectedApp && (
              <img
                src={selectedApp.icon}
                alt={selectedApp.title}
                className={`lg:w-[240px] lg:h-[210px] w-36 h-28 transition-transform duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              />
            )}
          </div>
          <div className="w-full lg:w-[800px] lg:h-[250px] h-[400px]  lg:flex lg:items-center lg:justify-between">
            {selectedApp && (
              <p className="text-[#ADABAB] text-justify">{selectedApp.text}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareUsed;
