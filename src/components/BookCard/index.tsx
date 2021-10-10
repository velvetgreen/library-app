import React, { useMemo } from 'react';
import cn from 'classnames';
import { BookType } from 'types';
import s from './index.module.css';

export const BookCard: React.FC<{item: BookType['volumeInfo']}> = ({ item }) => {
  const title = useMemo(() => item.title?.substring(0, 80), [item.title]);
  const authors = useMemo(() => item.authors?.slice(0, 5).join(', '), [item.authors]);

  return (
    <div className={s.root}>
      <div className={cn([s.cardImage], { [s.margin]: !item.categories })}>
        <div className={s.image}>
          {item.imageLinks && <img src={item.imageLinks.thumbnail} alt="cardImg" />}
        </div>
      </div>
      <div className={s.cardInfo}>
        {item?.categories && (
          <p className={s.category}>
            {item.categories[0]}
          </p>
        )}
        {item.title && (
          <p
            className={cn(
              [s.title],
              { [s.symbolsLeft]: item.title.length > 80 },
            )}
          >
            {title}
          </p>
        )}
        {item.authors && (
          <div className={s.authors}>
            {authors}
          </div>
        )}
      </div>

    </div>
  );
};
