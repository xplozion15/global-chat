import styles from "./Profile.module.css";

const Profile = ({ profileInfo, profileDialogRef }) => {
  const handleDialogClick = (e) => {
    if (e.target === profileDialogRef.current) {
      profileDialogRef.current.close();
    }
  };

  console.log(profileInfo);
  return (
    <>
      <dialog
        className={styles.ProfileElement}
        ref={profileDialogRef}
        onClick={handleDialogClick}
      >
        <div>
             <h1>PROFILE</h1>
          <div>{profileInfo.profile.bannerColour}</div>
          <p>{profileInfo.profile.username}</p>
          <p>{profileInfo.profile.nickname}</p>
          <p>{profileInfo.profile.bio}</p>
        </div>
      </dialog>
    </>
  );
};

export { Profile };
