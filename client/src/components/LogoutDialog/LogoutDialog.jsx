import { useRef, useEffect } from "react";
import { logoutUser } from "../../services/authServices";
import { socket } from "../../socket";
import { useNavigate } from "react-router-dom";

const LogoutDialog = ({ isLogoutDialogOn, setIsLogoutDialogOn }) => {
  const logoutDialogRef = useRef(null);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutUser();

      //disconnect socket io client
      socket.disconnect();
      setIsLogoutDialogOn(false);
      // go to home page
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
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
        <button
          onClick={() => {
            logoutHandler();
            setIsLogoutDialogOn(false);
          }}
        >
          Yes
        </button>
        <button onClick={() => setIsLogoutDialogOn(false)}>No</button>
      </dialog>
    </>
  );
};

export { LogoutDialog };
