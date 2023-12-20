import React from "react";
import s from "./page.module.scss";

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
      </div>
    </main>
  );
}
