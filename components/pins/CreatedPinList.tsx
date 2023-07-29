"use client";
import React, { useEffect, useState } from "react";
import PinItems from "./PinItems";
import Image from "next/image";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "@/app/Shared/firebaseConfig";

type props = {
  pinImg: string;
  params: string;
};

const CreatedPinList = ({ pinImg, params }: props) => {
  const db = getFirestore(app);
  const [userPins, setUserPins] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserPins();
    setTimeout(() => {
      setLoading(false);
    }, 60);
  }, []);

  const getUserPins = async () => {
    const q = query(
      collection(db, "pinterest-post"),
      where("email", "==", params)
    );
    const docSnap = await getDocs(q);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    docSnap.forEach((snapshot: any) => {
      result.push(snapshot);
    });
    setUserPins(result);
    console.log(userPins);
  };
  //     const userInfo = docSnap.forEach((doc) => {
  //       setUserPins(doc.data());
  //       console.log(doc.data());
  //       console.log(userPins?.image);
  //     });
  //     console.log(userPins?.image);
  //   };

  return (
    <>
      {/* {userPins ? (
        <div className="w-[250px] h-fit flex rounded-3xl relative m-5 overflow-hidden">
          <Image src={userPins?.image} height={1000} width={1000} alt="" />
          <div className=" group/edit opacity-0 hover:opacity-100 absolute w-full h-full">
            <PinItems />
          </div>
        </div>
      ) : null} */}
      <div className=" px-20 flex">
        {userPins.map((v, i) => {
          return (
            <div className="w-[250px] h-fit flex rounded-3xl relative m-5 overflow-hidden">
              <Image src={v.data().image} height={1000} width={1000} alt="" />
              <div className=" group/edit opacity-0 hover:opacity-100 absolute w-full h-full">
                <PinItems />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CreatedPinList;
