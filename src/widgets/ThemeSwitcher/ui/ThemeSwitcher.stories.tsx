import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

('app/styles/index.scss');
('../../app/styles/index.scss');

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'default',
    },
    argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className="App dark">
                <Story />
            </div>
        ),
    ],
};
