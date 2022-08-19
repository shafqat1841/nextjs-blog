import Image from "next/image";
import profileImg from "../../public/images/profile.jpg";

const ImageComponent = () => {
  return (
    <Image src={profileImg} height={144} width={144} alt="profile image" />
  );
};

export default ImageComponent;
