import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });

  const shoes = await res.json();
  console.log(shoes);
  // throw new Error("Something went wrong");
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-center my-6">Shoes</h1>
      <div className="mx-auto">
        <div className="flex justify-around">
          {shoes.slice(0, 3).map((shoe) => (
            <div key={shoe.id}>
              <div className="card w-80 bg-base-100 shadow-xl h-full">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{shoe.title}</h2>
                  <p>Details: {shoe.description}</p>
                  <p>Price: {shoe.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-accent my-5">
        <Link href="all-shoes">See More</Link>
      </button>
    </div>
  );
};

export default HomePage;
