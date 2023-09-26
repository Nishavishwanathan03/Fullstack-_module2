/*
1)varaible declarations
*/
let employeeName!: string;
employeeName = "Nisha";
employeeName = "Vishwandhan";
var employeeSalary!: number;
employeeSalary = 9000;
employeeSalary = 12000;
const employeeGrade: string = 'A+';
/*
2)Basic syntax
*/
interface person {
    firstName: string;
    lastName: string;
    isMarried: boolean;
    address: Address;
    gender: Gender;
}
 interface Address { 
    address1: string;
    address2: string;
    pincode: number;
    country: string;
}
const p1: person = {
    firstName: 'Nisha',
    lastName: 'vishwanadhan',
    isMarried: true,
    address: {
        address1: 'TamilNadu',
        address2: 'Rohini',
        pincode: '632602',
        country: 'IND'
},
gender: 'female'
};
