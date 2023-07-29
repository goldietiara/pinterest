"use client";
import React, { useState } from "react";
import UploadImage from "./UploadImage";
import { useSession } from "next-auth/react";
import {
  UploadResult,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import UserTag from "./UserTag";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import app from "@/app/Shared/firebaseConfig";
import Button from "./Button";
import { GrClose } from "react-icons/Gr";

const Form = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const storage = getStorage(app);
  const postId = Date.now().toString();
  const router = useRouter();

  const [form, setForm] = useState<any>({
    title: "",
    desc: "",
    link: "",
  });
  const [image, setImage] = useState<any>();

  const uploadFile = (e: any) => {
    e.preventDefault();

    const storageRef = ref(storage, "pinterest2/" + image?.name);
    uploadBytes(storageRef, image)
      .then((snapshot: UploadResult) => {
        console.log(snapshot.metadata.bucket);
        console.log("File Uploaded");
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (url) => {
          console.log("DownloadUrl", url);
          const postData = {
            title: form.title,
            desc: form.desc,
            link: form.link,
            image: url,
            userName: session?.user?.name,
            email: session?.user?.email,
            userImage: session?.user?.image,
            id: postId,
          };

          await setDoc(doc(db, "pinterest-post", postId), postData).then(
            (resp) => {
              console.log("Saved");
              router.push("/" + session?.user?.email);
            }
          );
        });
      });
  };

  const uploadImg = (e: any) => {
    setForm((prev: any) => ({ ...prev, image: e.target.files?.[0] }));
    setImage(e.target.files?.[0]);
  };

  return (
    <form onSubmit={uploadFile}>
      <div className="grid grid-cols-2 mb-5">
        <GrClose className=" self-center text-xl cursor-pointer" />
        <Button
          name="Save"
          type="submit"
          className="bg-red-600 text-white text-base rounded-md w-fit py-2 place-self-end"
        />
      </div>
      <div className="flex gap-10 ">
        <UploadImage onChange={uploadImg} selectedFiles={form.image} />
        <div className="flex flex-col gap-5 h-[100%]">
          <input
            type="text"
            placeholder="Add your title"
            className="text-3xl font-semibold pt-5 pb-1 border-b-2"
            onChange={(e) =>
              setForm((prev: any) => ({ ...prev, title: e.target.value }))
            }
          />
          <UserTag
            srcPath={session?.user?.image}
            username={session?.user?.name}
          />
          <input
            type="text"
            placeholder="Tell everyone what's your Pins about"
            className="font-light border-b-2 w-full pt-2 pb-4 px-3 "
            onChange={(e) =>
              setForm((prev: any) => ({ ...prev, desc: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Add a destination link"
            className="font-light border-b-2 w-full py-2 self-end mt-28"
            onChange={(e) =>
              setForm((prev: any) => ({ ...prev, link: e.target.value }))
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
