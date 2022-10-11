import { Column } from 'react-table';
import MockData from '../components/MOCK_DATA.json';
import { Data } from '../interfaces';

export const Columns: Column<Data>[] = Object.keys(MockData[0]).map((key) => {
  const str = key
    .split('_')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');

  return {
    Header: str,
    accessor: key as keyof Data,
  };
});

// export const Columns = [
//   {
//     Header: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         accessor: 'first_name',
//       },
//       {
//         Header: 'Last Name',
//         accessor: 'last_name',
//       },
//     ],
//   },
//   {
//     Header: 'Info',
//     columns: [
//       {
//         Header: 'Email',
//         accessor: 'email' as const,
//       },
//       {
//         Header: 'Phone',
//         accessor: 'phone' as const,
//       },
//       {
//         Header: 'Country',
//         accessor: 'country' as const,
//       },
//     ],
//   },
// ];
