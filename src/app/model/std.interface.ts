export interface Istd{
    fname: string;
    lname: string;
    email: string;
    contact: number;
    stdId: string;
}

export interface Istdres{
    stdinfo: Istd;
    msg: string;
}