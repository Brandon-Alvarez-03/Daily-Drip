import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import "./Newsletter.css";

const articles = [
  {
    title: "Sustainable Living",
    description:
      "At Conservation International, we're working hard to protect nature — but we can’t do it alone. While we need drastic and immediate action by governments and industries on a global scale, individual action is essential — and it adds up to major improvements for the planet.",
    author: "Conservation International",
    date: "2022-12-18",
    link: "https://www.conservation.org/act/sustainable-living-tips?action=conserve-water&where=at-home&gclid=CjwKCAiA7vWcBhBUEiwAXieIttsVQq5m1iYBB2-yWQffK8ompGPcgNdDybWM7jWchmxZs7UEgJartxoCLFcQAvD_BwE",
    imgUrl:
      "https://www.pecanstreet.org/wp-content/uploads/2018/06/background-blur-clean-290678.jpg",
  },
  {
    title: "Water For Everyone",
    description:
      "Eradicating the world’s water crisis through local, missional businesses.",
    author: "Water4",
    date: "2022-12-18",
    link: "https://water4.org/?gclid=CjwKCAiA7vWcBhBUEiwAXieItnbAny2eVwRw1T8eOzXdYd-OO31nbDS5Uf5Nfkmt2fUt6vSh_pIxTRoChlgQAvD_BwE",
    imgUrl:
      "https://www.theregreview.org/wp-content/uploads/2019/02/GettyImages-904647396-4.33.40-PM-1024x660.jpg",
  },
  {
    title: "Effective Steps",
    description:
      "Necessity breeds innovation. In California, which is in the midst of a record-breaking drought, necessity is pushing business owners to find every available method to conserve their water resources.",
    author: "Megan Erwin",
    date: "2022-12-18",
    link: "https://www.pge.com/en/mybusiness/save/smbblog/article/6-steps-to-more-effective-water-conservation-for-businesses.page?redirect=yes",
    imgUrl:
      "https://www.pge.com/resources/images/pge_smb_blog/2015/08.18.15_415x200.jpg",
  },
];

function Newsletter() {
  return (
    <div className="newsletter-container">
      <h1>Help Us Save Water</h1>
      <div className="articles-container">
        {articles.map((article, i) => {
          return <ArticleCard key={i} data={article}></ArticleCard>;
        })}
      </div>
    </div>
  );
}

export default Newsletter;
