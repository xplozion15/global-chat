import { API_BASE_URL } from "../config/api";

const sendFriendRequest = async (username) => {
  const response = await fetch(`${API_BASE_URL}/friendrequests`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });

  const friendRequestResult = await response.json();

  if (!response.ok) {
    throw new Error(friendRequestResult.message);
  }

  return friendRequestResult;
};

const fetchPendingRequests = async () => {
  const response = await fetch(`${API_BASE_URL}/friendrequests/pending`, {
    method: "GET",
    credentials: "include",
  });

  const pendingRequests = await response.json();

  if (!response.ok) {
    throw new Error(pendingRequests.message);
  }

  return pendingRequests;
};

const acceptFriendRequest = async (requestId) => {
  const response = await fetch(`${API_BASE_URL}/friendrequests/${requestId}/accept`, {
    method: "PATCH",
    credentials: "include",
  });

  const acceptedRequest = await response.json();

  if (!response.ok) {
    throw new Error(acceptedRequest.message);
  }

  return acceptedRequest;
};

const rejectFriendRequest = async (requestId) => {
  const response = await fetch(`${API_BASE_URL}/friendrequests/${requestId}/reject`, {
    method: "PATCH",
    credentials: "include",
  });

  const rejectedRequest = await response.json();

  if (!response.ok) {
    throw new Error(rejectedRequest.message);
  }

  return rejectedRequest;
};

export {
  sendFriendRequest,
  fetchPendingRequests,
  acceptFriendRequest,
  rejectFriendRequest,
};
