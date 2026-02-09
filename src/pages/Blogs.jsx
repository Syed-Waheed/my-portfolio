import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const blogs = [
  // {
  //   id: "react-portfolio",
  //   title: "Building My React Portfolio",
  //   excerpt: "A deep dive into creating a clean personal portfolio using React and Tailwind.",
  //   image: "/images/reactportfolio.JPEG",
  // },
  {
    id: "ds-journey",
    title: "My Journey into Data Science",
    excerpt: "How I started with machine learning, and the resources that helped me.",
    image: "/images/Data-Science-Course.JPEG",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#000021] text-white font-poppins">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">My Blogs</h1>
          <p className="text-gray-400 text-lg">Thoughts, learnings, and experiences in Tech.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#12123e] border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-300 mb-3 group-hover:text-yellow-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-200 font-medium transition-colors"
                >
                  Read Article <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;