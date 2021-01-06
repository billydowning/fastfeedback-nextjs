import Image from "next/image";

const BackgroundImage = ({ src, w, l }) => {
  return <Image src={src} alt="background image" width={w} height={h} />;
};

export default BackgroundImage;
