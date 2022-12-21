import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export default function SubComponentsPickers() {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  console.log(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
        date={date}
        shouldDisableDate={isWeekend}
        onChange={(newDate) => setDate(newDate)}
      />
    </LocalizationProvider>
  );
}
