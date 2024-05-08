const DynamicPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <h1>It is a dynamic product page {params.productId}</h1>
    </div>
  );
};

export default DynamicPage;
