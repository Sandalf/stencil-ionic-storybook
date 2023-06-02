const meta = {
    title: 'POC2/custom-badge',
    component: 'custom-badge',
};

export default meta;

/* Primary Badge */
const Template = (args) => `
    <custom-badge
        color=${args.color}>
        @ionic/core import
    </custom-badge>
`;

export const Primary = Template.bind({});

Primary.argTypes = {
    badgeContent: { control: 'text' },
    color: { control: 'select', options: ['error', 'warning', 'new', 'success'] },
};

Primary.args = {
    badgeContent: 'Some text',
    color: 'success',    
};
