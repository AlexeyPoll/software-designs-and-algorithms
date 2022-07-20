// import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';
import { UPDATE_FILTER } from '../../store';

import type { Store } from '../../storeTypes';


interface FiltersProps {
  store?: Store;
  dispatch?: (val) => void;
}

export const OPTIONS_TYPES = {
  WITHOUT_POSTS: 'Without posts',
  MORE_THEN_100: 'More than 100 posts'
}

const OPTIONS = [
  { title: OPTIONS_TYPES.WITHOUT_POSTS },
  { title: OPTIONS_TYPES.MORE_THEN_100 }
];

export function Filters(props: FiltersProps) {
  const onChange = ({ title }) => {
    props.dispatch({ type: UPDATE_FILTER, payload: title });
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li key={option.title}>
            <Checkbox
              checked={!!props.store.filters.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
