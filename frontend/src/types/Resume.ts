import type {Basics} from "@/types/Basics.ts";
import type {Experience} from "@/types/Experience.ts";
import type {Education} from "@/types/Education.ts";
import type {Skill} from "@/types/Skill.ts";
import type {Volunteer} from "@/types/Volunteer.ts";
import type {Award} from "@/types/Award.ts";
import type {Certificate} from "@/types/Certificate.ts";
import type {Publication} from "@/types/Publication.ts";
import type {Language} from "@/types/Language.ts";
import type {Interest} from "@/types/Interest.ts";
import type {Reference} from "@/types/Reference.ts";
import type {Project} from "@/types/Project.ts";

export interface Resume {
  basics: Basics;
  work?: Experience[];
  volunteer?: Volunteer[];
  education?: Education[];
  awards?: Award[];
  certificates?: Certificate[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
}
