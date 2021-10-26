import React, { useState, useEffect } from "react";
import Header from "./Header";
import Switch from "./Switch";
import TopCardList from "./Top-card-list";
import Overview from "./Overviw";

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const mainClass = isDarkMode ? "is-dark-mode" : "is-light-mode";

  function handleMedia(mq) {
    setIsDarkMode(mq.matches);
    setIsChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(handleMedia);
    setIsDarkMode(mq.matches);
    setIsChecked(mq.matches);
    return () => {
      mq.removeListener(handleMedia);
    };
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setIsDarkMode={setIsDarkMode}
          checked={isChecked}
          setChecked={setIsChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
};

export default Main;
