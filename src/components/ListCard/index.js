import React from 'react';
import Flex from '../../components/FlexContainer';
import {
  Container,
  Icon,
  StatisticsCardDescription,
  StatisticsCardNumber,
  CardContainer,
} from './styles';

const DaschboardCardStatistics = ({ icon, statistic = 0, children, color }) => {
  return (
    <CardContainer>
      <Flex align="center" justify="center">
        <Icon color={color}>{icon}</Icon>
        <Container>
          <StatisticsCardNumber>{statistic}</StatisticsCardNumber>
          <StatisticsCardDescription>{children}</StatisticsCardDescription>
        </Container>
      </Flex>
    </CardContainer>
  );
};

export default DaschboardCardStatistics;
