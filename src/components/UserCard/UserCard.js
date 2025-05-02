import React from "react";
import topicData from "./topic.json";

const UserCard = () => {
  return (
    <div className="user-cards-container">
      {topicData?.items?.map((item, index) => (
        <div key={index} className="user-card">
          <div class="avatar-container">
            <img className="avatar" src={item?.img} width="100px"></img>
            <h2 class="">{item?.name}</h2>
            <p>Age: {item?.age}</p>
            <p>Email: {item?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
