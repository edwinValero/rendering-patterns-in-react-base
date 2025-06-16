import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
  Children,
  isValidElement,
  FC,
} from 'react';
import classes from './CompoundComponents.module.css';

// 1. Create the Context
interface TabsContextProps {
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

// Custom hook for consuming the context
const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a Tabs provider');
  }
  return context;
};

// 2. Create the Main Provider (Tabs)
interface TabsProps {
  children: ReactNode;
}

const Tabs: FC<TabsProps> & {
  TabList: FC<TabListProps>;
  Tab: FC<TabProps>;
  TabPanels: FC<TabPanelsProps>;
  TabPanel: FC<TabPanelProps>;
} = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={classes.Tabs}>{children}</div>
    </TabsContext.Provider>
  );
};

// 3. Create TabList and Tab
interface TabListProps {
  children: ReactNode;
}

const TabList: FC<TabListProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

interface TabProps {
  index: number;
  children: ReactNode;
}

const Tab: FC<TabProps> = ({ index, children }) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === index;

  return (
    <li
      className={`${isActive ? classes.TabActive : ''}`}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </li>
  );
};

// 4. Create TabPanels and TabPanel
interface TabPanelsProps {
  children: ReactNode;
}

const TabPanels: FC<TabPanelsProps> = ({ children }) => {
  const { activeTab } = useTabs();
  const panels = Children.toArray(children).filter(
    (child): child is ReactElement<TabPanelProps> =>
      isValidElement(child) && child.props.index !== undefined
  );

  const activePanel = panels.find((panel) => panel.props.index === activeTab);

  return <p className={classes.TabContent}>{activePanel}</p>;
};

interface TabPanelProps {
  index: number;
  children: ReactNode;
}

const TabPanel: FC<TabPanelProps> = ({ children }) => {
  return <>{children}</>;
};

// Assigning compound components
Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.TabPanel = TabPanel;

export default Tabs;
