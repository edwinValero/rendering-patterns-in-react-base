import { useState } from 'react';

type ToogleComponentProps = {
  isToggled?: boolean;
  onToggle?: (toggle: boolean) => void;
};

const ToggleComponent: React.FC<ToogleComponentProps> = ({
  isToggled = false,
  onToggle,
}) => {
  const [internalToggle, setInternalToggle] = useState<boolean>(isToggled);

  const toggle = () => {
    const newToggle = !internalToggle;
    setInternalToggle(newToggle);
    if (onToggle) onToggle(newToggle);
  };
  return (
    <button onClick={toggle}>{internalToggle ? 'ON ✅' : 'OFF 📴'}</button>
  );
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = useState<boolean>(false);
  return (
    <div>
      <p>{`Toggle is ${toggleState ? 'ON 🐉' : 'OFF 🐼'}`}</p>
      <ToggleComponent isToggled={toggleState} onToggle={setToggleState} />
    </div>
  );
};
