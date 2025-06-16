import React, { ReactElement, ReactNode, useState } from 'react';
import classes from './CompoundComponents.module.css';

interface TabsProps {
  children: ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  );
  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((item, index) => (
          <li
            key={index}
            className={`${index === activeTab ? classes.TabActive : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TabContent}>{tabElements[activeTab]}</p>
    </div>
  );
};

export default Tabs;
