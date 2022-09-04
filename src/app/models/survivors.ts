import {
  ACTIONTYPE,
  SKILLS
} from "./skills";

export const SURVIVORS = {
  "justin": {
    expansion: "WZC",
    name: "Justin",
    originalSkills: {
      blue: SKILLS[70],
      yellow: SKILLS[2],
      orange: [skill(SKILLS[3], ACTIONTYPE[2]), SKILLS[1]],
      red: [SKILLS[1], SKILLS[70], SKILLS[1]]
    },
    xpc: 0,
    campaignSkills: [],
    keptWeapons: []
  }
};

function skill(skill: any, option: any) {
  return { name: skill.name.replace("[type d'action]", option), description: skill.description };
}