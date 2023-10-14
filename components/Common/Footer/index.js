"use client";
import "./styles.css";
import Link from "next/link";

function Footer() {
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="footer-logo" onClick={() => backToTop()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <Link href={"https://facebook.com"}>
          <img
            src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
            alt="facebook"
            className="social-link"
          />
        </Link>
        <Link href={"mailto:shubhamjindal61999@gmail.com"}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt="email"
            className="social-link"
          />
        </Link>
        <Link href={"https://instagram.com"}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="instagram"
            className="social-link"
          />
        </Link>
        <Link href={"https://twitter.com"}>
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
            alt="inssta"
            className="social-link"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
