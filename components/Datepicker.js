import { useState } from "react";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";

const Picker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DayPickerInput
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default Picker;
