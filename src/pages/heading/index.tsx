type headingProps = {
  children: string;
  styles: React.CSSProperties;
};

const Heading = (props: headingProps) => {
  return <div style={props.styles}>{props.children}</div>;
};

export default Heading;
