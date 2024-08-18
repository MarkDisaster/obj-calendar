import { NavigationBarProps } from '@/components/Navigation/interfaces';
import { getPage } from '@/helpers/getPage';
import { Button } from '@/stories/components/Button';
import { Component } from 'solid-js';

/**
 * NavigationBar Component
 *
 * This component provides a navigation bar to paginate through a list of generated days.
 * It allows users to select a date and navigate between pages of dates.
 *
 * @component
 * @param {NavigationBarProps} props - The props for the NavigationBar component.
 * @param {number} props.page - The current page number of the navigation.
 * @param {number} props.navigationPage - The page number used for rendering the days.
 * @param {GeneratedDays[]} props.daysGeneratedAhead - The array of generated days to display in the navigation.
 * @param {(page: number) => void} props.setNavigationPage - Function to update the current page number.
 * @param {(date: string) => void} props.setSelectedDate - Function to update the selected date.
 * @param {number} props.totalPages - The total number of pages available.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const NavigationBar: Component<NavigationBarProps> = (props) => {
   /**
    * Renders a list of days for the current page.
    *
    * @function
    * @returns {JSX.Element[]} The list of day buttons for the current page.
    */
   const renderDays = () => {
      const paginatedDays = getPage(
         props.daysGeneratedAhead,
         props.navigationPage,
         2,
      );

      return paginatedDays.map((day) => {
         return (
            <Button
               onClick={() => props.setSelectedDate(day.date)}
               label={day.formattedDate}
            />
         );
      });
   };

   return (
      <div>
         <Button
            onClick={() => props.setNavigationPage(props.page - 1)}
            label="<"
            disabled={props.navigationPage <= 1}
         />
         <span>{renderDays()}</span>
         <Button
            onClick={() => props.setNavigationPage(props.page + 1)}
            label=">"
            disabled={renderDays().length <= 1}
         />
      </div>
   );
};

export default NavigationBar;
