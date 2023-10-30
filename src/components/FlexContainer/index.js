import React from 'react';
import { FlexContainer } from './styles';

const Flex = ({
  children,
  column,
  align,
  justify,
  flexGrow,
  width,
  height,
  overflow,
  position,
  gap,
  wrap,
  transform,
  onChange,
}) => {
  const styles = {
    children,
    column,
    align,
    justify,
    flexGrow,
    width,
    height,
    overflow,
    position,
    gap,
    wrap,
    transform,
  };

  return (
    <FlexContainer {...styles} onChange={onChange}>
      {children}
    </FlexContainer>
  );
};

export default Flex;
