export const getEpisodeNumber = (ep: { number: string }) => {
  const match = ep.number.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};
