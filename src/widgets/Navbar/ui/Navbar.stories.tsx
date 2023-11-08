import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import '../../../app/styles/index.scss';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'default',
    },
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

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
