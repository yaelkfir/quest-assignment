export interface Flight {
  duration: number;
  from: string;
  from_date: string;
  from_gate: number;
  num: string;
  plane: string;
  to: string;
  to_date: string;
  to_gate: number;
  workerId: number;
}

export const flightTableColumns = [
  {
    columnDef: 'num',
    header: 'Flight Number',
    cell: (element: Flight) => `${element.num}`,
  },
  {
    columnDef: 'from',
    header: 'Origin',
    cell: (element: Flight) => `${element.from}`,
  },
  {
    columnDef: 'from_date',
    header: 'Origin Date',
    cell: (element: Flight) => `${element.from_date}`,
  },
  {
    columnDef: 'to',
    header: 'Destination',
    cell: (element: Flight) => `${element.to}`,
  },
  {
    columnDef: 'to_date',
    header: 'Destination Date',
    cell: (element: Flight) => `${element.to_date}`,
  },
];

