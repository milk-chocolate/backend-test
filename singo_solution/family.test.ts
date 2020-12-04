import Person from "./Person";
import Family from "./Family";

describe("Family tree", () => {
  test("Base family", () => {
    const jack = new Person({ name: "Jack", gender: "MALE" });
    const jill = new Person({ name: "Jill", gender: "FEMALE" });
    const nate = new Person({ name: "Nate", gender: "MALE" });
    const gary = new Person({ name: "Gary", gender: "MALE" });
    const anna = new Person({ name: "Anna", gender: "FEMALE" });

    const family = new Family({
      father: jack,
      mother: jill,
      children: [nate],
    });

    jack.setParentOf(family);
    jill.setParentOf(family);
    nate.setChildOf(family);

    family.addChild(gary);
    gary.setChildOf(family);

    family.addChild(anna);
    anna.setChildOf(family);

    expect(jack.getParentOf()).toBe(family);
    expect(jill.getParentOf()).toBe(family);
    expect(nate.getChildOf()).toBe(family);
    expect(gary.getChildOf()).toBe(family);
    expect(anna.getChildOf()).toBe(family);

    expect(family.getFather()).toBe(jack);
    expect(family.getMother()).toBe(jill);
    expect(family.getChildren()).toContain(nate);
    expect(family.getChildren()).toContain(gary);
    expect(family.getChildren()).toContain(anna);
  });
});
