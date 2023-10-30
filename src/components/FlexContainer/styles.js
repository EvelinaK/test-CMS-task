import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-grow: ${props => props?.flexGrow};
  width: ${props => props?.width};
  height: ${props => props?.height};
  overflow: ${props => props?.overflow};
  position: ${props => props?.position};
  gap: ${props => (props.gap ? `${props.gap}px` : '0px')};
  transform: ${props => props?.transform};
`;

export const Container = styled.div`
  padding: 24px 32px 16px 32px;
`;
