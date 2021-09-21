export interface Props {
  title: String;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return <h1 className="text-center">{title}</h1>;
};
