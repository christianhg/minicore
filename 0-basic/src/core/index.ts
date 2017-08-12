export function compute(input: number, ...functions: Function[]): number {
  return functions.reduce((result, f) => f(result), input)
}
