import React, { useState, useEffect } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";

//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = () => {
  const CardArray = [
    {
      background: images.Aiml,
      user: images.user1,
    },
    {
      background: images.blockchain,
      user: images.user2,
    },
    {
      background: images.ds,
      user: images.user3,
    },
    {
      background: images.blockchain2,
      user: images.user4,
    },
    {
      background: images.ds2,
      user: images.user5,
    },
    {
      background: images.microsoft,
      user: images.user6,
    },
    {
      background: images.pyhon,
      user: images.user7,
    },
    {
      background: images.main,
      user: images.user8,
    },
  ];
  const FollowingArray = [
    {
      background: images.ds,
      user: images.user3,
    },
    {
      background: images.blockchain2,
      user: images.user4,
    },
    {
      background: images.ds2,
      user: images.user5,
    },
    {
      background: images.microsoft,
      user: images.user6,
    },
    {
      background: images.Aiml,
      user: images.user1,
    },
    {
      background: images.blockchain,
      user: images.user2,
    },
  ];
  const NewsArray = [
    {
      background: images.Aiml,
      user: images.user1,
    },
    {
      background: images.blockchain,
      user: images.user2,
    },
    {
      background: images.ds,
      user: images.user3,
    },
    {
      background: images.blockchain2,
      user: images.user4,
    },
    {
      background: images.ds2,
      user: images.user5,
    },
    {
      background: images.microsoft,
      user: images.user6,
    },
    {
      background: images.pyhon,
      user: images.user7,
    },
    {
      background: images.main,
      user: images.user8,
    },
  ];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Educators List..</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={() => openPopular()}>
              <RiUserFollowFill /> Popular
            </button>
            <button onClick={() => openFollower()}>
              <RiUserFollowFill /> Following
            </button>
            <button onClick={() => openNews()}>
              <RiAwardLine /> NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((el, i) => (
            <FollowerTabCard key={i} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become, Educator</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;