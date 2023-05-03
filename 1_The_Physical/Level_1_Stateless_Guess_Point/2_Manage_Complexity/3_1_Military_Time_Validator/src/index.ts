export class MilitaryTimeValidator {
  validate(text: string): boolean {
    if (text === "") return false;
    if (!text.includes(" - ")) return false;
    if (text.split(" - ")[0].indexOf(":") === -1) return false;
    if (text.split(" - ")[1].indexOf(":") === -1) return false;

    return true;
  }
}
