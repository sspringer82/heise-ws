import { useState, useEffect } from 'react';

export function useFetch<T>(url: string): T[] {
  const [items, setItems] = useState<T[]>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [url]);

  return items;
}

// import React from 'react';
// import Person from '../Person';

// const List: React.FC = () => {
//   const persons = useFetch<Person>('http://localhost:8080/users');
//   return <div>{persons}</div>;
// };

// export default List;
