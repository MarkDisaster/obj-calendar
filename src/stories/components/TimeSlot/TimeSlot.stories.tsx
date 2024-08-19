import { TimeSlot } from '@/stories/components/TimeSlot';
import { TimeSlotProps } from '@/stories/components/TimeSlot/interfaces';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<TimeSlotProps> = {
   title: 'Components/TimeSlot',
   component: TimeSlot,
   argTypes: {
      DateISO: { control: 'text' },
      activeTime: { control: 'text' },
      isActive: { control: 'boolean' },
      Capacity: { control: 'number' },
      OriginalCapacity: { control: 'number' },
      Time: { control: 'text' },
      onSelectTime: { action: 'selected' },
   },
};

export default meta;
type Story = StoryObj<TimeSlotProps>;

export const Default: Story = {
   args: {
      DateISO: '2024-08-13T12:00:00Z',
      activeTime: '12:00 - 13:00',
      isActive: true,
      Capacity: 2,
      OriginalCapacity: 2,
      Time: '12:00',
      onSelectTime: () => console.log('Time selected'),
   },
};
