import React from 'react';

type ChildComponentProps = {
  render: (name: string) => React.JSX.Element;
};

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = 'Edw Val';
  return <div>{render(name)}</div>;
};

export const ParentComponent = () => {
  return <ChildComponent render={(name) => <p>Hello {name}!</p>} />;
};
