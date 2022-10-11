import React, { useState, useEffect } from 'react';
import { Column } from 'react-table';
import { Data } from '../../interfaces';
import './styles.css';

interface ColumnsControlsProps {
  columns: Column<Data>[];
  setColumnOrder: (
    updater: string[] | ((columnOrder: string[]) => string[])
  ) => void;
}

const ColumnsControls = ({ columns, setColumnOrder }: ColumnsControlsProps) => {
  const [activeInput, setActiveInput] = useState(0);
  const [colsOrder, setColsOrder] = useState([
    ...columns.map((col: any) => ({
      id: col['id'],
      title: col['Header'],
      toggleHidden: col['toggleHidden'],
    })),
  ]);

  const handleUpBtn = () => {
    const index = activeInput;

    if (index === 0) return;

    setActiveInput((_preIndex: number) => _preIndex - 1);

    setColsOrder((_prevState_) => {
      const _prevState = [..._prevState_];
      const previousElement = _prevState[index - 1];
      _prevState[index - 1] = _prevState[index];
      _prevState[index] = previousElement;
      return _prevState;
    });
  };

  const handleDownBtn = () => {
    const index = activeInput;

    if (index === colsOrder.length - 1) return;

    setActiveInput((_preIndex: number) => _preIndex + 1);

    setColsOrder((_prevState_) => {
      const _prevState = [..._prevState_];
      const previousElement = _prevState[index + 1];
      _prevState[index + 1] = _prevState[index];
      _prevState[index] = previousElement;

      return _prevState;
    });
  };

  useEffect(() => {
    setColumnOrder(colsOrder.map((_col) => _col['id']));
  }, [colsOrder, setColumnOrder]);

  return (
    <div className='columns-order-container'>
      <div className='btns-container'>
        <button onClick={handleUpBtn}>Up</button>
        <button onClick={handleDownBtn}>Down</button>
      </div>
      <div className='checkbox-container'>
        {colsOrder.map((col, idx) => {
          return (
            <div className='checkbox-item' key={col['id']}>
              <div className='checkbox'>
                <input
                  onChange={() => {
                    setActiveInput(idx);
                  }}
                  checked={activeInput === idx}
                  id={col['id']}
                  name={col['id']}
                  type='checkbox'
                />
                <label htmlFor={col['id']}>{col['title']}</label>
              </div>
              <button
                className='delete'
                onClick={() => {
                  col.toggleHidden();
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnsControls;
