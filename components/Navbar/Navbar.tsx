import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";


/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

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
          <div className={styles.navLeft}>
            <div className={styles.link}>
              <Link href="/exchange">
                Exchange
              </Link>
            </div>
          </div>
          <div className={styles.navLeft}>
            <div className={styles.link}>
              <Link href="/claim">
                Claim
              </Link>
            </div>
          </div>
          <div className={styles.navLeft}>
            <div className={styles.link}>
              <Link href="https://gateway.pinata.cloud/ipfs/QmNYf1Z6LUDSqRLD6ThHVwDVbxE4RCJyoHXtjuawMZa8YZ">
                Greenpaper
              </Link>
            </div>
          </div>
          
          <div className={styles.navRight}>
            <div className={styles.link}>
              <Link href="https://gateway.pinata.cloud/ipfs/QmTmFcqAb4rVkRCvsYzr2sY2eyKxq4teyHJqpDZgSbGpN4">
               Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          </div>
          {address && (
            <div className={styles.link}>
              <Link href={`/profile/${address}`}>
                
                  <Image
                    className={styles.profileImage}
                    src="/user-icon.png"
                    width={42}
                    height={42}
                    alt="Profile"
                  />
                
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
/**
 *
 * https://gateway.pinata.cloud.ipfs/QmTmFcqAb4rVkRCvsYzr2sY2eyKxq4teyHJqpDZgSbGpN4
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/sell" className={styles.link}>
              Sell
            </Link>
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
    </div>
  );
}



*/