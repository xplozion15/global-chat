const typingUsersText = (typingUsers) => {
  if (typingUsers.length === 1) {
    return `${typingUsers[0].nickname} is typing...`;
  }

  if (typingUsers.length === 2) {
    return `${typingUsers[0].nickname} and ${typingUsers[1].nickname} are typing...`;
  }

  const firstTwoUsers = typingUsers.slice(0, 2);
  const numberOfOtherUsersTyping = typingUsers.length - 2;

  return `${firstTwoUsers[0].nickname}, ${firstTwoUsers[1].nickname} and ${numberOfOtherUsersTyping} other users are typing...`;
};

export { typingUsersText };