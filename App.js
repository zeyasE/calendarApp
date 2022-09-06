import { useState } from 'react';
import RoutesApp from './src/routes';
import Provider from './src/provider';
import CurrentDate from './src/store';

export default function App() {
  const [isDate, setIsDate] = useState(CurrentDate);
  const increaseMonth = () => setIsDate(() => {
    if (isDate.month === 12) {
      return setIsDate({ month: 1, year: isDate.year + 1 })
    }
    return setIsDate({ month: isDate.month + 1, year: isDate.year })
  })
  const decreaseMonth = () => setIsDate(() => {
    if (isDate.month === 1) {
      return setIsDate({ month: 12, year: isDate.year - 1 })
    }
    return setIsDate({ month: isDate.month - 1, year: isDate.year })
  })
  return (
    <Provider value={{isDate, increaseMonth, decreaseMonth}}>
      <RoutesApp />
    </Provider>
  );
}
