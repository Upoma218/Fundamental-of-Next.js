"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-5xl text-center text-red-500">{error.message}</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorPage;
