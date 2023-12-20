import React from "react";
import s from "./page.module.scss";
import Link from "next/link";

export default function page() {
  return (
    <main>
      <div className={`${s["content"]} row`}>
        <h1>About the project</h1>
        <p>
          A simple web application that allows users to perform basic arithmetic
          operations (addition, subtraction, multiplication, and division) on
          two numbers. The application stores the data in the cloud using a
          cloud database service.
        </p>
        <div className={s["links-wrapper"]}>
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
        </div>
      </div>
    </main>
  );
}
