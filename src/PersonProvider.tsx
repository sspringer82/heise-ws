import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import Person from './Person';

type PersonContextType = [Person[], Dispatch<SetStateAction<Person[]>>] | null;

const PersonContext = createContext<PersonContextType>(null);

type Props = {
  children: React.ReactNode;
};
const PersonProvider: React.FC<Props> = ({ children }) => {
  const personState = useState<Person[]>([]);
  return (
    <PersonContext.Provider value={personState}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;

export function usePersonContext() {
  const personState = useContext(PersonContext);

  if (personState === null) {
    throw new Error('Nicht im Provider!');
  }

  return personState;
}
