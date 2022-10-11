import React from 'react';
import { Data } from '../../interfaces';
import Input from './input';
import './styles.css';

const TableFilters = ({
  filters,
  setFilters,
  columns,
  handleChange,
}: {
  filters: Data;
  setFilters: React.Dispatch<React.SetStateAction<Data>>;
  columns: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className='table_filters'>
      {columns.map((_col: { Header: string; accessor: string }) => (
        <Input
          key={_col['accessor']}
          filters={filters}
          handleChange={handleChange}
          {..._col}
        />
      ))}
      <button
        onClick={() =>
          setFilters({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            country: '',
          })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default TableFilters;
