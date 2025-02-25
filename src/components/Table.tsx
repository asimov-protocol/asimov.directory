import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const Table = ({ children }: Props) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-5xl w-full">
        <table className="table-auto w-full text-left">{children}</table>
      </div>
    </div>
  );
};

const TableHead = ({ children }: Props) => (
  <thead>
    <tr className="border-b border-gGray-300 text-gGray-300 text-sm font-normal">
      {children}
    </tr>
  </thead>
);

const Th = ({ children }: Props) => <th className="px-5 py-2">{children}</th>;

const TableBody = ({ children }: Props) => (
  <tbody className="divide-y divide-gGray-300">{children}</tbody>
);

const TableRow = ({ children }: Props) => (
  <tr className="hover:bg-sSlate-600 transition-colors">{children}</tr>
);

const Td = ({ children }: Props) => <td className="px-5 py-4">{children}</td>;

const TableItem = ({ args }: any) => {
  console.log(args);
  if (!args) {
    return <span>None</span>;
  }
  if (args.type === 'uri') {
    const literal = args.value.split('/').pop();
    return (
      <Link
        href={args.value}
        className="text-oOrange-500 hover:text-oOrange-400"
        target="_blank"
      >
        {literal}
      </Link>
    );
  } else if (args.type === 'literal') {
    return <span>{args.value.slice(0, 100)}</span>;
  }
  return <span>{args.value}</span>;
};

export { Table, TableHead, Th, TableBody, TableRow, Td, TableItem };
