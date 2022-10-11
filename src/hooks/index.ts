import { useMemo } from 'react';
import { Column } from 'react-table';
import MOCK_DATA from '../components/MOCK_DATA.json';
import { Columns } from '../constants';
import { Data } from '../interfaces';

export const useColumns = () => {
  const columns = useMemo<Column<Data>[]>(() => [...Columns], []);
  const data = useMemo<Data[]>(() => [...MOCK_DATA], []);

  return { columns, data };
};
