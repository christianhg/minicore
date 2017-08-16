import { add } from '../add'
import { subtract } from '../subtract'
import { compute } from '../../core'

console.log(compute(2, add(3), subtract(5)))

export function foo() {
  return 'from foo'
}
