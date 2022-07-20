import { useState, useEffect, useReducer } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from '../types';

import { dataConverter } from './helpers/dataConverter';
import { createDataFormatter } from './helpers/dataFormatter';
import { reducer, initialState } from './store';


function App() {
  const [data, setData] = useState<Row[]>([]);
  const [store, dispatch] = useReducer(reducer, initialState);

  const dataFormatter = createDataFormatter(store);

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        console.log({ images, users, accounts });

        setData(dataConverter(users, images, accounts))
      }
    );
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters store={store} dispatch={dispatch} />
            <Sort dispatch={dispatch} />
          </div>
          <Search store={store} dispatch={dispatch} />
        </div>
        <Table rows={dataFormatter(data)} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
