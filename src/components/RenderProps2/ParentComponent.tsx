import { useState } from 'react';

type ParentComponentProps = {
  render: (data: string[]) => React.ReactNode;
};

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
  const [list] = useState<string[]>(['Banana 🍌', 'Apple 🍎', 'Orange 🍊']);
  return <ul>{render(list)}</ul>;
};

export default ParentComponent;
