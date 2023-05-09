import { HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Payment implements HasFormatter {
     constructor(
        readonly recipient: string,
        public details: string,
        private amount: number
    ) {}

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}

