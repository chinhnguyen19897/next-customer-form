'use client'

import {
    ColumnDef,
    ColumnFiltersState,
    FilterFn,
    flexRender,
    getCoreRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/react";
import {ICustomerInfo} from "../../types/customers";
import PaginateTable from "./PaginateTable";
import {useState} from "react";
import {SelectFilterTable} from "./SelectFilterTable";

type DataTableProps<ICustomerInfo extends object> = {
    data: ICustomerInfo[];
    columns: ColumnDef<ICustomerInfo>[],
};

declare module "@tanstack/table-core" {
    interface FilterFns {
        testFilter: FilterFn<unknown>;
    }
}

const testFilter: FilterFn<any> = (
    row,
    columnId: string,
    filterValue: string,
) => {
    return filterValue.includes(row.getValue(columnId))
};

const TableList = ({data, columns}: DataTableProps<ICustomerInfo>) => {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [searchValue, setSearchValue] = useState("");


    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        state: {
            columnFilters,
        },
        filterFns: {
            testFilter,
        },
        onColumnFiltersChange: setColumnFilters,
    })


    return (
        <>
            <section className="flex justify-between">
                <div className="search-customter">
                    <input type="text"
                           className="w-full h-full bg-white rounded-md border-[#DCDCDC] border-solid border py-3 pl-[33px]"
                           placeholder="Tìm kiếm theo mã khách hàng, tên khách hàng và số điện thoại"/>
                </div>
                <div className="filter-customer">

                    {
                        table.getHeaderGroups().map((group) => {
                            return <div key={group.id} className="flex">
                                {
                                    group.headers.map((header) =>
                                        (

                                            header.column.getCanFilter() ? (
                                                <SelectFilterTable column={header.column} table={table}/>
                                            ) : null

                                        ))
                                }
                            </div>
                        })
                    }
                </div>
            </section>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        {
                            table.getHeaderGroups().map((headersGroup) => (
                                <Tr key={headersGroup.id}>
                                    {
                                        headersGroup.headers.map(header => {
                                            // const meta: any = header.column.columnDef.meta;
                                            return (
                                                <Th key={header.id}>
                                                    {
                                                        flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )
                                                    }
                                                </Th>
                                            )
                                        })
                                    }
                                </Tr>
                            ))
                        }
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.map(row => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </Tbody>
                </Table>
                <div className="py-4"/>
                <PaginateTable table={table}/>
            </TableContainer>
        </>
    )
}

export default TableList
