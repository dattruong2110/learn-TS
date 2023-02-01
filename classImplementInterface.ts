import { hasPrint } from "./interfaceForClass";

export class Invoice implements hasPrint {
    constructor(
        readonly client: string,
        private work: string,
        public amount: number
    ) {}

    print() {
        return `${this.client} owes ${this.amount} dollars for this work: ${this.work}`
    }
}

export class Payment implements hasPrint {
    constructor(
        readonly recipiend: string,
        private job: string,
        public amt: number
    ) {}

    print() {
        return `I owes ${this.recipiend} ${this.amt} dollars for this job: ${this.job}`
    }
}