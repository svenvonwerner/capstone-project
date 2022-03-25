import ChallengeCard from './ChallengeCard.js';

export default {
  title: 'components/ChallengeCard',
  component: ChallengeCard,
};

const Template = args => <ChallengeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  headlineCard: '1000 Schritte',
  descriptionCard: 'Gehe 1000 Schritte von Deiner Haustür und mache ein Foto',
};

export const LongText = Template.bind({});
LongText.args = {
  headlineCard: '1000 Schritte',
  descriptionCard:
    'Gehe 1000 Schritte von Deiner Haustür und mache ein Foto. Gebraucht wird für diese Challenge folgende Ausrüstung:',
};
