import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  useTable,
  useFilters,
  useAsyncDebounce,
  usePagination,
  useColumnOrder,
} from 'react-table';
import { useColumns } from '../src/hooks/';
import Home from './components/Home';
import PageTwo from './components/PageTwo';
import TableControls from './components/TableControls';
import './App.css';
import { Data } from './interfaces';
import Navbar from './components/Navbar';

function App() {
  const { columns, data } = useColumns();

  const [filters, setFilters] = useState<Data>(() => {
    const localStorageFilters = window.localStorage.getItem('filters');
    if (localStorageFilters) {
      return JSON.parse(localStorageFilters);
    }
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
    };
  });

  const [activeInput, setActiveInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveInput(e.target.name);
    setFilters((_prevState) => ({
      ..._prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Debounce the Filter function
  const filterValues: {
    [key: string]: number | string;
  } = useMemo(() => ({ ...filters }), [filters]);

  const _debounceFilter = useAsyncDebounce(() => {
    if (activeInput) {
      setFilter(activeInput, filterValues[activeInput]);
    }
  }, 1000);

  // Storing Filters Values to LocalStorage
  useEffect(() => {
    window.localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  // react-table functions

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
    setFilter,
    setColumnOrder,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
    },
    useColumnOrder,
    useFilters,
    usePagination
  );

  useEffect(() => {
    _debounceFilter();
  }, [filterValues, activeInput, _debounceFilter]);

  return (
    <div className='App'>
      <Navbar />
      <button
        className='controls-btn'
        onClick={() => setIsOpen((_prev) => !_prev)}
      >
        Controls
      </button>
      <TableControls
        isOpen={isOpen}
        allCols={allColumns}
        setColumnOrder={setColumnOrder}
        columns={columns}
        filters={filters}
        setFilters={setFilters}
        handleChange={handleChange}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Home
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
          }
        />
        <Route path='/route2' element={<PageTwo />} />
      </Routes>
    </div>
  );
}

export default App;
