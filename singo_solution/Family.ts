import Person from "./Person";

class Family {
  father: Person;
  mother: Person;
  children: Person[];

  constructor(args: { father: Person; mother: Person; children?: Person[] }) {
    const { father, mother, children } = args;
    this.father = father;
    this.mother = mother;
    this.children = children || [];
  }

  addChild = (child: Person) => this.children.push(child);

  getFather = (): Person => this.father;

  getMother = (): Person => this.mother;

  getChildren = (): Person[] => this.children;
}

export default Family;
