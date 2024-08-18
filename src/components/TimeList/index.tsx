import { TimeListProps } from '@/components/TimeList/interfaces';
import { TimeSlot } from '@/stories/components/TimeSlot';
import { Component } from 'solid-js';

/**
 * TimeList Component
 *
 * This component renders a list of time slots based on the provided data. Each time slot
 * can be selected, and the available capacity is displayed for each slot.
 *
 * @component
 * @param {TimeListProps} timeListData - The props for the TimeList component.
 * @param {Array<{ DateISO: string, Capacity: number, OriginalCapacity: number, Time: string }>} timeListData.data - Array of time slot data to display.
 * @param {string} timeListData.activeTime - The currently selected time.
 * @param {Function} timeListData.onSelectTime - Function to be called when a time slot is selected.
 *
 * @returns {JSX.Element} The rendered list of time slots.
 */
const TimeList: Component<TimeListProps> = (timeListData) => {
   return (
      <div>
         {timeListData.data?.map((timeData) => {
            return (
               <TimeSlot
                  DateISO={timeData.DateISO}
                  Capacity={timeData.Capacity}
                  OriginalCapacity={timeData.OriginalCapacity}
                  Time={timeData.Time}
                  activeTime={timeListData.activeTime}
                  onSelectTime={() => {
                     timeData.Capacity > 0 && timeListData.onSelectTime;
                  }}
               />
            );
         })}
      </div>
   );
};

export default TimeList;
