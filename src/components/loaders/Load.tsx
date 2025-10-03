import React from "react";
import "@/components/loaders/load.scss";

export const Load: React.FC = () => {
  return (
    <div className="load">
      <div className="load__balls">
        <div className="load__ball"></div>
        <div className="load__ball"></div>
        <div className="load__ball"></div>
      </div>
      <span className="load__text">Loading...</span>
    </div>
  );
};