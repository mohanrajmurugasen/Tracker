import React, { useState } from "react";
import Counter from "../counter";
import Heading from "../heading";
import SubHeading from "../heading/subHeading";
import Generic from "../generic";

type countType = {
  name: string;
  email: string;
  age?: number[];
};

const Home: React.FC = () => {
  const [count, setCount] = useState<countType>({
    name: "mohan",
    email: "",
    age: [1, 2, 3],
  });

  const [data, setData] = useState<countType | null>(null);
  const [general, setgeneral] = useState(["1", "3"]);

  return (
    <div>
      <Counter
        count={count}
        setCount={setCount}
        data={data}
        value=""
        handleEvent={(e) => {
          console.log("object", e);
        }}
        handleEvent2={(e) => {
          console.log("object", e);
        }}
      />
      <Generic general={["general"]} />
      <Generic general={[1]} />
      <SubHeading>
        <Heading styles={{ width: "10px" }}>Headings1</Heading>
      </SubHeading>
    </div>
  );
};

export default Home;
