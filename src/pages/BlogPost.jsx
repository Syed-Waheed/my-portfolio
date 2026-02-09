import React from "react";
import { useParams } from "react-router-dom";
import DataScienceJourney from "./DataScienceJourney";

const BlogPost = () => {
  const { id } = useParams();

  if (id === "ds-journey") {
    return <DataScienceJourney />;
  }

  return (
    <div className="min-h-screen bg-[#000021] text-white flex items-center justify-center text-xl">
      No blog found.
    </div>
  );
};

export default BlogPost;
