import UserInfo from "@/components/UserInfo";
import app from "../Shared/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import CreatedSaved from "@/components/CreatedSaved";

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
    <div>
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
    </div>
  );
};

export default UserProfile;

// const [userInfo, setUserInfo] = useState<any>({
//   username: "",
//   userEmail: "",
//   userImg: "",
// });

// useEffect(() => {
//   console.log(params.userid.replace("%40", "@"));
//   if (params) {
// getUserInfo(params.userid.replace("%40", "@"));
//   }
// }, [params]);

// const getUserInfo = async (email: string) => {
//   const docRef = doc(db, "User", email);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     // setUserInfo(docSnap.data());
//     const getUserInfos = docSnap.data();
//     console.log(docSnap.data());
//     console.log(getUserInfos);
//     return getUserInfos;
//   } else {
//     console.log("No such document!");
//   }
// };
