import Image from "next/image";
import s from "./page.module.scss";
import Table from "@/components/Shared/Table";
import CalcForm from "@/components/Home/CalcForm";

export default function Home() {
  return (
    <main>
      <div className={`${s["hero"]} row`}>
        <h1>Calculator App</h1>
      </div>
      <div className={`${s["calc-wrapper"]} row`}>
        <CalcForm />
      </div>

      <div className={`${s["prev-results"]} row`}>
        <h3>Previous Results:</h3>
        <Table />
      </div>
    </main>
  );
}
