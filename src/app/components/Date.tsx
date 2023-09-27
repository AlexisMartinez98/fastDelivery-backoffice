"use client";
import React, { useEffect, useState } from "react";

interface DateCarouselProps {
  selectedDate: Date;
  onDateChange: (newDate: Date) => void;
}

const DateCarousel: React.FC<DateCarouselProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState<Date[]>([]);

  const nextDay = () => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
  };

  const prevDay = () => {
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    setCurrentDate(yesterday);
  };

  const generateDates = () => {
    const generatedDates: Date[] = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i - 2);
      generatedDates.push(date);
    }
    setDates(generatedDates);
  };

  const handleDateClick = (date: Date) => {
    onDateChange(date);
  };

  useEffect(() => {
    generateDates();
  }, [currentDate]);

  return (
    <div className="rounded-md  ">
      <div className="grid grid-cols-7 gap-2 rounded-xl ">
        <button onClick={prevDay} className="text-[#3D1DF3] ml-6 font-bold">
          <svg
            width="19"
            height="15"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.920905 7.26799C0.441523 6.86821 0.441523 6.13179 0.920904 5.73201L5.10953 2.2389C5.7608 1.69578 6.75 2.15888 6.75 3.00689L6.75 9.99311C6.75 10.8411 5.7608 11.3042 5.10954 10.7611L0.920905 7.26799Z"
              fill="#3D1DF3"
            />
            <path
              d="M8.9209 7.26799C8.44152 6.86821 8.44152 6.13179 8.9209 5.73201L13.1095 2.2389C13.7608 1.69578 14.75 2.15888 14.75 3.00689L14.75 9.99311C14.75 10.8411 13.7608 11.3042 13.1095 10.7611L8.9209 7.26799Z"
              fill="#3D1DF3"
            />
          </svg>
        </button>

        {dates.map((date, index) => (
          <button
            key={index}
            className={`${
              date.toDateString() === selectedDate.toDateString()
                ? "bg-[#C7FFB1] "
                : "bg-gray-100"
            } p-2 rounded-xl text-center w-12 h-16 border-[1px] border-[#3D1DF3]`}
            onClick={() => handleDateClick(date)}
          >
            <div className="text-xs font-semibold">
              {date.toLocaleDateString("es-ES", { weekday: "short" })}
            </div>
            <div className="text-lg font-bold">
              {date.toLocaleDateString("es-ES", { day: "numeric" })}
            </div>
          </button>
        ))}
        <button onClick={nextDay} className=" ml-2 font-bold text-[#3D1DF3]">
          <svg
            width="19"
            height="15"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0791 5.73201C15.5585 6.13179 15.5585 6.86821 15.0791 7.26799L10.8905 10.7611C10.2392 11.3042 9.25 10.8411 9.25 9.99311L9.25 3.00689C9.25 2.15888 10.2392 1.69578 10.8905 2.2389L15.0791 5.73201Z"
              fill="#3D1DF3"
            />
            <path
              d="M8.0791 5.73201C8.55848 6.13179 8.55848 6.86821 8.0791 7.26799L3.89047 10.7611C3.23921 11.3042 2.25 10.8411 2.25 9.99311L2.25 3.00689C2.25 2.15888 3.2392 1.69578 3.89046 2.2389L8.0791 5.73201Z"
              fill="#3D1DF3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DateCarousel;
