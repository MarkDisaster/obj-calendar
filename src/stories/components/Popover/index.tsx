import { PopoverProps } from '@/stories/components/Popover/interfaces';
import { Component } from 'solid-js';

import styles from './style.module.css';

export const Popover: Component<PopoverProps> = (props) => {
   return (
      <>{props.isVisible && <div class={styles.popover}>{props.text}</div>}</>
   );
};

export default Popover;
