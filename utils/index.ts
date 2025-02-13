import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistance } from "date-fns";

// this function is for reusable components, e.g buttons
function cn(...inputs: ClassValue[]): any {
  return twMerge(clsx(inputs));
}

function colorSpecificText(text: string) {
  const styleParagraph = text.replaceAll(/@(\w+)/g, "<strong>$1</strong>");

  return styleParagraph;
}

// Video Duration
function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// formate date
function formateDate(date: string) {
  const parsedDate = new Date(date);

  const formattedDate: string = format(parsedDate, " HH:mm yyyy-MM-dd");

  return formattedDate;
}

// formate date
function formateDateDistance(date: string) {
  const parsedDate = new Date(date);

  const formattedDate: string = formatDistance(new Date(), parsedDate);

  return formattedDate;
}

// Valid Email
function validEmail(email: string) {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return email.toLocaleLowerCase().match(validRegex);
}

function myImage() {
  return "https://pbs.twimg.com/profile_images/1774123575248830466/e0rbeSop_400x400.jpg";
}

export {
  cn,
  colorSpecificText,
  formatTime,
  formateDate,
  formateDateDistance,
  validEmail,
  myImage,
};
