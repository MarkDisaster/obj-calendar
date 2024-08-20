import { Component, createSignal } from 'solid-js';
import { TimeSlotProps } from '@/stories/components/TimeSlot/interfaces';

import styles from './style.module.css';
import Popover from '@/stories/components/Popover';

export const TimeSlot: Component<TimeSlotProps> = (timeListData) => {
   const [isPopoverVisible, setIsPopoverVisible] = createSignal(false);

   return (
      <div
         onClick={() => {
            (timeListData.Capacity > 0 || timeListData.isActive) &&
               timeListData.onSelectTime();
            if (timeListData.Capacity === 0 && !timeListData.isActive) {
               setIsPopoverVisible(true);

               const timeout = setTimeout(() => {
                  setIsPopoverVisible(false);
               }, 2000);

               return () => clearTimeout(timeout);
            }
         }}
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
