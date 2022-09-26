import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loadng, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(4);   //added state

  const updateNews = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23ffa2f720f44f0cb8edbc2b9701b38c&page=${page}`;
    setLoading(true);
    let data = await fetch(api);
    data = await data.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    setPage(page + 1);
  };
  useEffect(() => {
    ////  for fetching api and set the state we use componentDidMount
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=23ffa2f720f44f0cb8edbc2b9701b38c&page=${page}`;
    let data = await fetch(api); ///// await lagana jaruri h jason ko call karne k liye
    data = await data.json(); ///// await lagana jaruri h jason ko call karne k liye
    setArticles(articles.concat(data.articles));
    //// seting value in articles
    setTotalResults(data.totalResults);
    setPage(page + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ margin: "25px 0px" }}>
        {" "}
        Top headlines
      </h1>
      {/*for amkin loding when page load without infinity scroll*/}
      <InfiniteScroll
        dataLength={articles.length} ///for handling 0 value of article
        next={fetchMoreData}
        hasMore={articles.length < totalResults} ////for handling 0 value of article and totalresults
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={Math.random()}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                    }
                    learnMore={element.url}
                    category={props.category}
                    author={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  //// default props which dont need any call
  country: "in",
  category: "general",
};
export default News;
