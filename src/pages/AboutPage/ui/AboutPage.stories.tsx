import type { Meta, StoryObj } from '@storybook/react';
import AboutPage  from './AboutPage';

'app/styles/index.scss';
'../../app/styles/index.scss';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
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
            <div className='App dark'>
                <Story />
            </div>
        ),
    ],
};