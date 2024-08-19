import { TimeListProps } from '@/components/TimeList/interfaces';
import { TimeSlot } from '@/stories/components/TimeSlot';
import { Component, createMemo } from 'solid-js';

import styles from './style.module.css';

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
      <div class={styles.timeList}>
         {timeListData.data?.map((timeData) => {
            const isTimeSlotActive = createMemo(() =>
               timeData.DateISO === timeListData.activeTime ? true : false,
            );
            const handleOnSelectTime = () =>
               timeListData.onSelectTime(timeData.DateISO, isTimeSlotActive());

            return (
               <TimeSlot
                  DateISO={timeData.DateISO}
                  Capacity={timeData.Capacity}
                  OriginalCapacity={timeData.OriginalCapacity}
                  Time={timeData.Time}
                  activeTime={timeListData.activeTime}
                  onSelectTime={handleOnSelectTime}
                  isActive={isTimeSlotActive()}
               />
            );
         })}
      </div>
   );
};

export default TimeList;
