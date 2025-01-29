import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectTimeline() {
  const commits = [
    { title: "Created Static Home Page", description: "Created Static homePage Using Navbar, Hero section, Feature section, Footer section " },
    { title: "Created Static About page", description: "Created static About page using Navbar, Mission cards, team cards, milestones and achievements" },
    { title: "Created Static Project TimeLine page", description: "Created static Project Timeline page similiar to github branch visualization" },
    { title: "Created Static Registration page", description: "Created static Registration page without any backend connection till now" },
    { title: "Created Registration API", description: "Created Registration API and connected it to Mongodb Database 'BANKDB', and tested it using thunderclient" },
  ];

  const [hoveredCommit, setHoveredCommit] = useState(null);

  return (
    <div className="flex flex-col items-center text-white min-h-screen" style={{"padding":"1rem"}}>
      <h1 className="text-2xl font-bold" style={{"marginBottom":"1rem"}}>Project Timeline</h1>
      <div className="relative w-full max-w-4xl">
        {/* Pink branch line */}
        <div className="absolute left-8 top-0 h-full border-l-4 border-pink-500"></div>

        {commits.map((commit, index) => (
          <div
            key={index}
            className="relative "
            onMouseEnter={() => setHoveredCommit(index)}
            onMouseLeave={() => setHoveredCommit(null)}
            style={{"paddingLeft":"4rem","marginBottom":"5rem"}}
          >
            {/* Commit point */}
            <motion.div
              className="absolute w-4 h-4 bg-pink-500 rounded-full -left-0.5 mt-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{"left":"-0.125rem","marginTop":"0.25rem"}}
            />

            {/* Commit title */}
            <h2 className="font-semibold text-lg relative z-10 font-mono">{commit.title}</h2>

            {/* Commit description */}
            {hoveredCommit === index && (
              <motion.div
                className="absolute bg-gray-800 text-sm text-gray-300 rounded-lg shadow-lg"
                style={{ top: "100%", padding:"5px" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {commit.description}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTimeline;
