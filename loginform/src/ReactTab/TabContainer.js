import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTab } from './TabSlice';
import { Tabs, Tab, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TabForm from './TabForm';

const TabContainer = () => {
  const tabs = useSelector(state => state.tabs);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCloseTab = (tabId) => {
    dispatch(removeTab(tabId));
    setActiveTab((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleTabChange}>
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {tab.label}
                <IconButton size="small" onClick={() => handleCloseTab(tab.id)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            }
          />
        ))}
      </Tabs>
      <Box p={2}>{tabs[activeTab] && <TabForm />}</Box>
    </Box>
  );
};

export default TabContainer;
