import React from "react";
import Deals from "./Deals";
import cover from "../assets/Cover.svg";
import profile from "../assets/Profile.svg";

const Live = () => {
  const deals = [
    {
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
  ];
  return (
    <div className="livedeals">
      <div className="title">Live Deals</div>
      <div className="sub-title">130 Opportunities.</div>

      <div className="row">
        {deals.map((deal) => (
          <Deals deal={deal} closed={false} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-outline-dark-blue">View more</button>
      </div>
    </div>
  );
};

export default Live;
