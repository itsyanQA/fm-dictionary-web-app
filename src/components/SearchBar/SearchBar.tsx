import "./SearchBar.scss";
import { useState, Dispatch, SetStateAction } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

type SearchBarProps = {
  searchValue: string | undefined;
  setSearchValue: Dispatch<SetStateAction<string | undefined>>;
  setDidSubmitForm: Dispatch<SetStateAction<boolean>>;
};

export function SearchBar(props: SearchBarProps) {
  const { searchValue, setSearchValue, setDidSubmitForm } = props;
  const [isInputError, setIsInputError] = useState<boolean>(false);

  return (
    <div className="search-bar">
      <form
        className="search-bar__form"
        onSubmit={(e) => {
          e.preventDefault();

          if (!searchValue) {
            setIsInputError(true);
          } else {
            setIsInputError(false);
            setDidSubmitForm((prevState) => !prevState);
          }
        }}
      >
        <input
          className={`search-bar__input ${isInputError ? "search-bar__input--is-error" : ""}`}
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-bar__icon">
          <SearchIcon />
        </button>
      </form>
      {!!(isInputError && !searchValue) && <span className="search-bar__input-error-text">Whoops, can’t be empty…</span>}
    </div>
  );
}
