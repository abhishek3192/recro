import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Cards";
import "./cards.css";

function CardsList() {
  const [getData, setGetData] = useState([].slice(0, 10));
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  const fetchCardData = async () => {
    const response = await axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${count}&_limit=${limit}`
      )
      .catch((err) => console.log(err));
    setGetData([...getData, ...response.data]);
    setCount(count + 10);
    setLimit(limit + 10);
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={getData.length}
        hasMore={hasMore}
        next={fetchCardData}
        loader={<h4>Loading...</h4>}
        style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto auto auto",
        }}
      >
        {getData.map((data, index) => {
          return <Cards data={data} key={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default CardsList;
