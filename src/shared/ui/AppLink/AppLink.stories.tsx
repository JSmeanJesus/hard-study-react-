import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

'app/styles/index.scss';
'../../app/styles/index.scss';

const meta = {
    title: 'ui/AppLink',
    component: AppLink,
    parameters: {
        layout: 'default',
    },
    argTypes: {
        
    },
    args: {
        to: '/',
    }
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Test',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Test',
        theme: 'primary',
    },
    decorators: [
        (Story) => (
            <div className='App dark'>
                <Story />
            </div>
        ),
    ],
};


export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'Test',
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'Test',
        theme: 'secondary',
    },
    decorators: [
        (Story) => (
            <div className='App dark'>
                <Story />
            </div>
        ),
    ],
};