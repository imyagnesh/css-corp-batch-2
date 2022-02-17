import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

type TodoListType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todoItem: TodoListType;
};

const Product = ({ todoItem }: Props) => {
  return (
    <div>
      <Head>
        <title>{todoItem.title}</title>
      </Head>
      <h1>Product</h1>
      <h2>{todoItem.title}</h2>
    </div>
  );
};

interface QueryData extends ParsedUrlQuery {
  product: string;
}

export const getStaticProps: GetStaticProps<Props, QueryData> = async (
  context
) => {
  const data = context.params!;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${data.product}`
  );
  const json = await res.json();

  return {
    props: {
      todoItem: json,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json: TodoListType[] = await res.json();

  const paths = json.map((x) => ({ params: { product: `${x.id}` } }));

  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
};

export default Product;
