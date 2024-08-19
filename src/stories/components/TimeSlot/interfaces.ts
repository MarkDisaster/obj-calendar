export interface TimeSlotProps {
   DateISO: string;
   Capacity: number;
   OriginalCapacity: number;
   Time: string;
   activeTime: string;
   onSelectTime: () => void;
   isActive: boolean;
}
