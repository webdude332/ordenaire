interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  title: string;
  action?: React.ReactNode;
  columns: Column<T>[];
  data: T[];
}

export function DataTable<T>({
  title,
  action,
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="rounded-xl border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>
        {action}
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500 border-b">
            {columns.map(col => (
              <th key={col.key} className="px-6 py-3 font-medium">
                <div className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && <span>⇅</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b last:border-none">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4 text-sm">
                  {col.render
                    ? col.render(row)
                    : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;