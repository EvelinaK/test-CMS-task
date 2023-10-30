import styled from 'styled-components';

const handleColortype = (color, hover) => {
  switch (color) {
    case 'green':
      return hover ? 'rgba(66, 204, 88, 0.40)' : 'rgba(66, 204, 88, 0.15)';
    case 'blue':
      return hover ? 'rgba(73, 152, 238, 0.40)' : 'rgba(73, 152, 238, 0.15)';
    case 'red':
      return hover ? 'rgba(242, 93, 93, 0.40)' : 'rgba(242, 93, 93, 0.15)';
    case 'orange':
      return hover ? 'rgba(244, 167, 50, 0.40)' : 'rgba(244, 167, 50, 0.15)';
    case 'violet':
      return hover ? 'rgba(155, 83, 248, 0.40)' : 'rgba(155, 83, 248, 0.15)';
    default:
      return hover ? 'rgba(66, 204, 88, 0.40)' : 'rgba(66, 204, 88, 0.15)';
  }
};

export const StatisticsCardNumber = styled.div`
  font-size: 44px;
  line-height: 1.09;
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardContainer = styled.div`
  background-color: #5b627794;
  padding: 20px;
  border-radius: 8px;
  width: calc((100% - 80px) / 5);
  max-width: 335px;
  flex: 1;
  margin-bottom: 20px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 22px;
  width: 48px;
  height: 48px;
  padding: 12px;
  color: ${props => props.color ?? 'white'};
  background-color: ${props => handleColortype(props.color ?? 'black')};

  z-index: 0;
  transition: transform 0.3s ease-out;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
      0 16px 49px ${({ boxShadowColor }) => boxShadowColor};
    background-color: ${props =>
      handleColortype(props.color, 'hover' ?? 'black')};
  }
`;

export const StatisticsCardDescription = styled.div`
  font-weight: 18px;
  font-size: 13px;
  line-height: 1.23;
  color: #a2a4a8;
`;
