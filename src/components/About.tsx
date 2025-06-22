
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-tech-blue py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading text-white">
          <span className="text-tech-teal font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div className="md:col-span-2 text-tech-light-blue">
            <div className="space-y-4">
              <p>
                Hello! I'm Danny, a passionate IT professional currently pursuing my Bachelor's 
                degree in Information Technology at the University of Rwanda's College of Science and Technology.
                My journey in technology began during my high school years studying Mathematics, 
                Computer Science, and Economics at Group Scolaire Gihundwe.
              </p>
              
              <p>
                I specialize in cybersecurity consulting, where I help organizations protect 
                their digital assets through security awareness training, vulnerability assessments, 
                and implementing robust security policies. My background in ethical hacking has equipped 
                me with the skills to identify and mitigate potential security threats.
              </p>

              <p>
                Beyond security, I'm also experienced in cloud engineering, backend web development, 
                and UI/UX design. I'm committed to creating solutions that are not only secure but also 
                efficient and user-friendly.
              </p>

              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <div className="grid grid-cols-2 gap-2 mt-6">
                <ul className="space-y-2">
                  {["Node.js", "PostgreSQL", "React", "Kali Linux", "AWS"].map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-tech-teal mr-2">▹</span> {tech}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {["Python", "C++", "Prisma ORM", "Cloud Infrastructure", "UI/UX Design"].map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-tech-teal mr-2">▹</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 border-2 border-tech-teal rounded translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden rounded h-80">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Cybersecurity Code" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
