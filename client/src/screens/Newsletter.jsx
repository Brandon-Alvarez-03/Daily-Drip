import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";

const articles = [
  {
    title: "The Benefits of Exercise",
    description:
      "Regular exercise has numerous benefits for both physical and mental health. It can help improve cardiovascular health, reduce the risk of chronic diseases such as obesity and type 2 diabetes, and boost mood and mental clarity. In addition, regular exercise can help to improve sleep, reduce stress and anxiety, and enhance overall quality of life.",
    author: "Jane Doe",
    date: "2022-12-18",
  },
];

function Newsletter() {
  return (
    <div>
      {articles.map((article, i) => {
        return <ArticleCard key={i} data={article}></ArticleCard>;
      })}
    </div>
  );
}

export default Newsletter;
