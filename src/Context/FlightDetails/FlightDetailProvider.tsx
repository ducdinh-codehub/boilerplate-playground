import React, {
  useState,
  useEffect,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from 'react';
import FlightDetailContext from './FlightDetailContext';
export const FlightDetailProvider = (props: {
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = useState<boolean>(false);
  return (
    <FlightDetailContext.Provider
      value={{
        isOpenBottomSheet,
        setIsOpenBottomSheet,
      }}
    >
      {props.children}
    </FlightDetailContext.Provider>
  );
};
