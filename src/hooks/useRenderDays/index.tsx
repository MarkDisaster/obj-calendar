import { GeneratedDays } from '@/hooks/useRenderDays/interfaces';
import { Button } from '@/stories/Button';
import { Setter } from 'solid-js';

/**
 * Renders a list of buttons representing days from a paginated list.
 *
 * This function maps over an array of `GeneratedDays` and returns a list of `Button` components.
 * Each button represents a day and allows the user to select a day by clicking on it.
 * The button for the currently selected date is styled with a different background color.
 *
 * @param {GeneratedDays[]} paginatedDays - An array of `GeneratedDays` objects to render as buttons.
 * @param {Setter<string>} setSelectedDate - A function to update the selected date state.
 * @param {string} selectedDate - The currently selected date, used to determine the styling of the buttons.
 * @returns {JSX.Element[]} An array of `Button` components representing each day in the `paginatedDays` array.
 *
 * @example
 * const paginatedDays = [
 *   { date: '2024-08-19', formattedDate: 'Dnes 19.8.' },
 *   { date: '2024-08-20', formattedDate: 'Zítra 20.8.' },
 * ];
 * const selectedDate = '2024-08-20';
 * const setSelectedDate = (date: string) => { console.log(date); };
 * const buttons = useRenderDays(paginatedDays, setSelectedDate, selectedDate);
 * // `buttons` will be an array of Button components with appropriate labels and styles.
 */

export const useRenderDays = (
   paginatedDays: GeneratedDays[],
   setSelectedDate: Setter<string>,
   selectedDate: string,
) => {
   return paginatedDays.map((day) => {
      return (
         <Button
            onClick={() => setSelectedDate(day.date)}
            label={day.formattedDate}
            backgroundColor={selectedDate === day.date ? '#d3a245' : ''}
         />
      );
   });
};
