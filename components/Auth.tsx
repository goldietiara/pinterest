"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "@/app/Shared/firebaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Auth = () => {
  const { data: session } = useSession();
  console.log(session?.user?.email);
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "User", session?.user?.email!), {
        username: session?.user?.name,
        userEmail: session?.user?.email,
        userImg: session?.user?.image,
      });
    }
  };
  return (
    <div>
      {session?.user ? (
        <Image
          src={`${session?.user?.image}`}
          onClick={() => router.push(`/${session?.user?.email}`)}
          alt="user-image"
          width={50}
          height={50}
          className={`font-semibold p-3 rounded-full bg-white cursor-pointer hover:bg-gray-100`}
        />
      ) : (
        <button
          className={`font-semibold p-3 rounded-full bg-white`}
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;
