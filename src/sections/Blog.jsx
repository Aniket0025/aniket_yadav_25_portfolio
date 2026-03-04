import React from 'react';
import BlogCard from '../components/BlogCard';

const blogs = [
  {
    title: "Understanding React Server Components",
    description: "A deep dive into how React Server Components work and why they are revolutionizing frontend development.",
    tech: ["React", "Next.js", "Performance"],
    link: "https://medium.com/",
  },
  {
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks to write cleaner, more maintainable Tailwind CSS code for your modern web applications.",
    tech: ["CSS", "Tailwind", "Design"],
    link: "https://medium.com/",
  },
  {
    title: "The Future of AI in Web Development",
    description: "Exploring how AI tools and machine learning models are shaping the future of coding and web design.",
    tech: ["AI", "Web Dev", "Future"],
    link: "https://medium.com/",
  }
];

export default function Blog() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] ",
  ];

  return (
    <section id="blog" className="relative min-h-[90vh] flex flex-col items-center justify-center py-24 overflow-hidden bg-black text-white">
      {/* Background Glows matching About Section */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`} />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col items-start md:items-center">
        <div className="mb-16 md:mb-24 w-full flex flex-col text-center items-center">
          {/* Matches Skills section gradient styling */}
          <h3 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] mb-4">
            Blogs & Articles
          </h3>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, AI, and building modern applications.
          </p>
        </div>

        {/* The stacked cards container */}
        <div className="flex flex-col sm:flex-row justify-center items-center pb-20 pt-8 w-full group/container">
          {blogs.map((blog, index) => (
            <BlogCard key={index} project={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}