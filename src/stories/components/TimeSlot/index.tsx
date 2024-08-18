import { Component } from 'solid-js';
import {
   TIMESLOT,
   TimeSlotProps,
} from '@/stories/components/TimeSlot/interfaces';

import styles from './style.module.css';

export const TimeSlot: Component<TimeSlotProps> = (timeListData) => {
   const capacityChange =
      timeListData.DateISO === timeListData.activeTime
         ? TIMESLOT.ACTIVE
         : TIMESLOT.INACTIVE;
   return (
      //{`time-slot ${timeListData.DateISO === timeListData.activeTime ? 'full' : ''}`}
      <div
         class={styles.timeSlot}
         onClick={() => {
            timeListData.Capacity > 0 &&
               timeListData.onSelectTime(timeListData.DateISO, capacityChange);
         }}
      >
         <div>
            {timeListData.Capacity}/{timeListData.OriginalCapacity}
         </div>
         <div>{timeListData.Time}</div>
      </div>
   );
};
