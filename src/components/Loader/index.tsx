import React from 'react';
import s from './index.module.css';

export const Loader: React.FC = () => (
  <div className={s.ldsRing}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
