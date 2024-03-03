import { format } from 'date-fns';

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Notion date property format: "1997-06-26"
 * When we pass this string to the Date constructor, it will be interpreted
 * as UTC. So we deconstruct the date string instead.
 */
export function formatNotionDateProperty(
  dateString: string,
  formatString: string,
) {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return format(date, formatString);
}
