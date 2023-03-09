import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import skill1 from "../images/html.png";
import skill2 from "../images/css.png";
import skill3 from "../images/javascript.png";
import skill4 from "../images/git.png";
import skill5 from "../images/react.png";
import skill6 from "../images/typescript.png";

import { getByTitle } from "@testing-library/react";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      name: "HTML",
      imageUrl: skill1,
    },
    {
      id: 2,
      name: "CSS",
      imageUrl: skill2,
    },
    {
      id: 3,
      name: "Javascript",
      imageUrl: skill3
    },
    {
      id: 4,
      name: "Git",
      imageUrl: skill4
    },
    {
      id: 5,
      name: "Reactjs",
      imageUrl: skill5
    },
    {
      id: 6,
      name: "Typescript",
      imageUrl: skill6
    },

  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
