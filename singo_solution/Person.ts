import Family from "./Family";

class Person {
  name: string;
  gender: "MALE" | "FEMALE";
  childOf?: Family;
  parentOf?: Family;

  constructor(args: { name: string; gender: "MALE" | "FEMALE" }) {
    const { name, gender } = args;
    this.name = name;
    this.gender = gender;
  }

  setChildOf = (family: Family) => (this.childOf = family);

  getChildOf = (): Family | undefined => this.childOf;

  setParentOf = (family: Family) => (this.parentOf = family);

  getParentOf = (): Family | undefined => this.parentOf;
}

export default Person;
