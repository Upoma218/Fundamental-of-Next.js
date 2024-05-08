import Counter from "@/components/Counter/counter";

export const metadata = {
  title: "Home page",
  description: "This is home page",
};

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xt font-bold text-center">
        Welcome to next js project
      </h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;
