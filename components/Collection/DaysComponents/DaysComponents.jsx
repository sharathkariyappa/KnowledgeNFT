import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ el, i }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            layout="fill" // Use layout="fill" to fill the entire parent element
            objectFit="cover"
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <div className={Style.daysComponent_box_img_1}>
            <Image
              src={images.creatorbackground2}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={Style.daysComponent_box_img_2}>
            <Image
              src={images.creatorbackground2}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={Style.daysComponent_box_img_3}>
            <Image
              src={images.creatorbackground2}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                objectFit="cover"
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Shoaib Bhai
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
