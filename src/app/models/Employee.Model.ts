export interface IEmployeeList {
    employeeId: number;
    fullName: string;
    email: string;
    mobileNo: string;
    city: string;
    state: string;
    isOnProject: boolean;
    projectName: string;
}

export class EmployeeModel {
    employeeId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobileNo: string;
    city: string;
    state: string;
    isOnProject: boolean;
    projectName: string;
    panCardNo: string;
    addressLine1: string;
    addressLine2: string;
    pinCode: string;

    constructor() {
        this.employeeId = 0;
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.email = '';
        this.mobileNo = '';
        this.city = '';
        this.state = '';
        this.isOnProject = false;
        this.projectName = '';
        this.panCardNo = '';
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.pinCode = '';
        this.panCardNo = '';

    }
}

