import type { Meta, StoryObj } from '@storybook/react'
import { MemoryCard } from './MemoryCard'

const meta: Meta<typeof MemoryCard> = {
  title: 'Components/MemoryCard',
  component: MemoryCard,
  tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof MemoryCard>;

export const Primary: Story = {
  args: {
    title: 'Notatka do mnie',
    state: 'unlocked',
    textContent: 'To jest przykładowa treść kapsuły czasu.',
    openDate: new Date(),
    author: 'Jan'
  }
}
