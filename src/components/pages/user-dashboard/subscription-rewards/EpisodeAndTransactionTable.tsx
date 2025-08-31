import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";

interface Column {
  key: string;
  label: string;
  className?: string;
}

interface EpisodeAndTransactionTableProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
}

export function EpisodeAndTransactionTable({ columns, data, className = "" }: EpisodeAndTransactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table className={`mt-5 ${className}`}>
        <TableHeader>
          <TableRow className="border-[#0B0000] hover:bg-gray-800">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={`py-3 text-center text-base font-semibold text-white ${column.className || ''}`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className="border-[#0B0000] transition-colors hover:bg-gray-800"
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className="py-3 text-center text-base text-white"
                >
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}