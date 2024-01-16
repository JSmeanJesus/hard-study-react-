// to do 

import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

'app/styles/index.scss';
'../../app/styles/index.scss';

const meta = {
    title: 'smth/Modal',
    component: Modal,
    parameters: {
        layout: 'default',
    },
    argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Test'
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Test'
    },
    decorators: [
        (Story) => (
            <div className='App dark'>
                <Story />
            </div>
        ),
    ],
};