import React from 'react';

const BlogCard = ({ project, index }) => {
  return (
    <div
      className={`
        relative group peer
        flex flex-col justify-between
        w-[90vw] max-w-[340px] sm:w-[340px] h-[420px]
        bg-[#111111]/80 backdrop-blur-xl border border-white/10
        rounded-[24px] p-8 overflow-hidden
        transition-all duration-500 ease-out cursor-pointer
        hover:-translate-y-6 hover:z-30
        hover:shadow-[0_0_40px_rgba(0,191,143,0.3)]
        hover:border-[#00bf8f]/40
        sm:peer-hover:translate-x-16
        peer-hover:translate-y-6 sm:peer-hover:translate-y-0
        ${index > 0 ? 'mt-[-5rem] sm:mt-0 sm:-ml-24' : ''} 
      `}
      style={{
        zIndex: 100 - index,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.zIndex = 200; }}
      onMouseLeave={(e) => { e.currentTarget.style.zIndex = 100 - index; }}
    >
      {/* Background Glow inside card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#1cd8d2]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00bf8f]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#1cd8d2] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech?.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold tracking-wide text-[#1cd8d2] bg-[#1cd8d2]/10 rounded-full border border-[#1cd8d2]/20 shadow-inner inline-block"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Read Article
            </a>
          )}
        </div>
      </div>

      {/* Animated Gradient Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </div>
  );
};

export default BlogCard;
