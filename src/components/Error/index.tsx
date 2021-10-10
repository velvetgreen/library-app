import React from 'react';
import s from './index.module.css';

export const Error: React.FC<{error: any}> = ({ error }) => {
  console.error(error); // eslint-disable-line
  return (
    <div className={s.root}>Something went wrong</div>
  );
};
