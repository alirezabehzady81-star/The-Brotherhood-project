import { useQuery } from "react-query";
import { http } from "../interceptor";
// import axios from "axios";

export const GetArticleList = (params) => {

            
  return useQuery({
    queryKey:"getNewsList",
    queryFn: async () => {
      // const response = await axios.get(
      //   "http://87.107.2.216:3001/News",
      // );
      console.log("params in GetArticleList ==>", params)
      const response = await http.get("/News", {
        params: params,
      });
      console.log("response ==>", response);
      return response.data;
      // console.log(response)
    },
    refetchOnMount:true
  });
};


