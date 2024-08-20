import { NavigationBarProps } from '@/components/Navigation/interfaces';
import { getPage } from '@/helpers/getPage';
import { Button } from '@/stories/Button';
import { Component } from 'solid-js';

import styles from './style.module.css';
import { useRenderDays } from '@/hooks/useRenderDays';

/**
 * A navigation bar component for paginating and displaying days.
 *
 * This component provides navigation controls to paginate through an array of `GeneratedDays` objects.
 * It uses the `getPage` function to retrieve the days for the current page and `useRenderDays` to render them.
 *
 * @param {NavigationBarProps} props - The properties for the navigation bar component.
 * @param {number} props.page - The total number of pages available (used to handle button states).
 * @param {Setter<number>} props.setNavigationPage - Function to update the current page number.
 * @param {string} props.selectedDate - The currently selected date.
 * @param {Setter<string>} props.setSelectedDate - Function to update the selected date.
 * @param {number} props.navigationPage - The current page number for navigation.
 * @param {GeneratedDays[]} props.daysGeneratedAhead - An array of `GeneratedDays` objects to paginate.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 *
 * @example
 * <NavigationBar
 *   page={5}
 *   setNavigationPage={(page) => console.log('New page:', page)}
 *   selectedDate="2024-01-01"
 *   setSelectedDate={(date) => console.log('Selected date:', date)}
 *   navigationPage={1}
 *   daysGeneratedAhead={[
 *   { date: '2024-01-01', formattedDate: 'Dnes 20.8.' },
 *   { date: '2024-01-02', formattedDate: 'Zítra 21.8.' },
 *   { date: '2024-01-03', formattedDate: 'čt 22.8.' },
 *   // ... more GeneratedDays items
 * ]}
 * />
 */

const NavigationBar: Component<NavigationBarProps> = (props) => {
   const paginatedDays = () =>
      getPage(props.daysGeneratedAhead, props.navigationPage, 2);

   const renderDays = () =>
      useRenderDays(paginatedDays(), props.setSelectedDate, props.selectedDate);

   return (
      <div class={styles.navigation}>
         <Button
            onClick={() => props.setNavigationPage(props.page - 1)}
            label="<"
            disabled={props.navigationPage <= 1}
         />
         {renderDays()}
         <Button
            onClick={() => props.setNavigationPage(props.page + 1)}
            label=">"
            disabled={renderDays().length <= 1}
         />
      </div>
   );
};

export default NavigationBar;
