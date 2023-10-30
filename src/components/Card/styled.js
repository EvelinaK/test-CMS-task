import styled from 'styled-components';

export const Container = styled.div`
  flex: ${props => props.flex};
  padding: 45px 32px 16px 32px;
  border-radius: 4px;
  background-color: #242731;
  height: ${props => props.height + 'px' || '100%'};
`;
