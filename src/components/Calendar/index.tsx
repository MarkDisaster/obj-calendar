import { Component, createMemo, createSignal } from 'solid-js';
import TimeList from '@/components/TimeList';

import mockData from '../../mockData.json';
import { findByDate } from '@/helpers/getDataByDate';
import { getUpdatedData } from '@/helpers/getUpdatedData';
import { getDatabyTime } from '@/helpers/getDataByTime';
import { getReplicatedData } from '@/helpers/getReplicatedData';
import NavigationBar from '@/components/Navigation';
import { generateDaysAheadFromNow } from '@/helpers/getGeneratedDaysAhedFromNow';
import { TIMESLOT } from '@/helpers/getUpdatedData/interfaces';

const Calendar: Component = () => {
   const getTodayDateISO = new Date().toISOString().split('T')[0];

   const [calendarData, setCalendarData] = createSignal(
      getReplicatedData(mockData.Data, 7),
   );
   const [daysGeneratedAhead] = createSignal(generateDaysAheadFromNow(7));
   const [navigationPage, setNavigationPage] = createSignal(1);
   const [selectedDate, setSelectedDate] = createSignal(getTodayDateISO);
   const [selectedTime, setSelectedTime] = createSignal('');

   console.log('calendarData', calendarData());

   const handleUpdateDataAndSelectTime = (
      date: string,
      timeSlotActive: TIMESLOT,
   ) => {
      setCalendarData(
         getUpdatedData(date, selectedTime(), calendarData(), timeSlotActive),
      );
      console.log(
         'tady',
         selectedTime(),
         date,
         getUpdatedData(date, selectedTime(), calendarData(), timeSlotActive),
      );
      setSelectedTime(selectedTime() !== date ? date : '');
   };

   // Memo, které reaguje na změny selectedDate a calendarData
   const currentCalendarData = createMemo(() => {
      const dataByDate = findByDate(selectedDate(), calendarData());
      const dataByTime = getDatabyTime(dataByDate);
      console.log('currentCalendarData', dataByTime); // Debugging line
      return dataByTime;
   });

   return (
      <div>
         <div>
            <NavigationBar
               page={navigationPage()}
               setNavigationPage={setNavigationPage}
               setSelectedDate={setSelectedDate}
               navigationPage={navigationPage()}
               daysGeneratedAhead={daysGeneratedAhead()}
            />
         </div>
         <TimeList
            data={currentCalendarData().data}
            date={currentCalendarData().date}
            onSelectTime={handleUpdateDataAndSelectTime}
            activeTime={selectedTime()}
         />
      </div>
   );
};

export default Calendar;
