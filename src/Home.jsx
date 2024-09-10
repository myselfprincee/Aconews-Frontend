// import Navbar from "./Components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios";
import NewsPage from "./Components/NewsPage";
import PropTypes from 'prop-types';

const Home = ({ rerender }) => {
  const [news, setNews] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.post('https://aconews-backend.up.railway.app/api/top-news-headlines', {
      category: localStorage.getItem('category'),
      country: localStorage.getItem('country'),
      Language: localStorage.getItem('Language'),
    })
      .then((response) => {
        setNews(response.data); // Ensure this matches your API response
        setTotalArticles(response.data.totalArticles);
        setTotalPages(Math.ceil(response.data.totalArticles / 9));
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [rerender]);

  const articles = news?.articles;
  console.log(totalArticles)
  console.log(totalPages)
  console.log(articles)

  return (
    <div>
      <h1 className="font-[Morn-Bold] uppercase text-[40px] text-[#0865FE] px-3 py-2">Top Headlines of the day</h1>
      <NewsPage articles={articles} />
    </div>
  )
}

Home.propTypes = {
  rerender: PropTypes.number.isRequired,
};

export default Home