import { ChatNavigation } from "../ChatNavigation/ChatNavigation";

import styles from "./Homepage.module.css";
import { Outlet } from "react-router";

const Homepage = () => {
  return (
    <>
      <main className={styles.homepage}>
        <ChatNavigation />
        <Outlet />
      </main>
    </>
  );
};

export { Homepage };
