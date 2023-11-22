import { TypeChems } from "./query-result"

export type TypeContextHomeUser = {
  compoundSearch:{
    val: TypeChems|null,
    setVal: (val:TypeChems|null)=>void
  },
  selectedHistory:{
    val: TypeChems[],
    setVal: (val:TypeChems)=>void
  }
}