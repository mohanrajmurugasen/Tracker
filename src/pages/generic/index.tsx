type GenericProps<T> = {
  general: T[];
};

const Generic = <T extends React.ReactNode>(props: GenericProps<T>) => {
  return <div>{props.general}</div>;
};

export default Generic;
