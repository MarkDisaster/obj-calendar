import { Data } from '@/helpers/getUpdatedData/interfaces';

export const getDatabyTime = (props: Data): Data => {
   const currentDate = new Date();

   const upcomingData = props.data.filter((mockData) => {
      const mockDate = new Date(mockData.DateISO);
      return mockDate > currentDate;
   });

   return {
      date: props.date,
      data: upcomingData,
   };
};
