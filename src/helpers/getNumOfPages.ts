export const getNumOfPages = (array: any[], perPage: number): number => {
   return Math.ceil(array.length / perPage);
};
