import React from 'react';
import Table from '../Table';
import { TableUtilsProps } from '../../interfaces';

function Home<T extends object>(props: TableUtilsProps<T>) {
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
    state,
    pageOptions,
  } = props;
  return (
    <>
      <Table
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        page={page}
        prepareRow={prepareRow}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        state={state}
        pageOptions={pageOptions}
      />
    </>
  );
}

export default Home;
