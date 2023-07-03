import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
import TopRate from "../Components/Home/TopRate";
import Promos from "../Components/Home/Promos";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-1 mb-6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRate />
      </div>
    </Layout>
  );
};

export default HomeScreen;
