// Container
import React, { ReactNode, useEffect, useState } from 'react';

// Container enthält die Logik
const Container: React.FC = () => {
  const [state, setState] = useState<string[]>([]);
  useEffect(() => {
    // fetch data
  }, []);
  return <List data={state} />;
};

// Innere Komponente enthält die Anzeige
const List: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <div>
      {data.map((v) => (
        <div>{v}</div>
      ))}
    </div>
  );
};

// Higher order Components z.B. https://v5.reactrouter.com/web/api/withRouter
function withFetch(InnerComp: React.ElementType) {
  async function fetchFn(url: string) {
    const response = await fetch(url);
    return response.json();
  }
  return function (props: any) {
    return <InnerComp {...props} fetch={fetchFn} />;
  };
}

// const CompWithFetch = withFetch(<MyDummyComponent />);

// render Props z.B. https://formik.org/docs/overview#the-gist
type Props = {
  children: (data: any) => ReactNode;
};
const MyRenderProps: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data
  }, []);

  return <div>{children(data)}</div>;
};

<MyRenderProps>
  {(data) => {
    return (
      <div>
        {data.map((v: string) => (
          <div>{v}</div>
        ))}
      </div>
    );
  }}
</MyRenderProps>;
