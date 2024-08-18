interface MockData {
   Time: string;
   Capacity: number;
   OriginalCapacity: number;
   DateISO: string;
}

export interface Data {
   date: string;
   data: MockData[];
}

export enum TIMESLOT {
   ACTIVE = 'active',
   INACTIVE = 'inactive',
}
