import React, { useState, useEffect } from "react";
import Loading from "../Loading component/Loading";
import Scroll from "../Scroll-animation/Scroll";
import Errorpage from "./Errorpage";
import Dropbutton from "./Dropbutton";
import Card from "./Card";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("business");
  const apiKey = process.env.REACT_APP_NEWS_API;
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=8`
        );
        const data = await response.json();
        if (data && data.articles) {
          setArticles(data.articles);
          if (data.articles.length === 0) {
            setArticles([]);
          } else {
            const filteredArticles = data.articles.filter(
              (article) =>
                article.title && article.description && article.urlToImage
            );
            setArticles(filteredArticles);
          }
        } else {
          console.error("Error fetching articles:", "Invalid response");
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page, category]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Scroll name="News">
      <div className="container mx-auto text-center justify-center">
        <h1 className="text-4xl mx-5 mt-4 sm:text-5xl text-white font-bold mb-5 text-center">
          <span className="text-red-800">DailyFeed</span> - Top Headlines
        </h1>
        <Dropbutton
          setCategory={(newCategory) => {
            setCategory(newCategory);
            setPage(1); // Reset page number to 1 when category changes
          }}
        />
        <p className="text-center mt-5">
          Page no - <span className="text-red-600 text-bold">{page}</span>
        </p>
      </div>
      {articles.length === 0 ? (
        <>
          <Errorpage />
          <div className="flex justify-between mx-14">
            <button
              type="button"
              className="bg-red-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
              onClick={handlePrevClick}
              disabled={page === 1}
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="ml-2 container">Prev</p>
              </div>
            </button>

            <button
              type="button"
              className="bg-red-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
              onClick={handleNextClick}
              disabled={articles.length === 0}
            >
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl p-4 sm:p-8 lg:grid-cols-4">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  title={
                    article.title ? article.title.slice(0, 44) : "Not Found"
                  }
                  desc={
                    article.description
                      ? article.description.slice(0, 55)
                      : "Not Found"
                  }
                  url={article.url}
                  imageUrl={article.urlToImage}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between mb-5 mx-14">
            <button
              type="button"
              className="bg-red-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
              onClick={handlePrevClick}
              disabled={page === 1}
            >
              <div className="flex flex-row align-middle">
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="ml-2 container">Prev</p>
              </div>
            </button>

            <button
              type="button"
              className="bg-red-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
              onClick={handleNextClick}
            >
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </>
      )}
    </Scroll>
  );
};

export default News;
