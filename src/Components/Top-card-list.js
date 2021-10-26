import React from "react";
import Card from "./Card";
import "./Top-card-list";

const cardListData = [
  {
    username: "@YampierPonceV",
    id: 1,
    followers: "1596",
    todayFollowers: 12,
    icon: "image/facebook.svg",
    name: "facebook",
  },
  {
    username: "@YampierPonceV",
    id: 2,
    followers: "28k",
    todayFollowers: 20,
    icon: "image/twitter.svg",
    name: "twitter",
  },
  {
    username: "@YampierPonceV",
    id: 3,
    followers: "6k",
    todayFollowers: 30,
    icon: "image/instagram.svg",
    name: "instagram",
  },
  {
    username: "@YampierPonceV",
    id: 4,
    followers: "12k",
    todayFollowers: -50,
    icon: "image/youtube.svg",
    name: "youtube",
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((card) => {
            return (
              <Card
                key={card.id}
                /* username={card.username}
                followers={card.followers}
                todayFollowers={card.todayFollowers} */
                {...card}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
