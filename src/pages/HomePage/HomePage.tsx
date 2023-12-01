import React, { useState } from "react";
import "./HomePage.scss";
import { Header } from "../../components/Header/Header";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Dictionary, DictionaryFetchStates, DictionaryTermNotFound } from "../../types";
import { useFetchDictionary } from "../../hooks/useFetchDictionary";
import { TermNotFound } from "../../components/TermNotFound/TermNotFound";
import { Glossary } from "../../components/GlossaryComponents/Glossary/Glossary";
import { Loader } from "../../components/UI/Loader/Loader";

export function HomePage() {
  const [searchValue, setSearchValue] = useState<string | undefined>("");
  const [didSubmitForm, setDidSubmitForm] = useState<boolean>(false);
  const { data, isLoading }: DictionaryFetchStates = useFetchDictionary(searchValue, didSubmitForm);
  const isInvalidTerm = (data as DictionaryTermNotFound)?.message;
  const isValidData = Array.isArray(data);
  
  const renderDictionaryResult = (): JSX.Element | null => {
    if (isLoading) {
      return <Loader />;
    } else if (isInvalidTerm) {
      return <TermNotFound />;
    } else if (isValidData) {
      return <Glossary wordInfo={data as unknown as Dictionary[]} />;
    }

    return null;
  };

  return (
    <main className="home-container">
      <Header />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setDidSubmitForm={setDidSubmitForm} />
      {renderDictionaryResult()}
    </main>
  );
}
