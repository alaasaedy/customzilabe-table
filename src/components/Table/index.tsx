import React from 'react';
import { TableUtilsProps } from '../../interfaces';
import './table.css';

export function Table<T extends object>(props: TableUtilsProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = props;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='pagination'>
        <span>
          Page <strong>{pageIndex + 1}</strong> of {pageOptions.length}
        </span>
        <button disabled={!canPreviousPage} onClick={previousPage}>
          Previous
        </button>
        <button disabled={!canNextPage} onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  );
}

export default Table;
