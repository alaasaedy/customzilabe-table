import React from 'react';
import { Data } from '../../interfaces';

const Input = ({
  accessor,
  Header,
  filters,
  handleChange,
}: {
  accessor: string;
  Header: string;
  filters: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      value={filters && filters[accessor]}
      onChange={(e) => {
        if (e.target.name === accessor) {
          handleChange(e);
        }
      }}
      type='text'
      placeholder={`${Header} Filter`}
      name={accessor}
    />
  );
};

export default Input;
