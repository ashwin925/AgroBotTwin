import { clsx } from "clsx";

export function cn(...values: Array<string | false | null | undefined>) {
  return clsx(values);
}

export function formatDateTime(date: string | number | Date, locale = "en-IN") {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date(date));
}

export function slugify(input: string) {
  return input.trim().toLowerCase().replace(/\s+/g, "-");
}
