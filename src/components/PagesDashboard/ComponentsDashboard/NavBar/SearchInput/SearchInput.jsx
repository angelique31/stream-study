import React, { useState } from "react";
import Image from "next/image";
import {
  SearchInputWrapper,
  StyledInput,
  IconWrapper,
  StyledForm,
} from "./SearchInput.styled";

import PlaceholderProvider from "../PlaceholderProvider/PlaceholderProvider";

import MagnifyingGlass from "../../../../../assets/icons/magnifyingGlass.svg";

const SearchInput = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [tempSearchValue, setTempSearchValue] = useState("");

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour gérer la recherche
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setTempSearchValue(newValue);
  };

  return (
    <PlaceholderProvider>
      {({ placeholderText, isVisible }) => (
        <>
          {isVisible && ( // ajoutez cette ligne
            <StyledForm onSubmit={handleSubmit}>
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
                    alt="magnifyingGlass"
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
