/**
 * Props for the TimeSlot component.
 */
export interface TimeSlotProps {
   /**
    * ISO formatted date string representing the date of the time slot (2024-08-20T23:00).
    * @type {string}
    */
   DateISO: string;

   /**
    * Current available capacity for the time slot.
    * @type {number}
    */
   Capacity: number;

   /**
    * Original total capacity of the time slot before any selections.
    * @type {number}
    */
   OriginalCapacity: number;

   /**
    * The specific time of the time slot, typically in HH:mm format.
    * @type {string}
    */
   Time: string;

   /**
    * The time that is currently considered active (usually highlighted or selected).
    * @type {string}
    */
   activeTime: string;

   /**
    * Function called when the time slot is selected.
    * @type {Function}
    */
   onSelectTime: () => void;

   /**
    * Indicates whether this time slot is currently active.
    * @type {boolean}
    */
   isActive: boolean;
}
