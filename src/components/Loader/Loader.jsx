
import React from "react";
import {ClipLoader} from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
    
      <ClipLoader
        color="#DF7921"
        cssOverride={{}}
        loading
        size={40}
        speedMultiplier={0.7}
      />
    </div>
  );
};

export default Loader;