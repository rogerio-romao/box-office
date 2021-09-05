import React from 'react';

import ActorCard from './ActorCard';
import { Flexgrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <Flexgrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </Flexgrid>
  );
};

export default ActorGrid;
