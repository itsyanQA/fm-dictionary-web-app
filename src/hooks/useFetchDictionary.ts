import { useQuery } from "react-query";
import { DictionaryFetchStates } from "../types";
import { getDictionaryTerm } from "../api/queries";

export const useFetchDictionary = (searchTerm: string | undefined, isFormSubmit: boolean) => {
  const { data, isLoading }: DictionaryFetchStates = useQuery({
    queryKey: ["getDictionary", isFormSubmit],
    queryFn: () => getDictionaryTerm(searchTerm),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading };
};
