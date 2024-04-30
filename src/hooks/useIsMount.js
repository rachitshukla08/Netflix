import { useEffect, useRef } from "react";

const useIsMount = () => {
  const isMount = useRef(true);
  useEffect(() => {
    isMount.current = false;
  }, []);

  return isMount;
};

export default useIsMount;
