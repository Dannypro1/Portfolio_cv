
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      skills: [
        "Security Awareness Training",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Policy Development",
        "Cyber Defense Strategies",
        "Ethical Hacking",
        "Kali Linux",
        "Network Security"
      ]
    },
    {
      title: "Cloud Engineering",
      skills: [
        "Cloud Infrastructure Setup",
        "Cloud Storage Solutions",
        "Performance Monitoring",
        "Security Enforcement",
        "AWS Basics",
        "Azure Basics",
        "GCP Basics",
        "Cloud Migration"
      ]
    },
    {
      title: "Development",
      skills: [
        "Python",
        "SQL",
        "Java",
        "C++",
        "C#",
        "HTML/CSS",
        "React",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM"
      ]
    },
    {
      title: "Other Skills",
      skills: [
        "UI/UX Design",
        "System Administration",
        "Graphic Design",
        "MS Office Suite",
        "Git & Version Control",
        "Virtualization",
        "Containerization",
        "Advanced Typing"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-tech-dark-blue py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading text-white">
          <span className="text-tech-teal font-mono mr-2">02.</span> Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-tech-navy p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-tech-teal">// </span>{category.title}
              </h3>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
