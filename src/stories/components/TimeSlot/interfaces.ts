export enum TIMESLOT {
   ACTIVE = 'active',
   INACTIVE = 'inactive',
}

export interface TimeSlotProps {
   DateISO: string;
   Capacity: number;
   OriginalCapacity: number;
   Time: string;
   activeTime: string;
   onSelectTime: (time: string, timeslotActive: TIMESLOT) => void;
}
