
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="bg-tech-blue py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="font-mono text-tech-teal mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        
        <p className="text-tech-light-blue mb-10 max-w-lg mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question, 
          a project idea, or just want to say hello, I'll do my best to get back to you!
        </p>

        <div className="mb-12">
          <a 
            href="mailto:himanadanny@gmail.com" 
            className="inline-block px-8 py-4 border-2 border-tech-teal rounded font-mono text-tech-teal hover:bg-tech-teal/10 transition-colors"
          >
            Say Hello
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left max-w-lg mx-auto">
          <div>
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-tech-light-blue">Gihundwe, Rusizi, Western Province, Rwanda</p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-2">Contact</h3>
            <p className="text-tech-light-blue mb-1">+250 790 951 505</p>
            <p className="text-tech-light-blue mb-1">+250 789 387 583</p>
            <p className="text-tech-light-blue">himanadanny@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
