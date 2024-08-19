import { Component } from 'solid-js';
import { TimeSlotProps } from '@/stories/components/TimeSlot/interfaces';

import styles from './style.module.css';

export const TimeSlot: Component<TimeSlotProps> = (timeListData) => {
   return (
      <div
         onClick={() => {
            timeListData.Capacity > 0 && timeListData.onSelectTime();
         }}
         classList={{
            [styles.timeSlot]: true,
            [styles.timeSlotActive]: timeListData.isActive,
            [styles.timeSlotFull]: timeListData.Capacity === 0,
         }}
      >
         <div class={styles.capacity}>
            {timeListData.Capacity}/{timeListData.OriginalCapacity}
         </div>
         <div class={styles.time}>{timeListData.Time}</div>
      </div>
   );
};
