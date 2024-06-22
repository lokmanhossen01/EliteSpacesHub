
import { Helmet } from "react-helmet-async";
import NewsLetter from "../NewsLetter/NewsLetter";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import ClientReviews from "./ClientsReviews/ClientReviews";

import { Toaster } from "react-hot-toast";



const Home = () => {

  
  return (
    <div>

   
      <Toaster position="top-center" reverseOrder={false} />

      <Helmet>
        <title>Home Hive | Home </title>
      </Helmet>

      <Banner></Banner>
      <Cards></Cards>
      <ClientReviews></ClientReviews>
      <NewsLetter></NewsLetter>


    </div>
  );
};

export default Home;