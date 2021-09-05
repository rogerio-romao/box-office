import React from 'react';

import ShowCard from './ShowCard';
import { Flexgrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <Flexgrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
        />
      ))}
    </Flexgrid>
  );
};

export default ShowGrid;
