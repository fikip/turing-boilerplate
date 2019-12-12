import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";

const immer = config => (set, get, api) =>
  config(fn => set(produce(fn)), get, api);

export const createStore = args =>
  create(devtools(immer(set => ({ ...args, set }))));
// Immer keeps data immutable without extra effort.
// Devtool helps plug zustand into redux-dev-tools.
