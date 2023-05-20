/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useState } from 'react';
import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import galleryStyles from "../styles/Gallery.module.css";
import descriptionStyles from "../styles/Description.module.css";


const Navbar = () => {
  

  return (
    <div className={styles.navContainer}></div>
  );
};




const galleryItems = [
  {
    src: "/VPP.png",
    title: "vPower Plant",
    description: "Phase 1",
    price: "$1.19",
    attributes: [
      { key: "subStation", value: "FL0001" },
      { key: "Rate Type", value: "$ Per kWh" },
      { key: "Gift Share", value: "72%" },
      { key: "Available", value: "724,581" },
      { key: "Green Premium", value: "+ 2 pts" },
      { key: "Project Start", value: "@ 27%" },
    ],
    buttonUrl: 'https://app.unlock-protocol.com/checkout?id=3116e39e-4c6e-4c0f-966d-78ce07e0b9d8', // Add a valid URL here
  },
  {
    src: "/Bio-gas.png",
    title: "eGas subSatation",
    description: "Phase 1",
    price: "$1.19",
    attributes: [
      { key: "VBg subStation", value: "FLA001" },
      { key: "Structure", value: "Commercial" },
      { key: "Gift Share", value: "72%" },
      { key: "Available", value: "567,342" },
      { key: "Green Premium", value: "+ 2 pts" },
      { key: "Project Start", value: "@ 27%" },
    ],
    buttonUrl:'https://app.unlock-protocol.com/checkout?id=3116e39e-4c6e-4c0f-966d-78ce07e0b9d8',
  },
  {
    src: "/Print Farm.png",
    title: "3-D Print Farm",
    description: "Phase 1",
    price: "$1.19",
    attributes: [
      { key: "Print Parcel", value: "FLB001" },
      { key: "Target", value: "Education Supplies" },
      { key: "Gift Share", value: "72%" },
      { key: "Available", value: "834,615" },
      { key: "Green Premium", value: "+ 20 pts" },
      { key: "Project Start", value: "@ 27%" },
    ],
    buttonUrl:'https://app.unlock-protocol.com/checkout?id=3116e39e-4c6e-4c0f-966d-78ce07e0b9d8',
  },
  {
    src: "/eMowers.png",
    title: "eMower Squadron",
    description: "Phase 1",
    price: "$1.19",
    attributes: [
      { key: "Team ID", value: "FLC001" },
      { key: "Rate Type", value: "$ Per acre" },
      { key: "Gift Share", value: "72%" },
      { key: "Available", value: "567,342" },
      { key: "Green Premium", value: "+ 25 pts" },
      { key: "Project Start", value: "@ 27%" },
    ],
    buttonUrl:'https://app.unlock-protocol.com/checkout?id=3116e39e-4c6e-4c0f-966d-78ce07e0b9d8',
  },
/*{
    src: "/PS2O subDAO Token.svg",
    title: "PS2O subDAO Membership",
    description: "Monthly Subscription",
    price: "$45",
    attributes: [
      { key: "Team ID", value: "FLC001" },
      { key: "Rate Type", value: "$ Per acre" },
      { key: "Gift Share", value: "72%" },
      { key: "Available", value: "567,342" },
      { key: "Green Premium", value: "+ 25 pts" },
      { key: "Project Start", value: "@ 27%" },
    ],
    buttonUrl:'https://app.unlock-protocol.com/checkout?id=3116e39e-4c6e-4c0f-966d-78ce07e0b9d8',
  },*/
  {
    src: "/Aquafarm.png",
    title: "3-D Aquafarm",
    description: "Coming Soon!",
    price: "$1.19",
    attributes: [
      { key: "Wet Parcel", value: "FLD001" },
      { key: "Rate Type", value: "$ Per LB" },
      { key: "Gift Share", value: "TBD" },
      { key: "Available", value: "TBD" },
      { key: "Green Premium", value: "TBD" },
      { key: "Project Start", value: "TBD" },
    ],
    // Add Join the Wait List button here
    buttonUrl:'',
  },

  // Add other gallery items here */
];

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBodyContainer}>
          
          <div className={styles.heroAssetFrame}>
  <div className={styles.heroImageContainer}>
    <Image
      src="/Primary PS2O Logo.png"
      width={350}
      height={270}
      alt="Hero asset, NFT marketplace"
      quality={100}
      className={styles.heroAsset}
    />
  </div>
  <h2 className={styles.heroSubtitle}>The Path to Net Zero!</h2>
</div>


            <div className={styles.heroBody}>
            <div className={styles.heroSubtitle}>
  <h1 className={styles.pulsatingTitle}>V<sub className={styles.subText}>2</sub> Marketplace <sup className={styles.betaText}>beta</sup></h1>
  </div>
              <div className={galleryStyles.gallery}>
        {galleryItems.map((item, index) => (
          <div key={index} className={galleryStyles.galleryItem}>
            <Image src={item.src} width={200} height={200} alt={item.title} />
            <h3 className={galleryStyles.title}>{item.title}</h3>
            <h3 className={galleryStyles.price}>{item.price}</h3>
            <p className={galleryStyles.description}>{item.description}</p>
            <ul className={galleryStyles.attributes}>
              {item.attributes.map((attr, i) => (
                <li key={i} className={galleryStyles.attribute}>
                  <span className={galleryStyles.attributeKey}>{attr.key}:</span>{" "}
                  <span className={galleryStyles.attributeValue}>{attr.value}</span>
                </li>
              ))}
            </ul>
            <Link href={item.buttonUrl}>
      <button className={galleryStyles.button}>Claim Token(s)</button>


    </Link>
                  </div>
                ))}
              </div>
              {/* ... */}
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://app.unlock-protocol.com/checkout?id=84ab0539-a4d0-46a1-853d-c83082cd794b"
                  target="_blank"
                >
                  Claim Now
                </Link>{" "}
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/claim">
                  Claim Your Future
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://www.ps2o.io"
                  target="_blank"
                >
                  Join The DAO (Limited)
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

