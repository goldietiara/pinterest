"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type props = {
  username?: string;
  userEmail?: string;
  userImg?: any;
};

function UserInfo({ username, userEmail, userImg }: props) {
  const router = useRouter();
  const { data: session } = useSession();
  const onLogoutClick = () => {
    signOut();
    router.push("/");
  };

  const [randomFollowing, setRandomFollowing] = useState(0);
  const [randomFollowers, setRandomFollowers] = useState("");

  useEffect(() => {
    setRandomFollowing(Math.floor(Math.random() * 100));
    setRandomFollowers(
      String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + "k")
    );
  }, []);
  return (
    <div className="flex flex-col items-center mt-5 gap-2">
      <Image
        src={userImg}
        alt="userImage"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h2 className="text-[30px] font-semibold mb-0">{username}</h2>
      <h2 className="text-gray-500 font-light text-sm">{userEmail}</h2>
      <div className="flex text-base font-medium gap-5 ">
        <h4>Followers {randomFollowers}</h4>
        <h4>Following {randomFollowing}</h4>
      </div>

      <div className="flex gap-4">
        <button className="bg-gray-100 p-3 px-5 font-semibold mt-5 rounded-full hover:bg-gray-200">
          Share
        </button>
        {session?.user?.email == userEmail ? (
          <button
            className="bg-gray-100 p-3 px-5 font-semibold mt-5 rounded-full hover:bg-gray-200"
            onClick={() => onLogoutClick()}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default UserInfo;
