import { useEffect, lazy, Suspense } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom';
import tabs from './tabs.json';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import LinearProgress from '@mui/material/LinearProgress';

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
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(sortedTabsData[0].id);
    }
  }, [location, navigate, sortedTabsData]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      {<LinearProgress color="inherit" />}
      <AppBar>
        {sortedTabsData.length && (
          <Tabs
            value={
              location.pathname !== '/'
                ? location.pathname
                : sortedTabsData[0]?.id
            }
            scrollButtons
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
          >
            {sortedTabsData.length &&
              sortedTabsData.map(tab => (
                <Tab
                  key={tab.id}
                  label={tab.title}
                  value={tab.id}
                  LinkComponent={Link}
                  to={`/${tab.id}`}
                />
              ))}
          </Tabs>
        )}
      </AppBar>
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
