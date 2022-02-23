import React, { useCallback, useEffect, useState } from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import Link from "next/link";
import styles from "../../styles/Products.module.css";
import { getSession, useSession } from "next-auth/react";
import { log } from "console";

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
  const { data: session } = useSession();

  console.log(session);

  console.log("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);
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
    <div className="bg-slate-200 m-1">
      <h1>Todo List</h1>
      {todoList.map((x) => (
        <Link key={x.id} href={`products/${x.id}`}>
          {x.title}
        </Link>
        // <a hre key={x.id}></a>
      ))}
    </div>
  );
};

// Pre-render my page at build time
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);

  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  return {
    props: {
      todoList: json,
    }, // will be passed to the page component as props
  };
};

export default Products;
