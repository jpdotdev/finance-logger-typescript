import { HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Invoice implements HasFormatter {
    // client: string;
    // details: string;
    // private amount: number

    constructor(
        public client: string,
        public details: string,
        public amount: number
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}