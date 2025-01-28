import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  const handleCategory = (val) => {
    setCategory(category);
    setCategory((prev) => (prev === val ? "All" : val));
  };
  useEffect(() => {
    const handleCategory = (val) => {
      setCategory(category);
      setCategory((prev) => (prev === val ? "All" : val));
    };
  }, [category]);
  return (
    <div>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
        handleCategory={handleCategory}
      />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
