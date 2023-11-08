import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import '../../../app/styles/index.scss';
import { PageError } from './PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'default',
    },
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

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
