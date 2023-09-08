type subHeadingProps = {
  children: React.ReactNode;
};

const SubHeading = (props: subHeadingProps) => {
  return <div>{props.children}</div>;
};

export default SubHeading;
