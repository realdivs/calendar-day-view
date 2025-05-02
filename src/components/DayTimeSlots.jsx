export const DayTimeSlots = () => {
  const slots = new Array(24).fill(0).map((_, index) => index);
  return (
    <>
      {slots.map((slot) => (
        <div className="slot" key={slot}>
          {" "}
          {slot}:00
        </div>
      ))}
    </>
  );
};
