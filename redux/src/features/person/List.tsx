import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  fetchPersons,
  removePerson,
  selectPersons,
  selectPersonStatus,
} from './personSlice';

const List: React.FC = () => {
  const persons = useAppSelector(selectPersons);
  const status = useAppSelector(selectPersonStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPersons());
  }, []);

  if (status === 'loading') {
    return <div>...lade daten</div>;
  }

  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          {person.firstName}
          <button
            onClick={() => {
              const action = removePerson(person.id);
              dispatch(action);
            }}
          >
            löschen
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
