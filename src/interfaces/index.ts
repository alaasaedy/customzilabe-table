import {
  TableInstance,
  UsePaginationInstanceProps,
  UseTableInstanceProps,
} from 'react-table';

// export interface TableUtilsProps {
//   getTableProps: (
//     propGetter?:
//       | TablePropGetter<{
//           id: number;
//           first_name: string;
//           last_name: string;
//           email: string;
//           phone: string;
//           country: string;
//         }>
//       | undefined
//   ) => TableProps;
//   getTableBodyProps: (
//     propGetter?:
//       | TableBodyPropGetter<{
//           id: number;
//           first_name: string;
//           last_name: string;
//           email: string;
//           phone: string;
//           country: string;
//         }>
//       | undefined
//   ) => TableProps;
//   setFilter: (columnId: string, updater: any) => void;
//   headerGroups: HeaderGroup<{
//     id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     phone: string;
//     country: string;
//   }>[];
//   rows: Row<{
//     id: number;
//     first_name: string;
//     last_name: string;
//     email: string;
//     phone: string;
//     country: string;
//   }>[];
//   prepareRow: (
//     row: Row<{
//       id: number;
//       first_name: string;
//       last_name: string;
//       email: string;
//       phone: string;
//       country: string;
//     }>
//   ) => void;
// }

export interface TableUtilsProps<T extends object>
  extends Pick<
    TableInstance<T> & UseTableInstanceProps<T> & UsePaginationInstanceProps<T>,
    | 'getTableProps'
    | 'getTableBodyProps'
    | 'headerGroups'
    | 'prepareRow'
    | 'page'
    | 'nextPage'
    | 'previousPage'
    | 'canNextPage'
    | 'canPreviousPage'
    | 'pageOptions'
    | 'state'
  > {}

export type Data = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
};
