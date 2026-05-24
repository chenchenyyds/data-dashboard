'use client';

import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DataTablePagination } from '@/components/ui/table/data-table-pagination';
import { useLanguage } from '@/contexts/language-context';
import { exportToCSV } from '@/lib/csv-export';
import { Icons } from '@/components/icons';
import { mockReports, type ReportRow } from '../mock-data';

const statusVariant: Record<ReportRow['status'], 'default' | 'secondary' | 'outline'> = {
  Completed: 'default',
  Pending: 'secondary',
  Refunded: 'outline',
};

export function ReportsTable() {
  const { t } = useLanguage();
  const [data] = useState(mockReports);
  const [globalFilter, setGlobalFilter] = useState('');

  const columns = useMemo<ColumnDef<ReportRow>[]>(
    () => [
      {
        accessorKey: 'id',
        header: t('orders.orderId') || 'Order ID',
      },
      {
        accessorKey: 'date',
        header: t('orders.date') || 'Date',
        sortingFn: 'datetime',
      },
      {
        accessorKey: 'customer',
        header: t('overview.newCustomers') || 'Customer',
      },
      {
        accessorKey: 'product',
        header: 'Product',
      },
      {
        accessorKey: 'category',
        header: 'Category',
      },
      {
        accessorKey: 'quantity',
        header: 'Qty',
        cell: ({ getValue }) => <span className="tabular-nums">{getValue<number>()}</span>,
      },
      {
        accessorKey: 'price',
        header: t('services.price') || 'Price',
        cell: ({ getValue }) => `$${getValue<number>()}`,
      },
      {
        accessorKey: 'total',
        header: 'Total',
        cell: ({ getValue }) => <span className="font-medium tabular-nums">${getValue<number>()}</span>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => {
          const s = getValue<ReportRow['status']>();
          return <Badge variant={statusVariant[s]}>{s}</Badge>;
        },
        filterFn: 'equals',
      },
    ],
    [t]
  );

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  const handleExportCSV = () => {
    const csvColumns = columns
      .filter((c) => 'accessorKey' in c && c.accessorKey)
      .map((c) => ({
        key: (c as { accessorKey: string }).accessorKey,
        header: (c.header as string) || (c as { accessorKey: string }).accessorKey,
      }));
    const rows = table.getFilteredRowModel().rows.map((r) => r.original);
    exportToCSV(rows as unknown as Record<string, unknown>[], csvColumns, `reports-${new Date().toISOString().slice(0, 10)}.csv`);
  };

  return (
    <div className="flex flex-1 flex-col space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Icons.search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            placeholder={t('common.search') || 'Search...'}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="h-9 pl-8 w-full md:max-w-sm"
          />
        </div>
        <Button variant="outline" size="sm" onClick={handleExportCSV}>
          <Icons.fileTypeXls className="mr-2 size-4" />
          CSV
        </Button>
      </div>
      <div className="rounded-md border">
        <ScrollArea className="h-[500px]">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="cursor-pointer select-none"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center gap-1">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <Icons.chevronUp className="size-3" />,
                          desc: <Icons.chevronDown className="size-3" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {t('common.noResults') || 'No results.'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
