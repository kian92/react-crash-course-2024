import React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobsListing from "../components/JobsListing";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCard />
      <JobsListing isHome />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
