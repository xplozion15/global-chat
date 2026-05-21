import { Link } from "react-router";
import styles from "./FriendsList.module.css";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Ban } from "lucide-react";

const FriendsList = () => {
  const [friendsTabState, setFriendsTabState] = useState("friends");

  const friendsResponse = {
    success: true,
    friends: [
      {
        id: "u1",
        name: "Aarav Sharma",
        pfp: "https://i.pravatar.cc/150?img=1",
        status: "friends",
      },
      {
        id: "u2",
        name: "Emily Johnson",
        pfp: "https://i.pravatar.cc/150?img=2",
        status: "pending",
      },
      {
        id: "u3",
        name: "Hiroshi Tanaka",
        pfp: "https://i.pravatar.cc/150?img=3",
        status: "friends",
      },
      {
        id: "u4",
        name: "Sofia Rossi",
        pfp: "https://i.pravatar.cc/150?img=4",
        status: "pending",
      },
      {
        id: "u5",
        name: "Mohammed Al-Farsi",
        pfp: "https://i.pravatar.cc/150?img=5",
        status: "friends",
      },
      {
        id: "u6",
        name: "Liam O'Connor",
        pfp: "https://i.pravatar.cc/150?img=6",
        status: "friends",
      },
      {
        id: "u7",
        name: "Chen Wei",
        pfp: "https://i.pravatar.cc/150?img=7",
        status: "pending",
      },
      {
        id: "u8",
        name: "Fatima Zahra",
        pfp: "https://i.pravatar.cc/150?img=8",
        status: "friends",
      },
      {
        id: "u9",
        name: "Lucas Martins",
        pfp: "https://i.pravatar.cc/150?img=9",
        status: "friends",
      },
      {
        id: "u10",
        name: "Olivia Brown",
        pfp: "https://i.pravatar.cc/150?img=10",
        status: "pending",
      },
      {
        id: "u11",
        name: "Min-jun Park",
        pfp: "https://i.pravatar.cc/150?img=11",
        status: "friends",
      },
      {
        id: "u12",
        name: "Anastasia Ivanova",
        pfp: "https://i.pravatar.cc/150?img=12",
        status: "friends",
      },
      {
        id: "u13",
        name: "Kwame Mensah",
        pfp: "https://i.pravatar.cc/150?img=13",
        status: "pending",
      },
      {
        id: "u14",
        name: "Isabella Garcia",
        pfp: "https://i.pravatar.cc/150?img=14",
        status: "friends",
      },
      {
        id: "u15",
        name: "Jean Dupont",
        pfp: "https://i.pravatar.cc/150?img=15",
        status: "friends",
      },
      {
        id: "u16",
        name: "Zeynep Kaya",
        pfp: "https://i.pravatar.cc/150?img=16",
        status: "pending",
      },
      {
        id: "u17",
        name: "Mateo Fernández",
        pfp: "https://i.pravatar.cc/150?img=17",
        status: "friends",
      },
      {
        id: "u18",
        name: "Amara Okafor",
        pfp: "https://i.pravatar.cc/150?img=18",
        status: "friends",
      },
      {
        id: "u19",
        name: "Greta Müller",
        pfp: "https://i.pravatar.cc/150?img=19",
        status: "pending",
      },
      {
        id: "u20",
        name: "Noah Williams",
        pfp: "https://i.pravatar.cc/150?img=20",
        status: "friends",
      },
    ],
  };

  return (
    <>
      <div className={styles.friendsContainer}>
        <h2>Friends</h2>

        <div className={styles.friendsToggler}>
          <button
            onClick={() => {
              setFriendsTabState("friends");
            }}
          >
            My friends
          </button>
          <button
            onClick={() => {
              setFriendsTabState("pending");
            }}
          >
            Pending requests
          </button>
        </div>

        <div className={styles.friends}>
          {friendsTabState === "pending" && (
            <>
              {friendsResponse.friends
                .filter((friend) => {
                  return friend.status === "pending";
                })
                .map((friend) => {
                  return (
                    <Link key={friend.id} className={styles.friend}>
                      <div className={styles.friendNamePfp}>
                        <img
                          src={friend.pfp}
                          alt="pfp"
                          className={styles.friendPfp}
                        />
                        <p>{friend.name}</p>
                      </div>
                      <div className={styles.iconContainer}>
                        <Ban />
                        <CircleCheck />
                      </div>
                    </Link>
                  );
                })}
            </>
          )}

          {friendsTabState === "friends" && (
            <>
              {friendsResponse.friends
                .filter((friend) => {
                  return friend.status === "friends";
                })
                .map((friend) => {
                  return (
                    <Link key={friend.id} className={styles.friend}>
                      <div className={styles.friendNamePfp}>
                        <img
                          src={friend.pfp}
                          alt="pfp"
                          className={styles.friendPfp}
                        />
                        <p>{friend.name}</p>
                      </div>
                      <div className={styles.iconContainer}>
                        <MessageCircle />
                        <EllipsisVertical />
                      </div>
                    </Link>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { FriendsList };
