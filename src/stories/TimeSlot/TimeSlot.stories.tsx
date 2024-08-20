import { Meta, StoryObj } from 'storybook-solidjs';
import { TimeSlot } from '@/stories/TimeSlot';
import { TimeSlotProps } from '@/stories/TimeSlot/interfaces';

const meta: Meta<typeof TimeSlot> = {
   title: 'Components/TimeSlot',
   component: TimeSlot,
   argTypes: {
      Capacity: { control: 'number' },
      OriginalCapacity: { control: 'number' },
      Time: { control: 'text' },
      DateISO: { control: 'text' },
      isActive: { control: 'boolean' },
      onSelectTime: { action: 'selected' },
   },
};

export default meta;
type Story = StoryObj<typeof TimeSlot>;

export const Default: Story = {
   args: {
      Capacity: 2,
      OriginalCapacity: 5,
      Time: '10:00',
      DateISO: '2024-08-20T10:00',
      isActive: false,
   } as TimeSlotProps,
};

export const FullCapacity: Story = {
   args: {
      Capacity: 0,
      OriginalCapacity: 5,
      Time: '10:00',
      DateISO: '2024-08-20T10:00',
      isActive: false,
   } as TimeSlotProps,
};

export const ActiveSlot: Story = {
   args: {
      Capacity: 2,
      OriginalCapacity: 5,
      Time: '10:00',
      DateISO: '2024-08-20T10:00',
      isActive: true,
   } as TimeSlotProps,
};

export const NoCapacityButActive: Story = {
   args: {
      Capacity: 0,
      OriginalCapacity: 5,
      Time: '10:00',
      DateISO: '2023-08-13',
      isActive: true,
   } as TimeSlotProps,
};
