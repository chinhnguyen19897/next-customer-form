'use client'
import {Card, CardBody, CardHeader} from "@chakra-ui/card";
import {Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {ICustomerInfo} from "../../../types/customers";
import {generateFakeCustomers} from "../../../utils/generateFakeCustomer";

const CustomerInfo = ({params: {id}}: { params: { id: string } }) => {

    const [customersList, setCustomersList] = useState<ICustomerInfo[]>([]);

    useEffect(() => {
        const loadData = generateFakeCustomers(30)
        if (id) {
            setCustomersList(loadData)
        }
    }, [id]);


    return (
        <div>
            <div>
                <Card>
                    {
                        customersList.filter((_, i) => i === id).map(customerInfo => (
                            <>
                                <CardHeader>
                                    <Text fontSize="2xl">{customerInfo.fullName}</Text>
                                </CardHeader>
                                <CardBody>

                                </CardBody>
                            </>
                        ))
                    }
                </Card>
            </div>
        </div>
    )
}

export default CustomerInfo