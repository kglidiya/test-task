export const getRandomItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };