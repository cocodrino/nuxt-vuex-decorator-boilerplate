import {RootState, Person, Task} from "~/types";
import { MutationTree, ActionTree } from "vuex";
import localRandomData from "~/static/random-data.json";

export const state = (): RootState => ({
  people: [],
  tasks : [{id:"pr",title:"prueba",description:"hello"}]
});

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  },
  setTask(state: RootState, task: Task): void {
    state.tasks.push(task)
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({commit}, context) {
    let people: Person[] = [];

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = context.isStatic ?
        localRandomData :
        await context.app.$axios.$get("./random-data.json")

    commit("setPeople", people.slice(0, 10))
  }
};
