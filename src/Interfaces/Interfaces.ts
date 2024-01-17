export interface IMenu {
  src?: string
  alt?: string
  name?: string
  type?: string
  placeholder?: string
  SubMenu?: {
    items: string[]
  }
}
