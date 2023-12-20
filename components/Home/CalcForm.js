"use client";

import React, { useState } from "react";
import s from "./CalcForm.module.scss";
import { toast } from "react-toastify";
import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { calculate } from "@/utils";

export default function CalcForm() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("+");
  const [output, setOutput] = useState("__");

  const { axios } = useAxios();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (formData) => axios.post(`/`, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calculations"],
      });
    },
    onError: (error) => {
      toast.error(
        error.response.data.message || "Error adding calculation to DB!"
      );
      //   setFormSubmitting(false);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Values");
    if (num1 === "" || num2 === "")
      return toast.error("Num1 and Num2 cannot be empty");
    const result = calculate(+num1, +num2, op);
    setOutput(result);
    const data = {
      num1,
      num2,
      operation: op,
      result,
    };

    // Submit form to backend
    mutate(data);

    console.log(data);
  };

  const num1ChangeHandler = (e) => {
    setOutput("__");
    setNum1(e.target.value);
  };
  const num2ChangeHandler = (e) => {
    setOutput("__");
    setNum2(e.target.value);
  };
  const opChangeHandler = (e) => {
    setOutput("__");
    setOp(e.target.value);
  };

  return (
    <div className={s["form-wrapper"]}>
      <form className={s["form"]} onSubmit={submitHandler}>
        <div className={s["input-group"]}>
          <input
            type="number"
            placeholder="Num 1"
            onChange={num1ChangeHandler}
            value={num1}
          />
        </div>
        <div className={s["input-group"]}>
          <select name="operation" onChange={opChangeHandler} value={op}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="÷">÷</option>
          </select>
        </div>
        <div className={s["input-group"]}>
          <input
            type="number"
            placeholder="Num 2"
            onChange={num2ChangeHandler}
            value={num2}
          />
        </div>
        <button type="submit"> = </button>
      </form>
      <div className={s["answer-box"]}>
        <h3 className={s["answer"]}>
          {num1.trim().length > 0 ? num1 : "__"} {op}{" "}
          {num2.trim().length > 0 ? num2 : "__"} = {output}
        </h3>
      </div>
    </div>
  );
}
