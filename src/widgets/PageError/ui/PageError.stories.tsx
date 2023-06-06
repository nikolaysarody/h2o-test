import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from 'widgets/PageError/ui/PageError';

const meta: Meta<typeof PageError> = {
    title: 'pages/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Default: Story = {};
