import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import Person from './Person';

type PersonContextType = [Person[], Dispatch<SetStateAction<Person[]>>] | null;

// 1. create new Context
const PersonContext = createContext<PersonContextType>(null);

type Props = {
  children: React.ReactNode;
};

// 2. create new Provider component (with value)
const PersonProvider: React.FC<Props> = ({ children }) => {
  const personState = useState<Person[]>([]);
  return (
    <PersonContext.Provider value={personState}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;

// 3. access context via useContext (with the corresponding Context object)
export function usePersonContext() {
  const personState = useContext(PersonContext);

  if (personState === null) {
    throw new Error('Nicht im Provider!');
  }

  return personState;
}
