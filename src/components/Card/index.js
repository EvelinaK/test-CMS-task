import React from 'react';
import { Container } from './styled';

const DashboardCard = ({ flex, height, children }) => {
  const styles = {
    flex,
    height,
    children,
  };
  return <Container {...styles}>{children}</Container>;
};

export default DashboardCard;
