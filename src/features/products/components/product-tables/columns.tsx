'use client';
// Column headers translated via getProductColumns(t)
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import type { Product } from '../../api/types';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { getCategoryOptions } from './options';

export function getProductColumns(t: (key: string) => string): ColumnDef<Product>[] {
  const CATEGORY_OPTIONS = getCategoryOptions(t);
  return [
    {
      accessorKey: 'photo_url',
      header: t('product.column.image'),
      cell: ({ row }) => {
        return (
          <div className='relative aspect-square'>
            <Image
              src={row.getValue('photo_url')}
              alt={row.getValue('name')}
              fill
              sizes='80px'
              className='rounded-lg'
            />
          </div>
        );
      }
    },
    {
      id: 'name',
      accessorKey: 'name',
      header: ({ column }: { column: Column<Product, unknown> }) => (
        <DataTableColumnHeader column={column} title={t('product.column.name')} />
      ),
      cell: ({ cell }) => <div>{cell.getValue<Product['name']>()}</div>,
      meta: {
        label: t('product.column.nameLabel'),
        placeholder: t('product.column.searchPlaceholder'),
        variant: 'text',
        icon: Icons.text
      },
      enableColumnFilter: true
    },
    {
      id: 'category',
      accessorKey: 'category',
      enableSorting: false,
      header: ({ column }: { column: Column<Product, unknown> }) => (
        <DataTableColumnHeader column={column} title={t('product.column.category')} />
      ),
      cell: ({ cell }) => {
        const status = cell.getValue<Product['category']>();
        const Icon = status === 'active' ? Icons.circleCheck : Icons.xCircle;

        return (
          <Badge variant='outline' className='capitalize'>
            <Icon />
            {status}
          </Badge>
        );
      },
      enableColumnFilter: true,
      meta: {
        label: t('product.column.categories'),
        variant: 'multiSelect',
        options: CATEGORY_OPTIONS
      }
    },
    {
      accessorKey: 'price',
      header: t('product.column.price')
    },
    {
      accessorKey: 'description',
      header: t('product.column.description')
    },

    {
      id: 'actions',
      cell: ({ row }) => <CellAction data={row.original} />
    }
  ];
}
