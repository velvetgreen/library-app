import React from 'react';
import { Search } from '../Search';
import s from './index.module.css';

export const Header: React.FC = () => (
  <div className={s.root}>
    <Search />
  </div>
);
