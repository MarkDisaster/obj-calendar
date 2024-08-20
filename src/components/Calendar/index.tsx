import { Component, createMemo, createSignal } from 'solid-js';
import TimeList from '@/components/TimeList';
import mockData from '../../mockData.json';
import { findByDate } from '@/helpers/getDataByDate';
import { getUpdatedData } from '@/helpers/getUpdatedData';
import { getDatabyTime } from '@/helpers/getDataByTime';
import { getReplicatedData } from '@/helpers/getReplicatedData';
import NavigationBar from '@/components/Navigation';
import { generateDaysAheadFromNow } from '@/helpers/getGeneratedDaysAhedFromNow';

/**
 * Calendar Component
 *
 * This component represents a calendar interface that allows users to select a date
 * and time slot. It provides functionality for navigating between different dates and
 * viewing available time slots for the selected date.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Calendar component.
 */
const Calendar: Component = () => {
   const getTodayDateISO = new Date().toLocaleDateString('sv-SE');

   const [calendarData, setCalendarData] = createSignal(
      getReplicatedData(mockData.Data, 7),
   );
   const [daysGeneratedAhead] = createSignal(generateDaysAheadFromNow(7));
   const [navigationPage, setNavigationPage] = createSignal(1);
   const [selectedDate, setSelectedDate] = createSignal(getTodayDateISO);
   const [selectedTime, setSelectedTime] = createSignal('');

   /**
    * Handles the selection of a time slot and updates the calendar data accordingly.
    *
    * @param {string} date - The selected date.
    */

   const handleUpdateDataAndSelectTime = (
      date: string,
      timeSlotActive: boolean,
   ) => {
      setCalendarData(
         getUpdatedData(date, selectedTime(), calendarData(), timeSlotActive),
      );

      setSelectedTime(selectedTime() !== date ? date : '');
   };

   const currentCalendarData = createMemo(() => {
      const dataByDate = findByDate(selectedDate(), calendarData());
      const dataByTime = getDatabyTime(dataByDate);

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
               selectedDate={selectedDate()}
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
