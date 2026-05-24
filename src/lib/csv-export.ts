export function exportToCSV(
  data: Record<string, unknown>[],
  columns: { key: string; header: string }[],
  filename = 'export.csv'
) {
  const headerRow = columns.map((c) => `"${c.header}"`).join(',');
  const bodyRows = data.map((row) =>
    columns.map((c) => `"${String(row[c.key] ?? '')}"`).join(',')
  );
  const csv = [headerRow, ...bodyRows].join('\n');
  const BOM = '﻿';
  const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
