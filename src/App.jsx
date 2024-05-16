import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobsListing from "./components/JobsListing";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero 
        title='Become a React Dev' 
        subtitle='Find the React job that fits your skills and needs'
      />
      <HomeCard />
      <JobsListing />
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
