import { useRef, useEffect } from "react";

const LogoutDialog = ({ isLogoutDialogOn }) => {
  const logoutDialogRef = useRef(null);

  useEffect(() => {
    if (isLogoutDialogOn) {
      logoutDialogRef.current.showModal();
    } else {
      logoutDialogRef.current.close();
    }
  }, [isLogoutDialogOn]);

  return (
    <>
      <dialog ref={logoutDialogRef}>
        <p>Do you really wanna logout?</p>
        <button>Yes</button>
        <button>No</button>
      </dialog>
    </>
  );
};

export { LogoutDialog };
