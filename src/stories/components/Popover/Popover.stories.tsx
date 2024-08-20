import type { Meta, StoryObj } from 'storybook-solidjs';
import { Popover } from '@/stories/components/Popover';

const meta: Meta<typeof Popover> = {
   title: 'Components/Popover',
   component: Popover,
   tags: ['autodocs'],
   argTypes: {
      isVisible: {
         control: 'boolean',
         description: 'Determines whether the popover is visible.',
      },
      text: {
         control: 'text',
         description: 'Text displayed inside the popover.',
      },
   },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
   args: {
      isVisible: true,
      text: 'This is a popover!',
   },
};

export const Hidden: Story = {
   args: {
      isVisible: false,
      text: 'This is a popover!',
   },
};
