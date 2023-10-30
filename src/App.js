import { useEffect, lazy, Suspense } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation,
} from 'react-router-dom';
import tabs from './tabs.json';
import { AppBar, Tab, Tabs, Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

import { styled } from '@mui/material';

const StyledTab = styled(Tab)(() => ({
  '&.MuiTab-root': {
    color: 'rgba(255, 255, 255, 0.6);',
    '&:hover': {
      color: '#8941ff',
      fontWeight: '600',
    },
  },
}));

const StyledTabs = styled(Tabs)({
  '&.MuiTabs-root': {
    opacity: 0.5,
  },
});

export const StyledAppBar = styled(AppBar)`
  color: white;
  position: initial;
  margin-bottom: 40px;
  background-color: #262431;
`;

const App = () => {
  const sortedTabsData = [...tabs].sort((a, b) => a.order - b.order);

  function LazyComponent({ path }) {
    const changePath = path.replace(/\.[^.]+$/, '.jsx');

    const TabContent = lazy(() => import(`../src/${changePath}`));

    return (
      <Suspense fallback={<LinearProgress />}>
        <TabContent />
      </Suspense>
    );
  }

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(sortedTabsData[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(sortedTabsData[0].id);
    }
  }, [location, navigate, sortedTabsData]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {<LinearProgress color="inherit" />}
      <StyledAppBar>
        {sortedTabsData.length && (
          <StyledTabs
            value={
              location.pathname !== '/'
                ? location.pathname
                : sortedTabsData[0]?.id
            }
            scrollButtons
          >
            {sortedTabsData.length &&
              sortedTabsData.map(tab => (
                <StyledTab
                  key={tab.id}
                  label={tab.title}
                  value={tab.id}
                  LinkComponent={Link}
                  to={`/${tab.id}`}
                />
              ))}
          </StyledTabs>
        )}
      </StyledAppBar>
      <Routes>
        {sortedTabsData.length &&
          sortedTabsData.map(tab => (
            <Route
              key={tab.id}
              path={`${tab.id}`}
              element={<LazyComponent path={tab.path} />}
            />
          ))}
        <Route
          path="*"
          element={<LazyComponent path={sortedTabsData[0].path} />}
        />
      </Routes>
    </Box>
  );
};

export default App;
