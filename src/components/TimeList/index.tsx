import { TimeListProps } from '@/components/TimeList/interfaces';
import { TimeSlot } from '@/stories/components/TimeSlot';
import { Component } from 'solid-js';

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
