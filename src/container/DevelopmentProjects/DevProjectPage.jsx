import React from "react";
import Heading from "../../common/Header/Heading";
import classes from "./DevProjectPage.module.css";
import dev1 from "../../assets/img/HowtoDesignChatbotConversations 1.svg";
import dev2 from "../../assets/img/ot 1.svg";
import dev3 from "../../assets/img/d02b96082e67c6f50d18a13ee9cfbe3753973c07 1.svg";
import DevProjectSection from "./DevProjectSection";

const DevProjectPage = () => {
  const data = [
    {
      heading: "Chatbot",
      para_content: "Web Development / Deployment Project",
      img_address: `${dev1}`,
    },
    {
      heading: "Object Detection",
      para_content: "App Development / Deployment Project",
      img_address: `${dev2}`,
    },
    {
      heading: "Discord Sentiment Detection Bot",
      para_content: "App Development / Deployment Project",
      img_address: `${dev3}`,
    },
  ];
  return (
    <div className={classes.devProjectPage}>
      <Heading
        title="DEVELOPMENT PROJECTS"
        subTitle="Projects"
        color="#00B5FF"
      />
      <DevProjectSection props={data} />
    </div>
  );
};

export default DevProjectPage;
