import Tab from './Tab';
import Tabs from './Tabs';
import TabsContext from './TabsContext';

export const CompoundComponents = () => {
  return (
    <>
      <TabsContext>
        <TabsContext.TabList>
          <TabsContext.Tab index={0}>Lion</TabsContext.Tab>
          <TabsContext.Tab index={1}>Turtle</TabsContext.Tab>
          <TabsContext.Tab index={2}>Horse</TabsContext.Tab>
        </TabsContext.TabList>
        <TabsContext.TabPanels>
          <TabsContext.TabPanel index={0}>🦁</TabsContext.TabPanel>
          <TabsContext.TabPanel index={1}>🐢</TabsContext.TabPanel>
          <TabsContext.TabPanel index={2}>🐎</TabsContext.TabPanel>
        </TabsContext.TabPanels>
      </TabsContext>
      <Tabs>
        <Tab label='Lion'>🦁</Tab>
        <Tab label='Turtle'>🐢</Tab>
        <Tab label='Horse'>🐎</Tab>
      </Tabs>
    </>
  );
};
