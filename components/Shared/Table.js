"use client";

import React, { useState } from "react";
import s from "./Table.module.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";
import { toast } from "react-toastify";

export default function Table() {
  const { axios } = useAxios();
  const queryClient = useQueryClient();
  const { data: resData, isError } = useQuery({
    queryKey: ["calculations"],
    queryFn: () => axios.get(`/`),
  });

  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (id) => axios.delete(`/${id}`),
    onSuccess: () => {
      setIsDeleting(false);
      toast.success("Successfully deleted!", { autoClose: 1000 });
      queryClient.invalidateQueries({
        queryKey: ["calculations"],
      });
    },
    onError: (error) => {
      setIsDeleting(false);
      toast.error(
        error.response.data.message || "Error deleting calculation to DB!"
      );
    },
  });

  const handleDelete = (id) => {
    setIsDeleting(true);
    mutate(id);
  };

  const calculations = resData?.data?.data || [];

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
          {calculations.map((item) => {
            return (
              <tr className={s["calculation-row"]} key={item._id}>
                <td>
                  {item.num1} {item.operation} {item.num2}
                </td>
                <td>{item.result}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
