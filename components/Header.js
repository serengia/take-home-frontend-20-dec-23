import Link from "next/link";
import React from "react";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <header className={s["header"]}>
      <div className={`${s["content"]} row`}>
        <div className={s["logo-wrapper"]}>
          <span className={s["logo"]}>Calc App</span>
        </div>
        <nav className={s["nav"]}>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
