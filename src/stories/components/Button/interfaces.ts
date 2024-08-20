export interface ButtonProps {
   /**
    * Whether the button is styled as primary
    * @type {boolean}
    */
   primary?: boolean;

   /**
    * Background color for the button
    * @type {string}
    */
   backgroundColor?: string;

   /**
    * Size of the button
    * @type {'small' | 'medium' | 'large'}
    */
   size?: 'small' | 'medium' | 'large';

   /**
    * Label text for the button
    * @type {string}
    * @required
    */
   label: string;

   /**
    * Optional click handler
    * @type {() => void}
    */
   onClick?: () => void;

   /**
    * Whether the button is disabled
    * @type {boolean}
    */
   disabled?: boolean;
}
