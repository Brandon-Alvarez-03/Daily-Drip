import React, { useState, useEffect } from "react";
import "./ArticleCard.css";

function ArticleCard({ data }) {
  return (
    <div className="card-container">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${data.imgUrl})`,
        }}
        alt=""
      />
      <div className="card-info">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
        <span>continue reading...</span>
        <div className="card-icons-container">
          <div className="card-icon">
            <p>{data.author}</p>
          </div>
          <div className="card-icon">
            <p>{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
