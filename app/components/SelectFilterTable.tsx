import {Column, Table} from "@tanstack/table-core";
import {ChangeEvent, useMemo} from "react";
import {Select} from "@chakra-ui/react";


type SelectFilterTableProps = {
    column: Column<any, unknown>,
    table: Table<any>
}
export const SelectFilterTable = ({column, table}: SelectFilterTableProps) => {

    const columnFilterValue = column.getFilterValue();
    const sortedUniqueValues = useMemo(
        () =>
            Array.from(column.getFacetedUniqueValues().keys()).sort(),
        [column.getFacetedUniqueValues()]
    )

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        column.setFilterValue(e.target.value)
    }

    return (
        <>
            {column.id === 'groupCustomer'
                && (
                    <Select id={column.id} placeholder={`${column.columnDef.header}`}
                            value={(columnFilterValue ?? '') as string}
                            onChange={e => handleChange(e)}>
                        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                            <option value={value} key={value}>{value.toString()}</option>
                        ))}
                    </Select>
                )
            }
            {
                column.id === 'status'
                && (
                    <Select id={column.id} placeholder={`${column.columnDef.header}`}
                            value={(columnFilterValue ?? '') as string}
                            onChange={e => handleChange(e)}>
                        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                            <option value={value} key={value}>{value.toString()}</option>
                        ))}
                    </Select>
                )
            }
            {
                column.id === 'createdAt'
                && (
                    <Select id={column.id} placeholder={`${column.columnDef.header}`}
                            value={(columnFilterValue ?? '') as string}
                            onChange={e => handleChange(e)}>
                        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
                            <option value={value} key={value}>{value.toString()}</option>
                        ))}
                    </Select>
                )
            }
        </>
    )
}