import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function News(props) {
  const [state, setState] = useState({ articles: [] });

  const [first, setfirst] = useState({ page: 1 });

  const [results, setresults] = useState({ totalResults: 0 });

  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=00916754a7f64b87bfdd59bad72df84a&page=${first.page}&pageSize=${props.pageSize}`;
      setloading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setloading(false);
      setState({ articles: parsedData.articles });
      setresults({ totalResults: parsedData.totalResults });
    };
    fetchData();
  }, []);

  const handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=00916754a7f64b87bfdd59bad72df84a&page=${
      first.page - 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setState({
      articles: parsedData.articles,
    });
    setfirst({
      page: first.page - 1,
    });
  };

  const handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=00916754a7f64b87bfdd59bad72df84a&page=${
      first.page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setState({
      articles: parsedData.articles,
    });
    setfirst({
      page: first.page + 1,
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">NewsHub - Top Headline</h1>
        {loading && <Spinner />}
        <div className="row">
          {state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                source={element.source.name}
                  title={element.title}
                  description={element.description}
                  image={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between my-2">
        <button
          disabled={first.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrev}
        >
          &larr; Previous
        </button>

        <button
          type="button"
          className="btn btn-dark"
          disabled={first.page + 1 > Math.ceil(results.totalResults / `${props.pageSize}`)}
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
