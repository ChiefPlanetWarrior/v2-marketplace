/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ReactNode, useState } from 'react';
import React from "react";
import galleryStyles from "../styles/Gallery.module.css";
import Modal from "react-modal";
import JSXStyle from "styled-jsx/style";



const Navbar = () => {

  return (
    <div className={styles.navContainer}></div>
  );
};
interface GalleryItemProps {
  src: string;
  title: string;
  price: string;
  description: ReactNode;
  attributes: { key: string; value: string }[];
  buttonUrl: string;
}
const GalleryItem: React.FC<GalleryItemProps> = ({ src, title, price, description, attributes, buttonUrl }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className={galleryStyles.galleryItem}>
      <Image src={src} width={200} height={200} alt={title} />
      <h3 className={galleryStyles.title}>{title}</h3>
      <h3 className={galleryStyles.price}>{price}</h3>

      <div className={galleryStyles.description}>
        <a href="#" className={galleryStyles.description} onClick={openPopup}><span style={{ color: "green" }}>{">> Learn More <<"}</span></a></div>


      <ul className={galleryStyles.attributes}>
        {attributes.map((attr, i) => (
          <li key={i} className={galleryStyles.attribute}>
            <span className={galleryStyles.attributeKey}>{attr.key}:</span>{" "}
            <span className={galleryStyles.attributeValue}>{attr.value}</span>
          </li>
        ))}
      </ul>
      <Link href={buttonUrl}>
        <button className={galleryStyles.button}>Claim Token(s)</button>
      </Link>
      {isPopupOpen && (
        <div className={galleryStyles.popup}>
          <div className={galleryStyles.popupContent}>

            <p>{description}</p>

            <button className={galleryStyles.closeButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


const Home: NextPage = () => {
  const galleryItems = [
    {
      src: "/VPP.png",
      title: "vPower Plant",
      price: "$1.19 Buy-In",
      description: (<p style={{ textAlign: "left" }}> A Virtual Power Plant, or VPP, is a bit like a team of football players.
        But instead of people, the team is made up of different types of energy sources - like solar
        panels, wind turbines, and even batteries that store energy. Each one by itself may not be able
        to produce or store a lot of energy, but together, they can produce a lot!
      </p>),
      attributes: [
        { key: "subStation", value: "FL0001" },
        { key: "Rate Type", value: "$ Per kWh" },
        { key: "Gift Share", value: "72%" },
        { key: "Available", value: "724,581" },
        { key: "Project Start", value: "@ 27%" },
      ],
      buttonUrl: 'https://app.unlock-protocol.com/checkout?id=3116e39e-4c6e-4c0f-966d-78ce07e0b9d8', // Add a valid URL here
    },
    {
      src: "/Bio-gas.png",
      title: "eGas subSatation",
      price: "$1.19 Buy-In",
      description: (<><p style={{ textAlign: "left" }}>An eGas subStation comprises
        commercial & residential digesters connected to produce and sell gas to the grid.
        Spread out across different locations, these digesters function collectively
        through this digital link, essentially creating an efficient, coordinated digital
        farm for renewable energy production, despite the physical distances between each unit.
      </p></>),
      attributes: [
        { key: "eGas subStation", value: "FLA001" },
        { key: "Structure", value: "Commercial" },
        { key: "Gift Share", value: "72%" },
        { key: "Available", value: "567,342" },
        { key: "Project Start", value: "@ 27%" },
      ],
      buttonUrl: 'https://app.unlock-protocol.com/checkout?id=6b843770-eb8a-4c29-b803-9008bea39259',
    },
    {
      src: "/Print Farm.png",
      title: "3-D Print Farm",
      price: "$1.19 Buy-In",
      description: "Update Pending",
      attributes: [
        { key: "Print Parcel", value: "FLB001" },
        { key: "Target", value: "Housing, Ed.,Hosp." },
        { key: "Gift Share", value: "72%" },
        { key: "Available", value: "834,615" },
        { key: "Project Start", value: "@ 27%" },
      ],
      buttonUrl: 'https://app.unlock-protocol.com/checkout?id=aa6417c3-c747-4c5f-9193-3d9fba0d49bd',
    },
    {
      src: "/eMowers.png",
      title: "eMower Squadron",
      description: "Update Pending",
      price: "$1.19 Buy-In ",
      attributes: [
        { key: "Team ID", value: "FLC001" },
        { key: "Rate Type", value: "$ Per acre" },
        { key: "Gift Share", value: "72%" },
        { key: "Available", value: "567,342" },
        { key: "Project Start", value: "@ 27%" },
      ],
      buttonUrl: 'https://app.unlock-protocol.com/checkout?id=6eb2ac6e-0aba-4447-8a30-c848dd9eee6d',
    },
    {
      src: "/Aquafarm.png",
      price: "$1.19 Buy-In",
      title: "3-D Aquafarm",
      description: "Coming Soon!",
      attributes: [
        { key: "Wet Parcel", value: "FLD001" },
        { key: "Rate Type", value: "$ Per LB" },
        { key: "Gift Share", value: "TBD" },
        { key: "Available", value: "TBD" },
        { key: "Project Start", value: "TBD" },
      ],
      // Add Join the Wait List button here
      buttonUrl: '',
    },

    // Add other gallery items here */
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalContent = (
    <div>
      {/* Add your modal content here */}
      <h2>How It Works</h2>
      <ol>
        <li>You Claim A Token</li>
        <li>Token = Planet Saving Initiative</li>
        <li>Initiative = Revenue</li>
        <li>Profit = Shared With Token Owners</li>
      </ol>
      <p>Each token represents a fractionalized share of ownership in the planet-saving
        initiative.
        As the initiative generates revenue, the owner of the token(s) receives a payout
        proportional to the number of tokens owned... for the life of the initiative.
        <br></br><br></br> </p>
      <h2> <p style={{ textAlign: "center" }}>Own The <span style={{ color: "green" }}>Green</span> Future!</p></h2>
      <button onClick={closeModal}>Close</button>
    </div>
  );



  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBodyContainer}>
            <br /><br /><br /><br />
            <div className={styles.heroBody}>
              <div className={styles.heroSubtitle}>
                <h1 className={styles.pulsatingTitle}>V<sub className={styles.subText}>2</sub> Marketplace<sup className={styles.betaText}>alpha</sup></h1>
                <h2><p style={{ textAlign: "center" }}>Own The <span style={{ color: "green" }}>Green</span> Future!</p></h2>
              </div>
              <div className={styles.content}>
                <a href="#" onClick={openModal} style={{ textAlign: "left" }}>
                  <h3>How It Works</h3>
                </a>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="How it works"
                  ariaHideApp={false}
                  style={{
                    content: {
                      backgroundColor: "var(--color-background-dark)",
                      color: "black",
                      top: "50%",
                      left: "50%",
                      right: "auto",
                      bottom: "auto",
                      transform: "translate(-50%, -50%)",
                      border: "none",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                      borderRadius: "4px",
                      padding: "20px",
                    },
                    overlay: {
                      backgroundColor: "darkgrey",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  {modalContent}
                </Modal>
              </div>

              <div className={galleryStyles.gallery}>
                {galleryItems.map((item, index) => (
                  <GalleryItem
                    key={index}
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    attributes={item.attributes}
                    buttonUrl={item.buttonUrl}
                  />
                ))}
              </div>
              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/subDAO">
                  Join The subDAO (Limited)
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
export { GalleryItem };
