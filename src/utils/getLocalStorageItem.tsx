import { TLocalStorageData } from "../Interfaces/Interfaces";

export function getLocalStorageItem <T = any>(name: string): TLocalStorageData<T> {
  return JSON.parse(localStorage.getItem(name) || '[]')
}