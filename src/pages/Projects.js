import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.png";
import project4 from "../images/project4.jpeg";
import project5 from "../images/project5.jpeg";
import project6 from "../images/project6.jpeg";


const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Binary Tree Visualiser",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Tindog Website",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Picture Gallery",
      imageUrl: project3,
    },
    {
      id: 4,
      name: "N-Queen Visualiser",
      imageUrl: project4,
    },
    {
      id: 5,
      name: "Online Keyboard",
      imageUrl: project5,
    },
    {
      id: 6,
      name: "Check Weather",
      imageUrl: project6,
    },
   
  ];
  console.log(projectList)

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src={item.imageUrl} />
                </a>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
     
      </div>
    </motion.div>
  );
};

export default Projects;
