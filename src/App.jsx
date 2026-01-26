import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Menu from "./components/Menu";
import Location from "./components/Location";
import SocialMedia from "./components/SocialMedia";

function App() {
  
  const [category, setCategory] = useState("Coffee"); 
  const [search, setSearch] = useState("");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSearch(""); 
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Carousel />
      <Category 
        category={category} 
        setCategory={handleCategoryChange} 
        search={search} 
        setSearch={setSearch} 
      />
      <Menu category={category} search={search} />
      <Location/>
      <SocialMedia/>
    </div>
  );
}

export default App;