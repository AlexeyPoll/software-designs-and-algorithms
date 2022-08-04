import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { SET_SEARCH } from '../../store';

import type { Store } from '../../storeTypes';


interface SearchProps {
  store?: Store;
  dispatch?: (val) => void;
}

export function Search(props: SearchProps) {
  const onChange = (value) => {
    props.dispatch({ type: SET_SEARCH, payload: value });
  }

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={props.store.search}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
