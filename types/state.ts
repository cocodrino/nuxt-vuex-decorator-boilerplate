import { Person,Task } from "~/types";

export interface RootState {
  people: Person[];
  tasks : Task[]
}
