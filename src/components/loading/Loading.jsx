import React from "react";
import loading from "../../assets/loading.gif";
import "../../sass/__loading.scss";

const Loading = () => {
  return (
    <div className="spinner_loading">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
