import { DayTimeSlots } from "./DayTimeSlots";
import events from "../data/events.json";

import { Events } from "./Events";
export const DayView = () => {
  console.log(events);
  return (
    <div className="calendar">
      <div className="line"></div>
      <DayTimeSlots />
      <Events events={events} />
    </div>
  );
};
