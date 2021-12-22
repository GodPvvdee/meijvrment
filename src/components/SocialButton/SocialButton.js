import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/dist/client/link";

const SocialButton = (props) => {
  return (
    <>
      <a target="_blank" href="https://www.facebook.com/">
        <button className="fixed text-5xl text-indigo-700 right-10 bottom-10">
          <FaFacebookMessenger />
        </button>
      </a>
    </>
  );
};

export default SocialButton;
