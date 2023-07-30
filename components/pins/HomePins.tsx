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
import UserTag from "../UserTag";

const HomePins = () => {
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
    const q = query(collection(db, "pinterest-post"));
    const docSnap = await getDocs(q);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    docSnap.forEach((snapshot: any) => {
      result.push(snapshot);
    });
    setUserPins(result);
    console.log(userPins);
  };

  return (
    <>
      <div className=" container mx-auto pb-10 columns-4xs w-full h-full">
        {userPins.map((v, i) => {
          return (
            <div className="mb-5">
              <div
                className="w-[235px] h-fit flex rounded-3xl relative overflow-hidden"
                key={i}
              >
                <Image src={v.data().image} height={1000} width={1000} alt="" />
                <div className=" group/edit opacity-0 hover:opacity-100 absolute w-full h-full">
                  <PinItems PinTypes="created" />
                </div>
              </div>
              {v.data().userName ? (
                <UserTag
                  srcPath={v.data().userImage}
                  username={v.data().userName}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePins;
