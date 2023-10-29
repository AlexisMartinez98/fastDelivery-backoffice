import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface CalendarProps {
  setDeadline: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      props.setDeadline(date.toLocaleDateString());
    } else {
      props.setDeadline("");
    }
  };

  const filterDate = (date: Date | null) => {
    if (!date) {
      return false;
    }
    const dateNow = new Date();
    dateNow.setHours(0, 0, 0, 0);
    return date >= dateNow;
  };

  return (
    <div className="flex items-center placeholder-[#3D1DF3] text-sm border rounded-xl px-3 py-2 mt-1 focus:outline-none border-[#3D1DF3]">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yy"
        placeholderText="00/00/00"
        isClearable={false}
        className="placeholder-[#3D1DF3] w-full"
        filterDate={filterDate}
        aria-label="datePicker"
      />
      <svg
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="datePicker"
      >
        <path
          d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
          fill="#3D1DF3"
        />
      </svg>
    </div>
  );
};

export default Calendar;
