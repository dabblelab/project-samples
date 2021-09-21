interface Props {
  title: String;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 px-5 m-3 py-3 rounded-lg hover:bg-gray-300"
    >
      {title}
    </button>
  );
};

export default Button;
