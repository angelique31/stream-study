import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  setSearchResults,
  clearSearchResults,
} from "../../../../../store/actions/searchResults";

import {
  SearchInputWrapper,
  StyledInput,
  IconWrapper,
  StyledForm,
} from "./SearchInput.styled";
import PlaceholderProvider from "../PlaceholderProvider/PlaceholderProvider";
import MagnifyingGlass from "../../../../../assets/icons/magnifyingGlass.svg";
import { searchMovies } from "../../../../../lib/searchFetcher";
import { useDebounce } from "../../../../../hooks/useDebounce";

const SearchInput = () => {
  const dispatch = useDispatch();
  // Vous n'avez plus besoin de useSelector ici car les résultats seront gérés par le parent
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [tempSearchValue, setTempSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(tempSearchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      // Votre logique de recherche
      searchMovies(debouncedSearchValue)
        .then((results) => {
          dispatch(setSearchResults(results));
        })
        .catch((error) => {
          console.error(error);
          dispatch(clearSearchResults());
        });
    }
  }, [debouncedSearchValue, dispatch]);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleChange = (e) => {
    setTempSearchValue(e.target.value);
  };

  return (
    <PlaceholderProvider>
      {({ placeholderText, isVisible }) => (
        <>
          {isVisible && (
            <StyledForm onSubmit={(e) => e.preventDefault()}>
              <SearchInputWrapper>
                <StyledInput
                  $visible={isSearchOpen}
                  type="search"
                  id="search_input"
                  placeholder={placeholderText}
                  value={tempSearchValue}
                  onChange={handleChange}
                />
                <IconWrapper
                  className="icon-wrapper"
                  onClick={handleSearchIconClick}
                >
                  <Image
                    src={MagnifyingGlass}
                    alt="Loupe de recherche"
                    layout="responsive"
                    objectFit="cover"
                  />
                </IconWrapper>
              </SearchInputWrapper>
            </StyledForm>
          )}
        </>
      )}
    </PlaceholderProvider>
  );
};

export default SearchInput;
