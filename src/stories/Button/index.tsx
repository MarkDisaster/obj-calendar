import { Component, mergeProps, splitProps } from 'solid-js';
import './button.css';
import { ButtonProps } from '@/stories/Button/interfaces';

/**
 * Primary UI component for user interaction
 *
 * @component
 * @param {ButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} A JSX element representing the button.
 */

export const Button: Component<ButtonProps> = (props) => {
   props = mergeProps({ size: 'small' as ButtonProps['size'] }, props);
   const [local, rest] = splitProps(props, [
      'primary',
      'size',
      'backgroundColor',
      'label',
   ]);

   return (
      <button
         disabled={false}
         {...rest}
         type="button"
         classList={{
            'storybook-button--small': local.size === 'small',
            'storybook-button--medium': local.size === 'medium',
            'storybook-button--large': local.size === 'large',
            'storybook-button': true,
            'storybook-button--primary': local.primary === true,
            'storybook-button--secondary': local.primary === false,
         }}
         style={{ 'background-color': local.backgroundColor }}
      >
         {local.label}
      </button>
   );
};
