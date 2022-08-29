import * as React from "react";

type UseToggleReturnType = [boolean, () => void];

function useToggle(): UseToggleReturnType {
  const [hide, setHide] = React.useState(false);

  const toggle = () => {
    setHide(!hide);
  };

  return [hide, toggle];
}

export default useToggle;