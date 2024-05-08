import nextImage from "@/assets/nextImage.jpg";
import Image from "next/image";
// import nextImage from "../../assets/nextImage.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimization</h1>
      <h1 className="text-2xl text-center">Regular img tag</h1>
      <img
        className="mx-auto"
        src="https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1715198885~exp=1715202485~hmac=e18e342aaf87ea319b7a2821d09c7da5fc6cfdb18946d5ad290c04a5e18cf19d&w=740"
        alt="image"
        width={500}
        height={500}
      />
      <h1 className="text-2xl text-center">Next js image component</h1>
      <Image
        className="mx-auto"
        src="https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1715198885~exp=1715202485~hmac=e18e342aaf87ea319b7a2821d09c7da5fc6cfdb18946d5ad290c04a5e18cf19d&w=740"
        alt="image"
        width={500}
        height={500}
      />
      <h1 className="text-2xl text-center">Local Image</h1>
      <Image
        className="mx-auto"
        src={nextImage}
        alt="image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
