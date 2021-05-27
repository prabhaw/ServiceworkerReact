import React, { useEffect, useState } from "react";
import httpClient from "./utils";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [vidlist, setVidlist] = useState([]);

  useEffect(() => {
    httpClient
      .GET("/videos", false, {})
      .then((data) => {
        setVidlist(data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="">
      {vidlist.map((item, i) => (
        <>
          <Link key={i} to={`/video/${item._id}`}>
            {item.title}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}

export default App;
