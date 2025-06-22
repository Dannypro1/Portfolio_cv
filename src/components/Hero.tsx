
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="min-h-screen bg-tech-blue pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div style={{ animationDelay: '100ms' }} className="opacity-0 animate-fade-in">
              <p className="text-tech-teal font-mono mb-5">Hi, my name is</p>
            </div>
            
            <div style={{ animationDelay: '200ms' }} className="opacity-0 animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Hategekimana Danny.
              </h1>
            </div>
            
            <div style={{ animationDelay: '300ms' }} className="opacity-0 animate-fade-in">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-tech-light-blue mb-8">
                I secure digital landscapes.
              </h2>
            </div>
            
            <div style={{ animationDelay: '400ms' }} className="opacity-0 animate-fade-in">
              <p className="text-lg text-tech-light-blue max-w-xl mb-12">
                I'm an Information Technology professional specializing in 
                <span className="text-tech-teal"> cybersecurity</span>,
                <span className="text-tech-teal"> cloud engineering</span>, and
                <span className="text-tech-teal"> web development</span>. 
                Currently, I'm focused on building secure, reliable digital solutions 
                while pursuing my IT degree.
              </p>
            </div>
            
            <div style={{ animationDelay: '500ms' }} className="opacity-0 animate-fade-in">
              <a 
                href="#projects" 
                className="inline-block px-8 py-4 border-2 border-tech-teal rounded font-mono text-tech-teal hover:bg-tech-teal/10 transition-colors"
              >
                Check out my work
              </a>
            </div>
          </div>

          <div style={{ animationDelay: '600ms' }} className="opacity-0 animate-fade-in hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-tech-teal rounded translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded h-96 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Hategekimana Danny" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
