import React from "react";
import PinItems from "./PinItems";
import Image from "next/image";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

type props = {
  params: string;
  userPins: QueryDocumentSnapshot<DocumentData, DocumentData>[];
};

const CreatedPinList = ({ params, userPins }: props) => {
  return (
    <>
      <div className=" container mx-auto pb-10 columns-4xs w-full h-full">
        {userPins.map((v, i) => {
          return (
            <div
              className="w-[235px] h-fit flex rounded-3xl relative overflow-hidden mb-5"
              key={i}
            >
              <Image src={v.data().image} height={1000} width={1000} alt="" />
              <div className=" group/edit opacity-0 hover:opacity-100 absolute w-full h-full">
                <PinItems PinTypes="created" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CreatedPinList;
