import { Data } from '@/helpers/getDataByDate/interfaces';

const defaultMockData = {
   date: '',
   data: [],
};

export const findByDate = (date: string, dataArray: Data[]): Data => {
   return dataArray.find((item) => item.date === date) || defaultMockData;
};
