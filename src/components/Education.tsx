
import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "University of Rwanda – College of Science and Technology",
      degree: "Bachelor's Degree in Information Technology",
      period: "Current – Year 3 Student",
      details: "Focused on cybersecurity, cloud computing, and web development. Actively participating in tech events and community projects."
    },
    {
      institution: "Group Scolaire Gihundwe, Kamembe, Rwanda",
      degree: "Advanced Level Certificate",
      period: "2018 – 2021",
      details: "Focus: Mathematics, Computer Science, Economics. Developed strong analytical and problem-solving skills."
    },
    {
      institution: "E.S Gafunzo, Nyamasheke, Rwanda",
      degree: "Ordinary Level Certificate",
      period: "2015 – 2017",
      details: "Built a foundation in basic sciences and developed interest in technology and innovation."
    }
  ];

  return (
    <section id="education" className="bg-tech-dark-blue py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading text-white">
          <span className="text-tech-teal font-mono mr-2">04.</span> Education
        </h2>
        
        <div className="mt-12">
          <div className="relative border-l-2 border-tech-teal pl-8 ml-4">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-tech-teal"></div>
                
                {/* Content */}
                <div className="bg-tech-navy p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-tech-teal font-mono mt-1">{edu.degree}</p>
                  <p className="text-tech-light-blue mt-2">{edu.period}</p>
                  <p className="text-tech-light-blue mt-4">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
