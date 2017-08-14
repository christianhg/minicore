import { compute } from '../../core/compute'
import { curry } from '../../core/curry'

export const add = curry((a: number, b: number) => a + b)

console.log('adding:', compute(1, add(2)))

console.log('adding some more', compute(2, add(3)))

console.log('adding even more', compute(4, add(4)))
