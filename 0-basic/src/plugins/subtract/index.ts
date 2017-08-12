import { compute } from '../../core'

export const subtract = (a: number) => (b: number) => b - a

console.log('subtracting:', compute(10, subtract(5)))
