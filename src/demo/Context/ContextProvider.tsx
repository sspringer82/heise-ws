import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type ContextType = {
  name: string;
  age: number;
};

export const MyContext = createContext<
  [ContextType, Dispatch<SetStateAction<ContextType>>] | null
>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const myState = useState<ContextType>({ name: 'klaus', age: 19 });

  return (
    <MyContext.Provider value={myState}>
      <button
        onClick={() =>
          myState[1]((prevState) => ({ ...prevState, age: prevState.age + 1 }))
        }
      >
        grow older
      </button>
      {myState[0].age}
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;

export function useMyContext() {
  const value = useContext(MyContext);

  if (value === null) {
    throw new Error('Use this hook only in combination with a valid provider');
  }

  return value;
}
