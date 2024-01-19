export function saveLocalStorage<T> (name: string, value: T | T[]) {  
  const itemName = window.localStorage.getItem(name)
  if (itemName === null) {
    window.localStorage.setItem(name, JSON.stringify(value))
    return {
      value,
      state: 'created'
    }
  } else {
    window.localStorage.setItem(name, JSON.stringify(value))
    return {
      value,
      state: 'updated'
    }
  }
}
