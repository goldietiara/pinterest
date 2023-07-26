"use client";
import UserInfo from "@/components/UserInfo";
import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { userInfo } from "os";

type params = {
  params: { userid: string };
};

const UserProfile = ({ params }: params) => {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState<any>({
    username: "",
    userEmail: "",
    userImg: "",
  });

  useEffect(() => {
    console.log(params.userid.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userid.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email: string) => {
    const docRef = doc(db, "User", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
      console.log(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <UserInfo
        // userInfo={""}
        userEmail={`${userInfo?.userEmail}`}
        userImg={`${userInfo?.userImg}`}
        username={`${userInfo?.username}`}
      ></UserInfo>
    </div>
  );
};

export default UserProfile;
