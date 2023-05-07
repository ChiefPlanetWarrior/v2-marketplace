import type { NextPage } from "next";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/Primary PS2O Logo.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  The Path to Net Zero!
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://www.ps2o.io"
                  target="_blank"
                >
                  PS2O
                </Link>{" "}
                is the missing element needed to stop & reverse climate change!<b>hours</b>, <i>not months</i>.
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
