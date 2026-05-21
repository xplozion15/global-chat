import { Link } from "react-router";
import styles from "./DmsConversationList.module.css";

const DmsConversationList = () => {
  const dmUsers = [
    {
      id: 1,
      name: "Aarav",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Sana",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Kabir",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Meera",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Rohan",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <>
      <div className={styles.DmsConversationListContainer}>
        <h2>Direct Messages</h2>
        <div>
          {dmUsers.map((dm) => {
            return (
              <Link key={dm.id} className={styles.dm}>
                <img
                  src={dm.avatar}
                  alt="dm-avatar"
                  className={styles.avatarImage}
                />
                <p>{dm.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { DmsConversationList };
