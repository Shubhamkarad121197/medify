import React from "react";
import "./LatestNews.css";
import blogImage from "../../assets/blog.jpg"; // replace with actual image

// Sample data for news articles

const newsData = [
  {
    id: 1,
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
    image: "../../assets/blog.jpg", // replace with actual image
  },
  {
    id: 2,
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
     image: "../../assets/blog.jpg"
  },
  {
    id: 3,
    category: "Medical",
    date: "March 31, 2022",
    title: "6 Tips To Protect Your Mental Health When You’re Sick",
    author: "Rebecca Lee",
     image: "../../assets/blog.jpg"
  },
];

export default function LatestNews() {
  return (
    <section className="latest-news">
      {/* Heading */}
      <div className="news-header">
        <span className="news-subtitle">Blog & News</span>
        <h2 className="news-title">Read Our Latest News</h2>
      </div>

      {/* Cards */}
      <div className="news-grid">
        {newsData.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={blogImage} alt={news.title} className="news-image" />

            <div className="news-content">
              <div className="news-meta">
                <span className="news-category">{news.category}</span>
                <span className="dot">•</span>
                <span>{news.date}</span>
              </div>

              <h3 className="news-heading">{news.title}</h3>

              <div className="news-author">
                <div className="author-avatar">
                  {news.author.charAt(0)}
                </div>
                <span>{news.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
