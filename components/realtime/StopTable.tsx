"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const headTableData = [
  ["StationName", "站點名稱"],
  ["StationAddress", "站點地址"],
  ["AvailableRentBikes", "可借車輛"],
  ["AvailableReturnBikes", "可還空位"],
];
const StopTable = () => {
  const [sorting, setIsSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });
  const columnHelper = createColumnHelper<any>();
  const columns = headTableData.map((head: string[]) =>
    columnHelper.accessor(head[0], {
      header: () => <span className="">{head[1]}</span>,
      cell: (info: any) => <span className="">{info.getValue()}</span>,
    })
  );
  const table = useReactTable({
    data: [
      {
        StationName: "station",
        StationAddress: "address",
        AvailableRentBikes: 0,
        AvailableReturnBikes: 0,
      },
      {
        StationName: "station",
        StationAddress: "address",
        AvailableRentBikes: 0,
        AvailableReturnBikes: 0,
      },
      {
        StationName: "station",
        StationAddress: "address",
        AvailableRentBikes: 0,
        AvailableReturnBikes: 0,
      },
    ],
    columns,
    state: {
      sorting,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setIsSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    debugTable: true,
  });
  return (
    <div className="w-full my-4">
      <table className="w-full border-spacing-0 rounded-xl overflow-hidden bg-light shadow-default max-w-[1084px] block">
        <thead className="bg-green-normal text-light w-full inline-block">
          {table.getHeaderGroups().map((headerGroup) => {
            // console.log(headerGroup.headers.length);
            return (
              <tr
                key={`station-${headerGroup.id}`}
                className={`w-full grid grid-cols-4 md:grid-cols-6`}
              >
                {headerGroup.headers.map((header, index) => {
                  return (
                    <th
                      key={header.id}
                      className={`cursor-pointer font-medium text-base md:text-lg py-4 ${
                        index === 0
                          ? "col-span-2"
                          : index === 1
                          ? "hidden md:block col-span-2"
                          : "col-span-1"
                      }`}
                    >
                      <div
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="text-12px w-full scroll relative inline-block">
          <>
            {table.getRowModel().rows.map((row, index) => {
              return (
                <tr
                  key={row.id}
                  className={`w-full grid grid-cols-4 md:grid-cols-6 py-4 ${
                    index % 2 === 1 ? "bg-green-dark-20" : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <td
                        key={cell.id}
                        className={`cursor-pointer font-medium place-self-center ${
                          index === 0
                            ? "col-span-2"
                            : index === 1
                            ? "hidden md:block col-span-2"
                            : "col-span-1 font-bold text-orange text-lg"
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </>
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex justify-end items-center gap-4 mt-4">
        <div className="flex gap-2 text-green-dark text-lg">
          <button
            className="cursor-pointer disabled:text-green-dark-40 hover:text-green-light"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button
            className="cursor-pointer disabled:text-green-dark-40 hover:text-green-light"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <input
            type="number"
            className="text-center text-green-dark font-meduim bg-light drop-shadow-md text-base w-28"
            value={table.getState().pagination.pageIndex + 1}
            disabled={!table.getCanPreviousPage() || !table.getCanNextPage()}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
          <button
            className="cursor-pointer disabled:text-green-dark-40 hover:text-green-light"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
          <button
            className="cursor-pointer disabled:text-green-dark-40 hover:text-green-light"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="text-green-dark">
          共 {table.getPageCount().toLocaleString()} 頁
        </div>
      </div>
    </div>
  );
};

export default StopTable;
