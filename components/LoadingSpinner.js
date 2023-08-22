import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => (
  <RotatingLines
    strokeColor="blue"
    strokeWidth={3}
    animationDuration={1}
    width={50}
    visible={true}
  />
);

export default LoadingSpinner;
