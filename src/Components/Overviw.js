import React from "react";
import CardSmall from "./Card-small";
import "./Overviw.css";

const CardSmallList = [
  {
    icon: "image/facebook.svg",
    pageViews: "27",
    growth: 3,
    key: 1,
  },
  {
    icon: "image/twitter.svg",
    pageViews: "514",
    growth: 62,
    key: 2,
  },
  {
    icon: "image/instagram.svg",
    pageViews: "5462",
    growth: 52,
    key: 3,
  },
  {
    icon: "image/youtube.svg",
    pageViews: "117",
    growth: 166,
    key: 4,
  },
];

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {CardSmallList.map(({ icon, pageViews, growth, key }) => {
            return (
              <CardSmall
                icon={icon}
                pageViews={pageViews}
                growth={growth}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
