"use client";
import React, { useEffect, useState } from "react";
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
import CreatedPinList from "./pins/CreatedPinList";
import SavedPins from "./pins/SavedPins";

type props = {
  params: string;
};

const CreatedSaved = ({ params }: props) => {
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

  const [option, setOption] = useState("created");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center items-center w-full h-full mt-5 gap-5 font-medium">
        <button
          onClick={() => {
            setOption("created");
          }}
          className={
            option === "created"
              ? "border-b-[3px] border-black py-1 px-2 "
              : "py-1 px-2 hover:bg-gray-100 rounded-lg border-b-[3px] border-transparent"
          }
        >
          Created
        </button>
        <button
          onClick={() => {
            setOption("saved");
          }}
          className={
            option === "saved"
              ? "border-b-[3px] border-black py-1 px-2 "
              : "py-1 px-2 hover:bg-gray-100 rounded-lg border-b-[3px] border-transparent"
          }
        >
          Saved
        </button>
      </div>
      {option === "saved" ? (
        <SavedPins />
      ) : (
        <CreatedPinList params={params} userPins={userPins} />
      )}
    </div>
  );
};

export default CreatedSaved;
