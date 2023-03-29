// fix for Object.keys thanks to the goodness of https://fettblog.eu/typescript-better-object-keys/
type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<any> | string
  ? string[]
  : never

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>
}
