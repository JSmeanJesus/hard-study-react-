import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import '../../../app/styles/index.scss';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'default',
    },
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Light: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ]
};