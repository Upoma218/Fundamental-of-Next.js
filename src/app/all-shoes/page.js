const AllShesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-cache",
  });
  const shoes = await res.json();
  console.log(shoes);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-6">All Shoes</h1>
      <div className="mx-10">
        <div className="grid grid-cols-4 gap-4">
          {shoes.map((shoe) => (
            <div key={shoe.id}>
              <div className="card bg-base-100 shadow-xl w-full h-full">
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
    </div>
  );
};
export default AllShesPage;
