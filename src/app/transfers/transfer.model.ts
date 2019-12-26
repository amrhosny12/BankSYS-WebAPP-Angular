export interface Transfer {
    from: string;
    to: string;
    amount: string;
    type: string;
    date: string;
    frequency?: string;
    memo?: string;
    _id?: string;
}
