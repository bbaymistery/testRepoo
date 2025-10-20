
/**
 * Format a date string (e.g. "2025-10-09" or "2025-10-09 19:00")
 * into a readable form like "9 Oct 2025" or "9 October 2025"
 *
 * @param {string | Date} date - the input date string or Date object
 * @param {"short" | "long"} monthStyle - "short" = Oct, "long" = October
 * @returns {string} formatted date string
 */
export function formatDate(date, monthStyle = "short") {
  if (!date) return "";

  try {
    // if input like "2025-10-09 19:00" → only take the date part
    const dateOnly = typeof date === "string" ? date.split(" ")[0] : date;
    const d = new Date(dateOnly);

    if (isNaN(d)) return date; // fallback if invalid

    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: monthStyle,
      year: "numeric",
    });
  } catch (err) {
    console.error("Date format error:", err);
    return date;
  }
}
