const getReactionCountsPerEmoji = (reactions) => {
  const counts = {};

  for (const reaction of reactions) {
    if (counts[reaction.type]) {
      counts[reaction.type]++;
    } else {
      counts[reaction.type] = 1;
    }
  }

  return counts;
};

export { getReactionCountsPerEmoji };