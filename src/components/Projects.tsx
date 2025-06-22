
import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Car Everywhere (CARE)",
      description: "A web-based car rental system designed for individuals and businesses to offer or request short-term car rentals.",
      tech: ["Node.js", "PostgreSQL", "Prisma ORM", "React", "JWT"],
      features: [
        "Driver's license verification",
        "Mobile money & bank payment",
        "Refund policy integration",
        "Business dashboard",
        "Chat support",
        "Vehicle filters"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Fleet Management System (FMS)",
      description: "Digitized vehicle operations for institutions with features like vehicle tracking, maintenance records, driver management, and scheduling.",
      tech: ["React", "Node.js", "PostgreSQL", "Tracking API"],
      features: [
        "Vehicle tracking",
        "Maintenance records",
        "Driver management",
        "Cost-efficiency analysis",
        "Vehicle lifecycle tracking"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "College Events Management System",
      description: "Centralized platform to manage college/university events and schedules.",
      tech: ["React", "Node.js", "PostgreSQL", "Role-based Access"],
      features: [
        "Admin dashboard",
        "Event creation & approval",
        "Role-based access",
        "Event scheduling",
        "Institution-wide visibility"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Portfolio Website with Admin Dashboard",
      description: "Personal portfolio project showcasing roles like graphic designer, social media manager, and cybersecurity consultant.",
      tech: ["React", "Node.js", "PostgreSQL", "Internationalization"],
      features: [
        "Internationalization",
        "Project management",
        "CV download",
        "Admin panel",
        "Media uploads",
        "Skills management"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];

  return (
    <section id="projects" className="bg-tech-blue py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading text-white">
          <span className="text-tech-teal font-mono mr-2">03.</span> Projects
        </h2>

        <div className="space-y-20 mt-12">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="grid md:grid-cols-12 gap-6 md:gap-10 relative"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image - Alternate left/right */}
              <div className={`md:col-span-7 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-tech-teal/20 rounded overflow-hidden transition-opacity duration-300 group-hover:opacity-0"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className={`md:col-span-5 ${idx % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-1'}`}>
                <p className="font-mono text-tech-teal mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="project-card mb-5">
                  <p className="text-tech-light-blue">{project.description}</p>
                </div>

                <div className="mb-4 flex flex-wrap justify-start items-center">
                  <span className="text-white font-mono mb-2 mr-2">Key Features:</span>
                  <div className="flex flex-wrap">
                    {project.features.slice(0, 3).map((feature, featureIdx) => (
                      <span key={featureIdx} className="tech-tag">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="tech-tag">+{project.features.length - 3} more</span>
                    )}
                  </div>
                </div>
                
                <div className="mb-6 flex flex-wrap">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="text-tech-light-blue mr-4 mb-2 text-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.links.demo} 
                    className="text-white hover:text-tech-teal transition-colors"
                    aria-label="Live Demo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <a 
                    href={project.links.code} 
                    className="text-white hover:text-tech-teal transition-colors"
                    aria-label="View Code"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
