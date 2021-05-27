import React, { useEffect, useState } from "react";
import httpClient from "./utils";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
const VIDEO_URL = process.env.REACT_APP_VIDEO_URL;

const ListOfVideo = (props) => {
  const [vidlist, setVidlist] = useState({});
  let { id } = useParams();
  useEffect(() => {
    httpClient
      .GET(`/videos/${id}`, false, {})
      .then((data) => {
        setVidlist(data.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div style={{ background: "#eeeee", textAlign: "center" }}>
      <h1>{vidlist.title}</h1>

      {vidlist.video && (
        <ReactPlayer
          url={`${VIDEO_URL}/${vidlist.video}`}
          width="100%"
          height="100%"
          controls={true}
        />
      )}
    </div>
  );
};

export default ListOfVideo;
