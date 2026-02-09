import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const DataSciencePost = () => {
  return (
    <div className="min-h-screen bg-[#000021] text-white font-poppins">
      <Header />

      <div className="w-full px-6 md:px-20 py-10">
        {/* Restored max-w-6xl for the wider look you prefer */}
        <div className="max-w-6xl mx-auto">
          
          {/* Back Link */}
          <Link 
            to="/blogs" 
            className="inline-block mb-6 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            ← Back to Blogs
          </Link>

          {/* Banner Image */}
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-xl border border-[#2e2e5c]">
            <img 
              src="/images/Data-Science-Course.JPEG" 
              alt="Data Science Journey" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10 leading-tight">
            From Confusion to Clarity: My Journey into Data Science & Machine Learning
          </h1>

          {/* Content - Wide Layout */}
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            
            <p>
              A few years ago, I didn’t really know what direction I wanted my career
              to take. I was curious about a lot of things, interested in learning,
              but unsure where I actually fit. There was a constant feeling of
              second-guessing myself and wondering whether I was moving in the right
              direction.
            </p>

            <p>
              During that phase, I came across data science and machine learning.
              There was nothing dramatic about it at first. I was simply curious
              about how data could be used to explain patterns, make decisions, and
              predict outcomes. Over time, that curiosity turned into something more
              focused and meaningful.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-100 mt-12 pt-4 border-t border-gray-800">
              Starting Without Confidence
            </h2>

            <p>
              I didn’t start with strong coding skills or technical confidence.
              Writing code felt intimidating, especially when staring at a blank
              screen. I often worried that others were learning faster or understood
              things more easily than I did.
            </p>

            <p>
              What kept me going was curiosity. I wanted to understand how
              recommendation systems work, how stock prices are modeled, and how
              raw data turns into insights. That curiosity pushed me to start
              learning the basics of machine learning.
            </p>

            <p>
              I began with Andrew Ng’s Machine Learning Specialization. At first,
              topics like gradient descent, bias-variance tradeoff, and neural
              networks felt overwhelming. It honestly felt like learning a new way
              of thinking.
            </p>

            <p>
              Instead of rushing through the material, I slowed down. I started
              writing notes by hand and explaining concepts in my own words. That
              habit helped me focus on understanding instead of memorizing.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-100 mt-12">
              Understanding Instead of Memorizing
            </h2>

            <p>
              Slowly, things began to make sense. Machine learning stopped feeling
              like a collection of formulas and started feeling more logical. I
              understood why overfitting happens, why validation data matters, and
              why accuracy alone can be misleading.
            </p>

            <p>
              One important moment for me was revisiting my own stock price
              prediction project built using LSTM models. The results initially
              looked very good, but as my understanding improved, I realized I had
              made mistakes in how the data was split.
            </p>

            <p>
              Instead of moving on, I rebuilt the project properly — using correct
              train, validation, and test splits, and evaluating the model using
              RMSE and R². Fixing those mistakes taught me more than building a new
              project ever could.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-100 mt-12">
              Getting Comfortable with Code
            </h2>

            <p>
              Even as my concepts improved, coding still felt uncomfortable. I knew
              what I wanted to do, but writing it from scratch wasn’t easy.
            </p>

            <p>
              I decided to write code every day, even if it wasn’t perfect. I spent
              time strengthening Python fundamentals like loops, functions, data
              structures, and file handling. Over time, repetition reduced the fear.
            </p>

            <p>
              When I moved into Pandas and NumPy, I began to understand how real data
              is handled in practice. Seeing messy datasets and learning how to work
              with them changed how I viewed data science.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-100 mt-12">
              Learning What Data Science Really Is
            </h2>

            <p>
              At one point, I believed data science was mostly about building complex
              models. Over time, I realized that most of the real work happens
              earlier — cleaning data, exploring it, writing SQL queries, and
              explaining insights clearly.
            </p>

            <p>
              This changed how I learned. I began focusing more on EDA, data
              cleaning, and understanding the business context behind problems,
              rather than chasing complex algorithms.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-100 mt-12">
              Where I Am Today
            </h2>

            <p>
              Today, I’m still learning, but with much more clarity. I’m comfortable
              with core machine learning concepts, Python for data analysis, SQL,
              and building structured ML pipelines. My current focus is improving
              EDA, data cleaning, and project storytelling.
            </p>

            {/* Quote Box */}
            <div className="bg-[#12123e] p-8 rounded-lg mt-10 border-l-4 border-yellow-400">
              <p className="text-white italic text-xl">
                "This journey taught me patience, discipline, and the value of steady
                progress. More than anything, it gave me direction during a time when
                I felt unsure. I’m not done learning — but I’m finally confident about
                the path I’m on."
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSciencePost;