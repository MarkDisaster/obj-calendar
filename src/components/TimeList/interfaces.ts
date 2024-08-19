export interface TimeListProps {
   data: Array<{
      Time: string;
      Capacity: number;
      OriginalCapacity: number;
      DateISO: string;
   }>;
   date: string;
   activeTime: string;
   onSelectTime: (time: string, timeslotActive: boolean) => void;
}
