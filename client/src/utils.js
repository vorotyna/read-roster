import { saveAs } from "file-saver";
import { createEvent } from "ics";

// Function that handle onClick for calendar button
export const saveCalendarEvent = (book) => {
  let startDate = book.due_date.split("T")[0].split("-").map(Number);
  const calendarObj = {
    title: `‼️ ${book.title} due date`,
    description: "This is a calendar alert from readroster.",
    start: startDate,
    end: startDate,
    location: book.location,
  };
  createCalendarEvent(calendarObj);
};

// Function that creates a calendar event
const createCalendarEvent = async (event) => {
  const { title, description, start, end, location } = event;

  const eventObj = {
    start: start,
    end: end,
    title: title,
    description: description,
    location: location,
  };

  const { error, value } = await createEvent(eventObj);

  if (error) {
    console.error(error);
    return;
  }
  const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
  saveAs(blob, `${title}.ics`);
};