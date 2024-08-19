import { Setter } from 'solid-js';

export interface GeneratedDays {
   date: string;
   formattedDate: string;
}

export interface NavigationBarProps {
   page: number;
   setNavigationPage: Setter<number>;
   selectedDate: string;
   setSelectedDate: Setter<string>;
   navigationPage: number;
   daysGeneratedAhead: GeneratedDays[];
}
