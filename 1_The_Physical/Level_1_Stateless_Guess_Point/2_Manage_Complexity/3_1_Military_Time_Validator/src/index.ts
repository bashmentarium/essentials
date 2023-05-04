const leftSide = (text: string) => text.split(" - ")[0];
const rightSide = (text: string) => text.split(" - ")[1];
const hours = (text: string): number => Number(text.split(":")[0]);

export class MilitaryTimeValidator {
  validate(text: string): boolean {
    if (text === "") return false;
    if (!text.includes(" - ")) return false;
    if (!leftSide(text).includes(":")) return false;
    if (!rightSide(text).includes(":")) return false;
    if (hours(leftSide(text)) > hours(rightSide(text))) return false;

    return true;
  }
}
