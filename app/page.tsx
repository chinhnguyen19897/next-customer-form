'use client';

import {useEffect, useMemo, useState} from "react";
import {ICustomerInfo} from "../types/customers";
import {generateFakeCustomers} from "../utils/generateFakeCustomer";
import {AddIcon} from "@chakra-ui/icons";
import TableList from "./components/TableList";
import {createColumnHelper} from "@tanstack/table-core";
import moment from "moment/moment";
import {ColumnDef} from "@tanstack/react-table";

const columnHelper = createColumnHelper<ICustomerInfo>();


const Page = () => {

    const [customersList, setCustomersList] = useState<ICustomerInfo[]>([]);

    useEffect(() => {
        const loadData = generateFakeCustomers(30)
        setCustomersList(loadData)
    }, []);

    const columns = useMemo<ColumnDef<ICustomerInfo, any>[]>(
        () => [
            columnHelper.accessor('code', {
                cell: (info) => info.getValue(),
                header: 'Mã khách hàng'
            }),
            columnHelper.accessor('fullName', {
                cell: (info) => info.getValue(),
                filterFn: 'testFilter',
                header: 'Tên khách hàng'
            }),
            columnHelper.accessor('phoneNumber', {
                cell: (info) => info.getValue(),
                header: 'Số điện thoại'
            }),
            columnHelper.accessor('groupCustomer', {
                cell: (info) => info.getValue(),
                header: 'Nhóm khách hàng'
            }),
            columnHelper.accessor('debtAmount', {
                cell: (info) => info.getValue(),
                header: 'Nợ hiện tại'
            }),
            columnHelper.accessor('totalAmount', {
                cell: (info) => info.getValue(),
                header: 'Tổng chi tiêu'
            }),
            columnHelper.accessor('quantity', {
                cell: (info) => info.getValue(),
                header: 'SL đơn hàng'
            }),
            columnHelper.accessor('createdAt', {
                cell: (info) => moment(info.getValue()).format('DD/MM/YYYY'),
                header: 'Ngày tạo'
            }),
            columnHelper.accessor('status', {
                cell: (info) => (info.getValue() === 'active' ? 'Đang hoạt động' : 'Chưa hoạt động'),
                header: 'Trạng thái',
            }),
        ],
        []
    )

    return (
        <section className="customer-list">
            <div className="2xl:container 2xl:mx-auto px-4">
                <div
                    className="w-full h-full bg-white rounded-md shadow mt-12 pt-[23px] px-[24px] pb-[33px]">
                    <section className="add-customer mb-[32px]">
                        <button
                            className="rounded-md bg-[#007AFF] px-3 h-[45px] flex items-center text-white">
                            <AddIcon boxSize={4}/>
                            <span className="ml-2">
                                        Thêm khách hàng mới</span>
                        </button>
                    </section>
                    <section className="section-list">
                        <TableList data={customersList} columns={columns}
                        />
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Page;