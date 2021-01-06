import Image from "next/image";

const DogLogo = ({ w, h }) => {
  return <Image src="/doglogo.png" alt="me" width={w} height={h} />;
};

export default DogLogo;
