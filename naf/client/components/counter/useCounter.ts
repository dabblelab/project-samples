import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const useCounter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleIncrement = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(increment());
  };

  const handleDecrement = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(decrement());
  };

  return { count, handleIncrement, handleDecrement };
};

export default useCounter;
