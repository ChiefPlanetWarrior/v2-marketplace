import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useState } from "react";
import Modal from "react-modal";

/**
 * AboutDialog component
 */
const AboutDialog = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About"
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
      <h2>VerdeVentures</h2>
      <p>
        A trailblazing global marketplace committed to combating climate
        change through unique initiatives. We offer digital tokens that represent
        fractionalized ownership in diverse, revenue-generating climate change
        initiatives. <br></br><br></br>By merging blockchain technology with environmental
        activism, VerdeVentures democratizes access to sustainable investments
        and empowers individuals to make a tangible impact. <br></br><br></br>Our platform is more
        than just a marketplace; it&apos;s the Path to a global community of
        forward-thinking Climate Warriors passionate about shaping a greener, more
        sustainable future.

            <div className={styles.link}>
              <Link href="https://gateway.pinata.cloud/ipfs/QmTmFcqAb4rVkRCvsYzr2sY2eyKxq4teyHJqpDZgSbGpN4">
                Privacy Policy
              </Link>
            </div>

      </p>
      <h2> <p style={{ textAlign: "center" }}>Own The <span style={{ color: "green" }}>Green</span> Future!</p></h2>



      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  const openAboutDialog = () => {
    setIsAboutDialogOpen(true);
  };

  const closeAboutDialog = () => {
    setIsAboutDialogOpen(false);
  };

  return (

    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={`${styles.homeLink} ${styles.navLeft}`}>
            <Link href="/">
              <Image
                src="/Primary PS2O Logo.png"
                width={48}
                height={48}
                alt="PS2O Logo"
              />
            </Link>
          </div>
          <div className={styles.navRight}>
            <div className={styles.link}>
              <Link href="/subDAO">
                subDAO
              </Link>
            </div>
          </div>
          <div className={styles.navRight}>
            <div className={styles.link}>
              <Link href="https://links.geneva.com/invite/966c608a-7309-4a6f-9d7a-2a7cd20f7551">
                Chat
              </Link>
            </div>
          </div>
          <div className={styles.navLeft}>
            <div className={styles.link}>
              <Link href="/exchange">Exchange</Link>
            </div>
          </div>
          <div className={styles.navRight}>
            <div className={styles.link}>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </div>
          </div>
          <div className={styles.navLeft}>
            <div className={styles.link}>
              <Link href="https://bafybeidayasqwawuaeyevuo2s47akabsondmb5xowuxnbn6pltv6tya4u4.ipfs.dweb.link/">
                Greenpaper
              </Link>
            </div>
          </div>
          <div className={styles.navLeft}>
            <div className={styles.link} onClick={openAboutDialog}>
              About
            </div>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
      <AboutDialog isOpen={isAboutDialogOpen} onClose={closeAboutDialog} />
    </div>
  );
}

export default Navbar;