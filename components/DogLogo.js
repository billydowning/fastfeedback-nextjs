import Image from "next/image";

const DogLogo = ({ w, h, style }) => {
  return <Image src="/doglogo.png" alt="me" width={w} height={h} />;
};

export default DogLogo;
