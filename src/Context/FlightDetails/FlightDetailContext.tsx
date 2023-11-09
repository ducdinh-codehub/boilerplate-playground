import { createContext } from 'react';
import { FlightDetailType } from './type';

const FlightDetailContext = createContext<FlightDetailType>(
  {} as FlightDetailType,
);

export default FlightDetailContext;
