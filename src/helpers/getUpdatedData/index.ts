import { Data } from '@/helpers/getUpdatedData/interfaces';

export const getUpdatedData = (
   dateISO: string,
   prevSelectedDate: string,
   data: Data[],
   timeslotActive: boolean,
): Data[] => {
   const updatedDataArray = data.map((dataItem) => {
      const updatedDataItems = dataItem.data.map((item) => {
         //dve funkce - setCapacityPlus setCapacityMinus
         if (item.DateISO === dateISO && item.DateISO !== prevSelectedDate) {
            return {
               ...item,
               Capacity: item.Capacity - 1,
            };
         } else if (
            item.DateISO === prevSelectedDate &&
            item.DateISO !== dateISO
         ) {
            return {
               ...item,
               Capacity: item.Capacity + 1,
            };
         } else if (
            item.DateISO === prevSelectedDate &&
            item.DateISO === dateISO &&
            timeslotActive === true
         ) {
            return {
               ...item,
               Capacity: item.Capacity + 1,
            };
         }
         return item;
      });

      return {
         ...dataItem,
         data: updatedDataItems,
      };
   });

   return updatedDataArray;
};
