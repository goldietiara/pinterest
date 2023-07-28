import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";

type props = {
  srcPath: any;
  username: any;
};

const UserTag = ({ srcPath, username }: props) => {
  return (
    <div className="flex items-center justify-start ">
      <Image
        src={srcPath}
        alt="user-image"
        width={70}
        height={70}
        className={`font-semibold p-3 rounded-full`}
      />
      <div className="flex flex-col text-sm font-medium">
        <p>{username}</p>
        <p className="font-light">35 followers</p>
      </div>
    </div>
  );
};

export default UserTag;
