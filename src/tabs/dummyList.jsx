import DashboardCard from '../components/Card/index';
import DaschboardCardStatistics from '../components/ListCard/index';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import HttpsIcon from '@mui/icons-material/Https';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Box, Typography, styled } from '@mui/material';
import Flex from '../components/FlexContainer/index';

const mockDataList = {
  compute_resources: 35,
  games: 21,
  iam_policies: 72,
  iam_roles: 91,
  iam_users: 14,
};

const TypographyContainer = styled(Typography)`
  padding: 0 12px 12px 0px;
  font-size: 18px;
  font-weight: 600;
  color: rgb(255, 255, 255);
`;

const DummyList = () => (
  <DashboardCard height={400}>
    <Flex column>
      <Box display="flex" alignItems="center">
        <TypographyContainer variant="h4" alignItems="center">
          General List
        </TypographyContainer>
      </Box>
      <Flex wrap="wrap">
        <DaschboardCardStatistics
          icon={<PersonOutlineIcon />}
          color="green"
          statistic={mockDataList.iam_users}
        >
          IAM Users
        </DaschboardCardStatistics>

        <DaschboardCardStatistics
          icon={<SettingsIcon />}
          color="blue"
          statistic={mockDataList.iam_roles}
        >
          IAM Roles
        </DaschboardCardStatistics>

        <DaschboardCardStatistics
          icon={<HttpsIcon />}
          color="red"
          statistic={mockDataList.iam_policies}
        >
          IAM Policies
        </DaschboardCardStatistics>

        <DaschboardCardStatistics
          icon={<CropRotateIcon />}
          color="orange"
          statistic={mockDataList.compute_resources}
        >
          Compute Resources
        </DaschboardCardStatistics>

        <DaschboardCardStatistics
          icon={<SportsEsportsIcon />}
          color="violet"
          statistic={mockDataList.games}
        >
          Games
        </DaschboardCardStatistics>
      </Flex>
    </Flex>
  </DashboardCard>
);

export default DummyList;
