import React, { useState } from "react";

const NyTimes = () => {
  const apikey = `Please put your own API key here`;

  const [month, setMonth] = useState(1);
  const [articles, setArticles] = useState(null);

  const handleInput = (event) => {
    setMonth(event.target.value);
  };

  const fetchArticles = (event) => {
    if (event) {
      event.preventDefault();
    }
    fetch(`/archive/v1/2024/${month}.json?api-key=${apikey}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Error fetching data`);
        return response.json();
      })
      .then((data) => {
        setArticles(data.response.docs);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //   The above code is the same as the below code
  // const fetchArticles = async (event) => {
  //   if (event) {
  //     event.preventDefault();
  //   }
  //   try {
  //     const response = await fetch(
  //       `https://api.nytimes.com/svc/archive/v1/2024/${month}.json?api-key=${apiKey}`
  //     );
  //     if (!response.ok) throw new Error(`Error fetching data`);
  //     const data = await response.json();
  //     setNews(data.response.docs);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <div>
      <h1>NY Times Articles</h1>
      <form>
        <input type="text" name="month" id="month" onChange={handleInput} />
        <button onClick={fetchArticles}>Search</button>
      </form>

      {articles && (
        <div>
          {articles.map((articles, index) => (
            <div key={index}>
              <h2>{articles.headline.main}</h2>
              <p>{articles.abstrack}</p>
              <p>{articles.source}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NyTimes;
