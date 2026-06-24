import { Link } from "react-router";
import styles from "./FriendsList.module.css";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  EllipsisVertical,
  CircleCheck,
  Ban,
} from "lucide-react";
import { FriendRequest } from "../FriendRequest/FriendRequest";
import {
  acceptFriendRequest,
  rejectFriendRequest,
  fetchPendingRequests,
} from "../../services/friendRequestServices";

const FriendsList = () => {
  const [friendsTabState, setFriendsTabState] = useState("friends");
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const pendingRequestsHandler = async () => {
      try {
        const pendingRequestsData = await fetchPendingRequests();
        setPendingRequests(pendingRequestsData.pendingRequests);
        console.log(pendingRequestsData.pendingRequests);
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
                {/* {friendsResponse.friends
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
                  })} */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { FriendsList };
