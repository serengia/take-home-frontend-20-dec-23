import React from "react";
import s from "./FooterLinks.module.scss";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <footer className={s["links-wrapper"]}>
      <h3>Source Code:</h3>
      <div className={s["links"]}>
        <Link
          href={"https://github.com/serengia/take-home-backend-20-dec-23"}
          target="_blank"
        >
          Backend API - Node Js
        </Link>
        <Link
          href={"https://github.com/serengia/take-home-frontend-20-dec-23"}
          target="_blank"
        >
          Frontend - React
        </Link>
      </div>
    </footer>
  );
}
