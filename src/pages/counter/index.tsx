type countType = {
  name: string;
  email: string;
  age?: number[];
};

interface CounterProps {
  count: countType;
  setCount: React.Dispatch<React.SetStateAction<countType>>;
  data: countType | null;
  value?: string;
  handleEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleEvent2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Counter = (props: CounterProps) => {
  const { count, setCount } = props;

  const handleClick = () => {
    setCount((count) => ({
      ...count,
      name: "raj",
    }));
  };
  return (
    <div>
      <div className="counter">
        <div data-testid="counter">Counter: {count?.age}</div>
        <button onClick={handleClick}>Change</button>
        <button onClick={(e) => props.handleEvent(e)}>Change2</button>
        <input value={props?.value} onChange={(e) => props.handleEvent2(e)} />
      </div>
    </div>
  );
};

export default Counter;
