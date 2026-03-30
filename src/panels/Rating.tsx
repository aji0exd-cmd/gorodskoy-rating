import { Panel, PanelHeader, Group, Header, Cell } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

export const Rating = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>🏆 Рейтинг города</PanelHeader>

      <Group header={<Header size="s">ТОП заведений</Header>}>
        <Cell>🥇 Кафе Центральное — 4.82</Cell>
        <Cell>🥈 Coffee Time — 4.71</Cell>
        <Cell>🥉 Вкусный Дом — 4.63</Cell>
      </Group>
    </Panel>
  );
};

Rating.propTypes = {
  id: PropTypes.string.isRequired,
};