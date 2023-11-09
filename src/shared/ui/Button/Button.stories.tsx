import type { Meta, StoryObj } from '@storybook/react';
import { Button, SizeButton, ThemeButton } from './Button';
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

export const Background: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
    },
    decorators: [
        (Story) => (
            <div className="App light">
                <Story />
            </div>
        ),
    ]
   
};
  
export const BackgroundDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
   
};
  

export const InvertedBackground: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.INVERTED_BACKGROUND,
    },
    decorators: [
        (Story) => (
            <div className="App light">
                <Story />
            </div>
        ),
    ]
   
};
  
export const InvertedBackgroundDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.INVERTED_BACKGROUND,
    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
};
  

export const SquareM: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.M,
    },
    decorators: [
        (Story) => (
            <div className="App light">
                <Story />
            </div>
        ),
    ]
   
};
  
export const SquareMDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.M,
    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
   
};
  
export const SquareL: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.L,
    },
    decorators: [
        (Story) => (
            <div className="App light">
                <Story />
            </div>
        ),
    ]
   
};
  
export const SquareXLDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.L,
    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
   
};
  
export const SquareXL: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.XL,
    },
    decorators: [
        (Story) => (
            <div className="App light">
                <Story />
            </div>
        ),
    ]
   
};
  
export const SquareLDark: Story = {
    args: {
        children: 'Test',
        theme: ThemeButton.BACKGROUND,
        square: true,
        size: SizeButton.XL,
    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
   
};
  