import type {Basics} from "@/types/Basics.ts";
import type {Experience} from "@/types/Experience.ts";
import type {Education} from "@/types/Education.ts";
import type {Skill} from "@/types/Skill.ts";

export interface Resume {
  basics: Basics;
  work: Experience[];
  education: Education[];
  skills?: Skill[];
}
