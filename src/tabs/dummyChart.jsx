import Chart from '../components/Chart/index';
import Flex from '../components/FlexContainer/index';

import DashboardCard from '../components/Card/index';
import { Box, Typography, styled } from '@mui/material';

const mockChartData = [
  { blue: 8, red: 6, green: 4, date: '2023-02-08' },
  { blue: 5, red: 3, green: 2, date: '2023-02-09' },
  { blue: 9, red: 7, green: 3, date: '2023-02-10' },
  { blue: 29, red: 27, green: 24, date: '2023-02-11' },
  { blue: 15, red: 13, green: 10, date: '2023-02-12' },
  { blue: 11, red: 9, green: 7, date: '2023-02-13' },
  { blue: 22, red: 20, green: 17, date: '2023-02-14' },
  { blue: 8, red: 7, green: 4, date: '2023-02-15' },
  { blue: 19, red: 17, green: 13, date: '2023-02-16' },
  { blue: 17, red: 12, green: 14, date: '2023-02-17' },
  { blue: 7, red: 4, green: 6, date: '2023-02-18' },
];
const mockValues = {
  blue: true,
  green: true,
  orange: false,
  red: true,
  violet: false,
};

const TypographyContainer = styled(Typography)`
  padding: 0 12px 12px 0px;
  font-size: 18px;
  font-weight: 600;
  color: rgb(255, 255, 255);
`;

const DummyChart = () => (
  <DashboardCard height={400}>
    <Flex column>
      <Box display="flex" alignItems="center">
        <TypographyContainer variant="h4" alignItems="center">
          General Chart
        </TypographyContainer>
      </Box>

      <Flex>
        <Flex flexGrow={1} height="400px">
          <Chart data={mockChartData} value={mockValues} />
        </Flex>
      </Flex>
    </Flex>
  </DashboardCard>
);

export default DummyChart;
