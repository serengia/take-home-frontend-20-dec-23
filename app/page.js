import Image from "next/image";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <h1>Calculator App</h1>
      <div className={`${s["calc-wrapper"]} row`}>
        <form className={s["form"]}>
          <div className={s["input-group"]}>
            <label htmlFor="num1">Num 1</label>
            <input type="text" />
          </div>
          <div className={s["input-group"]}>
            <select name="operation">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="x">x</option>
              <option value="÷">÷</option>
            </select>
          </div>
          <div className={s["input-group"]}>
            <label htmlFor="num1">Num 1</label>
            <input type="text" />
          </div>
          <button type="submit"> = </button>
        </form>
      </div>
    </main>
  );
}
