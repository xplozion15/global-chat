import styles from "./FriendsList.module.css";
import { useEffect, useState } from "react";
import {
  CircleCheck,
  Ban,
  MessageCircle,
  EllipsisVertical,
} from "lucide-react";
import { Link } from "react-router";
import { FriendRequest } from "../FriendRequest/FriendRequest";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  fetchPendingRequests,
} from "../../services/friendRequestServices";
import { fetchFriends } from "../../services/friendServices";

const FriendsList = () => {
  const [friendsTabState, setFriendsTabState] = useState("friends");
  const [pendingRequests, setPendingRequests] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const pendingRequestsHandler = async () => {
      try {
        const pendingRequestsData = await fetchPendingRequests();
        setPendingRequests(pendingRequestsData.pendingRequests);
      } catch (error) {
        console.error(error);
      }
    };
    pendingRequestsHandler();
  }, []);

  const requestHandler = async (requestId, action) => {
    try {
      if (action === "accept") {
        await acceptFriendRequest(requestId);
      } else if (action === "reject") {
        await rejectFriendRequest(requestId);
      }

      setPendingRequests((earlierPendingRequests) =>
        earlierPendingRequests.filter((request) => request.id !== requestId),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const loadFriendsHandler = async () => {
    try {
      const friends = await fetchFriends();
      setFriends(friends.friends);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadFriends = async () => {
      try {
        const friends = await fetchFriends();
        setFriends(friends.friends);
      } catch (error) {
        console.error(error);
      }
    };
    loadFriends();
  }, []);

  return (
    <>
      <div className={styles.friendsContainer}>
        <h2>Friends</h2>

        <FriendRequest />

        <div>
          <div className={styles.friendsToggler}>
            <button
              onClick={() => {
                setFriendsTabState("friends");
                loadFriendsHandler();
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
                {pendingRequests.map((friendRequest) => {
                  return (
                    <div key={friendRequest.id} className={styles.friend}>
                      <div className={styles.friendNamePfp}>
                        <img
                          src={friendRequest.sender.pfp}
                          alt="pfp"
                          className={styles.friendPfp}
                        />
                        <p>{friendRequest.sender.nickname}</p>
                      </div>
                      <div className={styles.iconContainer}>
                        <Ban
                          onClick={() => {
                            requestHandler(friendRequest.id, "reject");
                          }}
                        />
                        <CircleCheck
                          onClick={() => {
                            requestHandler(friendRequest.id, "accept");
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {friendsTabState === "friends" && (
              <>
                {friends.map((friend) => {
                  return (
                    <Link key={friend.id} className={styles.friend}>
                      <div className={styles.friendNamePfp}>
                        <img
                          src={friend.pfp}
                          alt="pfp"
                          className={styles.friendPfp}
                        />
                        <p>{friend.username}</p>
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
      </div>
    </>
  );
};

export { FriendsList };
