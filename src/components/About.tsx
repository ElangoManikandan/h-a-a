import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    'Digital Marketing',
    'Lead Generation',
    'No-Code Website Development',
    'Instagram Page Growth',
    'Google Business Profile Optimization',
    'Local Business Promotion',
  ];

  return (
    <section id="about" className="py-20 relative z-10 border-t border-[#222222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section Kicker */}
          <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] block mb-2">
            Background & Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            A Little About Me
          </h2>

          <p className="text-base sm:text-lg text-[#B3B3B3] leading-relaxed mb-8">
            I&apos;m Arun, an aspiring digital marketer and no-code website developer focused on
            helping businesses build a stronger digital presence. I work on digital marketing,
            lead generation, social media growth, and website creation to help businesses
            connect with their target audience online.
          </p>

          {/* Experience Card */}
          <div className="bg-[#1A1A1A] border border-[#303030] rounded-xl p-5 mb-10 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#242424] text-[#39FF14] border border-[#303030] shrink-0 mt-0.5">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B3B3B3] block mb-1">
                Practical Experience
              </span>
              <h3 className="text-lg font-semibold text-white">Intern at Codetech Technology</h3>
              <p className="text-sm text-[#B3B3B3] mt-1">
                Hands-on practical exposure to digital marketing execution, web assets, and technology workflows.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Core Skills & Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#161616] border border-[#2B2B2B] text-sm text-[#E0E0E0] hover:border-[#39FF14]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
