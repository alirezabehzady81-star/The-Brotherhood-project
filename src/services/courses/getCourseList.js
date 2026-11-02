import { useQuery } from "react-query";
import { http } from "../interceptor";

export const getCourseList = () => {
  return useQuery({
    queryFn: async () => {
      //   const response = await axios.get(
      //     "http://87.107.2.216:3001/Home/GetCoursesWithPagination",
      //   );
      const response = await http.get("/Home/GetCoursesWithPagination", {
        params: { RowsOfPage: 5},
      });
      console.log("response ==>", response);
      return response.data;
      // console.log(response)
    },
  });
};
