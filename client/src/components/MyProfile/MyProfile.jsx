import { getMe } from "../../services/authServices";
import styles from "./MyProfile.module.css";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const [myProfileDetails, setMyProfileDetails] = useState(null);

  useEffect(() => {
    const getMyDetails = async () => {
      try {
        const currentUser = await getMe();
        setMyProfileDetails(currentUser);
        
      } catch (error) {
        console.error(error);
      }
    };
    getMyDetails();
  }, []);

  return (
    <>
      <div className={styles.myProfile}>
        {!myProfileDetails ? (
          <p>loading...</p>
        ) : (
          <div>
            <div className={styles.banner}></div>
            <img
              src="https://res.cloudinary.com/dkidfx99m/image/upload/v1719927101/cui0bm8jfffqmoeh7rya.jpg"
              alt="profile-picture"
              className={styles.profilePicture}
            />
            <p className={styles.nickname}>{myProfileDetails.nickname}</p>
            <p className={styles.username}>{myProfileDetails.username}</p>
            <p className={styles.bio}>{myProfileDetails.bio}</p>
            <div>
              <button>Idle</button>
              <button>Online</button>
            </div>
            <button>Edit profile</button>
          </div>
        )}
      </div>
    </>
  );
};

export { MyProfile };
