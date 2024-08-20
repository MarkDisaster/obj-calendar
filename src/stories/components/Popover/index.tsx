import { PopoverProps } from '@/stories/components/Popover/interfaces';
import { Component } from 'solid-js';

import styles from './style.module.css';

/**
 * Popover component that displays a text message when visible.
 *
 * @component
 * @param {PopoverProps} props - The props for the Popover component.
 * @param {boolean} props.isVisible - Determines if the popover should be visible.
 * @param {string} props.text - The text content to display inside the popover.
 * @returns {JSX.Element} A JSX element representing the popover.
 */

export const Popover: Component<PopoverProps> = (props) => {
   return (
      <>{props.isVisible && <div class={styles.popover}>{props.text}</div>}</>
   );
};

export default Popover;
