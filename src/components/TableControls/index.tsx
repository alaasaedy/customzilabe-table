import React from 'react';
import { Column, ColumnInstance } from 'react-table';
import { Data } from '../../interfaces';
import ColumnsControls from '../ColumnControl';
import TableFilters from '../TableFilters';
import './styles.css';

interface TableControlsProps {
  isOpen: boolean;
  allCols: ColumnInstance<Data>[];
  setColumnOrder: (
    updater: string[] | ((columnOrder: string[]) => string[])
  ) => void;
  columns: Column<Data>[];
  filters: Data;
  setFilters: React.Dispatch<React.SetStateAction<Data>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableControls = ({
  isOpen,
  allCols,
  setColumnOrder,
  columns,
  filters,
  setFilters,
  handleChange,
}: TableControlsProps) => {
  return (
    <div className={`table-controls ${isOpen ? 'open' : null}`}>
      <TableFilters
        columns={columns}
        filters={filters}
        setFilters={setFilters}
        handleChange={handleChange}
      />
      <ColumnsControls columns={allCols} setColumnOrder={setColumnOrder} />
    </div>
  );
};

export default TableControls;
