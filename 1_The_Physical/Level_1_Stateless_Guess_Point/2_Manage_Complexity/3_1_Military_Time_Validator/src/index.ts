export const WRONG_FORMAT_ERROR = 'Wrong format. Must be "XX:YY - XX:YY"';

const hoursOrMinutesMinimum = 0;
const hoursMaximum = 23;
const minutesMaximum = 59;

function isBetween(num: string, min: number, max: number) {
  const toNum = Number(num);

  console.log({ num });
  return toNum >= min && toNum <= max;
}

export class TimeValidator {
  validateTime(time: string) {
    if (!time.includes(" - ")) return WRONG_FORMAT_ERROR;

    const splitTime = time.split(" - ");

    const startTime = splitTime[0].split(":");
    const endTime = splitTime[1].split(":");

    if (isBetween(startTime[0], hoursOrMinutesMinimum, hoursMaximum)) {
      return WRONG_FORMAT_ERROR;
    }

    if (isBetween(startTime[1], hoursOrMinutesMinimum, minutesMaximum)) {
      return WRONG_FORMAT_ERROR;
    }

    if (isBetween(endTime[0], hoursOrMinutesMinimum, hoursMaximum)) {
      return WRONG_FORMAT_ERROR;
    }

    if (isBetween(endTime[1], hoursOrMinutesMinimum, minutesMaximum)) {
      return WRONG_FORMAT_ERROR;
    }

    return true;
  }
}
