import React from 'react';

import { Star } from '../styled';
import { MainDataWrapper, TagList } from './ShowMainData.styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMAGE_NOT_FOUND} alt="show-cover" />
      <div className="text-side">
        <div className="headline">
          <h1>{name}</h1>
          <div>
            <Star active />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Tags:{' '}
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;
