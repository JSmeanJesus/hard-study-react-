import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
import '../../../app/styles/index.scss';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'default',
    },
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Base: Story = {
    args: {
        children: 'Test',
    },
};

export const Clear: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.CLEAR,
    },
};
  
export const Outline: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        (Story) => (
            <div className="App light">
                <Story />
            </div>
        ),
    ]
   
};
  
export const OutlineDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
   
};
  