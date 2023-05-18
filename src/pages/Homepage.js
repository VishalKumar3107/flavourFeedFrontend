import "../allcss/homepage.css";
import Hero from "./Homepage/Hero/Hero";
import Category from "./Homepage/Categories/category";
import Trending from "./Homepage/TopRecipes/trending";
import Footer from "./Homepage/Footer/Footer";
import Footerbar from "./Homepage/Footerbar/Footerbar";
import { Home } from "./home";
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";

export const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 });
    }
  }, [isInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="Homecontainer">
          <Hero />
          <Home />
          <Category />
          <Trending />
          <Footer />
          <Footerbar />
        </div>
      )}
    </>
  );
};
