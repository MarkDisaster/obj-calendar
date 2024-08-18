import { ITEMS_PER_PAGE } from '@/helpers/getReplicatedData/constants';
import {
   Data,
   DataDateISO,
   PaginatedData,
} from '@/helpers/getReplicatedData/interfaces';

export const getReplicatedData = (
   mockData: Data[],
   times: number,
): PaginatedData[] => {
   const replicatedData: DataDateISO[] = [];
   for (let i = 0; i < times; i++) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      const formattedDate = currentDate.toISOString().split('T')[0];

      mockData.forEach((item) => {
         replicatedData.push({
            ...item,
            DateISO: `${formattedDate}T${item.Time}`,
         });
      });
   }

   // Rozdělení dat do stránek
   const paginatedData: PaginatedData[] = [];
   const totalPages = Math.ceil(replicatedData.length / ITEMS_PER_PAGE);

   for (let page = 1; page <= totalPages; page++) {
      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = Math.min(
         startIndex + ITEMS_PER_PAGE,
         replicatedData.length,
      );
      const pageData = replicatedData.slice(startIndex, endIndex);

      // Přidání formátovaného data do každé stránky
      const date = pageData[0]?.DateISO.split('T')[0]; // Vezme datum z prvního elementu v pageData

      paginatedData.push({
         date: date ?? '',
         data: pageData,
      });
   }

   return paginatedData;
};
