"use client";

import React from "react";
import s from "./Table.module.scss";

export default function Table() {
  return (
    <div className={s["table-wrapper"]}>
      <table className={s["table"]}>
        <thead>
          <tr>
            <th>Calculation</th>
            <th>Result</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className={s["calculation-row"]}>
            <td>200 + 100</td>
            <td>210</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr className={s["calculation-row"]}>
            <td>2000 + 100</td>
            <td>210</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
          <tr className={s["calculation-row"]}>
            <td>2000 + 100</td>
            <td>210</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
