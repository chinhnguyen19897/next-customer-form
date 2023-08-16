import {faker} from "@faker-js/faker/locale/vi";
import {ICustomerInfo} from "../types/customers";


const generateFakeCustomer = (): ICustomerInfo => {
    return {
        id: faker.string.uuid(),
        code: faker.string.numeric(),
        fullName: faker.person.fullName(),
        phoneNumber: faker.phone.number('09#######'),
        groupCustomer: faker.helpers.arrayElement(['Khách lẻ', 'Thành viên']),
        debtAmount: faker.number.int(0),
        totalAmount: faker.number.int(0),
        createdAt: faker.date.anytime(),
        status: faker.helpers.arrayElement(['Đang hoạt động', 'Không hoạt động',]),
        quantity: faker.number.int(100)
    }
}

export const generateFakeCustomers = (length: number) => {
    const customers: ICustomerInfo[] = [];

    Array.from({length: length}).forEach(() => {
        customers.push(generateFakeCustomer())
    })
    return customers
}