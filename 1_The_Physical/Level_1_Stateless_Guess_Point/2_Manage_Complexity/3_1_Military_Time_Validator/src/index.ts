const minimum = 0;
const maxHours = 24;
const maxMinutes = 60;

const leftSide = (text: string) => text.split(" - ")[0];
const rightSide = (text: string) => text.split(" - ")[1];
const hours = (text: string): number => Number(text.split(":")[0]);
const minutes = (text: string): number => Number(text.split(":")[1]);

export class MilitaryTimeValidator {
  validate(text: string): boolean {
    if (text === "") return false;
    if (!text.includes(" - ")) return false;
    if (!leftSide(text).includes(":")) return false;
    if (!rightSide(text).includes(":")) return false;
    if (hours(leftSide(text)) > hours(rightSide(text))) return false;

    if (
      !(hours(leftSide(text)) < hours(rightSide(text))) &&
      minutes(leftSide(text)) > minutes(rightSide(text))
    )
      return false;

    if (hours(leftSide(text)) > maxHours || hours(rightSide(text)) > maxHours)
      return false;

    if (
      minutes(leftSide(text)) > maxMinutes ||
      minutes(rightSide(text)) > maxMinutes
    )
      return false;

    if (hours(leftSide(text)) < minimum || hours(rightSide(text)) < minimum)
      return false;

    if (minutes(leftSide(text)) < minimum || minutes(rightSide(text)) < minimum)
      return false;

    return true;
  }
}
