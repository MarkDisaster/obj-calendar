import { Component, createSignal } from 'solid-js';
import { TimeSlotProps } from '@/stories/components/TimeSlot/interfaces';
import Popover from '@/stories/components/Popover';

import styles from './style.module.css';

/**
 * TimeSlot component represents a selectable time slot with capacity and availability status.
 *
 * @component
 * @param {TimeSlotProps} timeListData - The data for the time slot including time, capacity, and selection status.
 * @returns {JSX.Element} A JSX element representing a time slot.
 */

export const TimeSlot: Component<TimeSlotProps> = (timeListData) => {
   const [isPopoverVisible, setIsPopoverVisible] = createSignal(false);

   /**
    * Handles the click event on the time slot.
    * If the slot is available or active, it triggers the selection handler.
    * If the slot is full and not active, it shows a popover notification.
    */
   const handleOnClickPopover = () => {
      (timeListData.Capacity > 0 || timeListData.isActive) &&
         timeListData.onSelectTime();
      if (timeListData.Capacity === 0 && !timeListData.isActive) {
         setIsPopoverVisible(true);

         const timeout = setTimeout(() => {
            setIsPopoverVisible(false);
         }, 2000);

         return () => clearTimeout(timeout);
      }
   };

   return (
      <div
         onClick={handleOnClickPopover}
         classList={{
            [styles.timeSlot]: true,
            [styles.timeSlotActive]: timeListData.isActive,
            [styles.timeSlotFull]:
               timeListData.Capacity === 0 && !timeListData.isActive,
         }}
      >
         <Popover
            isVisible={isPopoverVisible()}
            text="Kapacita zaplněna, zvolte jiný termín"
         />
         <div class={styles.capacity}>
            {timeListData.Capacity}/{timeListData.OriginalCapacity}
         </div>
         <div class={styles.time}>{timeListData.Time}</div>
      </div>
   );
};
