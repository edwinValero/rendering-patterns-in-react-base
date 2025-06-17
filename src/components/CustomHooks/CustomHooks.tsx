import { useState } from 'react';

function useLoading(initialLoagind: boolean) {
  const [isLoading, setLoading] = useState(initialLoagind);
  return { isLoading, setLoading };
}

type UserProps = {
  name: string;
};

const UserComponent: React.FC<UserProps> = ({ name }) => {
  const { isLoading, setLoading } = useLoading(false);

  if (isLoading) return <div>Loading ...</div>;
  return (
    <div>
      <p>{`Hello ${name} !!`}</p>
      <button onClick={() => setLoading(true)}>Simulate loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name='Edw Val test' />;
};
