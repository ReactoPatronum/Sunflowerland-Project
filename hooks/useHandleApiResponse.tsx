import { setNFTs } from "@/redux/features/nftSlices";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

interface SuccessResponse {
  data: {
    isSuccess: true;
    message: string;
    data: any;
  };
  status: number;
}

interface ErrorResponse {
  error: {
    data: {
      isSuccess: false;
      message: string;
    };
  };
  status: number;
}

type DataResponse = SuccessResponse | ErrorResponse;

export function useHandleApiResponse() {
  const dispatch = useDispatch();

  const handleApiResponse = async (response: DataResponse) => {
    console.log(response);
    if ("data" in response) {
      toast.success(response.data.message);
      dispatch(setNFTs(response?.data?.data));
    } else if ("error" in response) {
      console.log(response.error.data.message);
      toast.error(response.error.data.message);
    } else {
      toast.error("An error occurred.");
    }
  };

  return handleApiResponse;
}
