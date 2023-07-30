import UserInfo from "@/components/UserInfo";
import app from "../Shared/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import CreatedSaved from "@/components/CreatedSaved";
import CreatedPinList from "@/components/pins/CreatedPinList";

type params = {
  params: { userid: string };
};

const UserProfile = async ({ params }: params) => {
  const db = getFirestore(app);

  const docRef = doc(db, "User", params.userid.replace("%40", "@"));
  const docSnap = await getDoc(docRef);
  const userInfo = docSnap.data();

  console.log(userInfo);
  console.log(userInfo?.userEmail);

  return (
    <div className=" w-full h-full flex flex-col gap-7">
      {userInfo !== undefined ? (
        <UserInfo
          userEmail={`${userInfo?.userEmail}`}
          userImg={`${userInfo?.userImg}`}
          username={`${userInfo?.username}`}
        ></UserInfo>
      ) : (
        <h1 className="text-center text-6xl font-thin w-full py-52">
          User not found!
        </h1>
      )}
      <CreatedSaved />
      <CreatedPinList params={userInfo?.userEmail} />
    </div>
  );
};

export default UserProfile;
