import {ICustomerInfo} from "../../types/customers";
import {Table} from "@tanstack/table-core";

type PaginateTableProps = {
    table: Table<ICustomerInfo>
}
const PaginateTable = ({table}: PaginateTableProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="page-show flex items-center gap-1">
                <span className="flex items-center gap-1">
              <div>Hiển thị</div>

                    {table.getState().pagination.pageIndex + 1} {'-'}
                    {table.getState().pagination.pageSize}
                    {' '} của {table.getTotalSize()}
            </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <div className="page-number flex items-center gap-1">
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <span className="flex items-center gap-1">
              <input
                  type="number"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      table.setPageIndex(page)
                  }}
                  className="border p-1 rounded w-16"
              />
            </span>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
            </div>
        </div>
    )
}

export default PaginateTable;