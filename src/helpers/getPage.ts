export const getPage = (array: any[], page: number, perPage: number): any[] => {
   const startIndex = perPage * (page - 1);
   const endIndex = Math.min(startIndex + perPage, array.length);
   return array.slice(startIndex, endIndex);
};
