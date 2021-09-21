import type { NextPage } from "next";
import Counter from "../components/counter";
import { Heading } from "../components/heading";

const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Heading title="Welcome to the nextjs + redux + typescript + jest + tailwindcss" />
        <Counter />
      </div>
    </div>
  );
};

export default Home;
