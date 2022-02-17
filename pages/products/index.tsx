import React, { useCallback, useEffect, useState } from "react";
import { GetStaticProps, GetServerSideProps } from "next";

type TodoListType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todoList: TodoListType[];
};

// Current approach is client side rendering
const Products = ({ todoList }: Props) => {
  // const [todoList, setTodoList] = useState([]);

  // const loadData = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const json = await res.json();
  //     setTodoList(json);
  //   } catch (error) {}
  // }, []);

  // useEffect(() => {
  //   loadData();

  //   return () => {};
  // }, [loadData]);

  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((x) => (
        <p key={x.id}>{x.title}</p>
      ))}
    </div>
  );
};

// Pre-render my page at build time
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  return {
    props: {
      todoList: json,
    }, // will be passed to the page component as props
  };
};

export default Products;
