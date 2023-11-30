import { Genre } from "@/pages/onboarding/genre-selection";
import React, { FC, useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface SearchBarProps {
    forOnboarding: boolean,
    genres?: Genre[]
};

const SearchBar: FC<SearchBarProps> = ({ forOnboarding, genres }) => {
    return (
        <div className="flex w-1/3 justify-center bg-[#2D2D2D] items-center">

            <input
                type="text"
                placeholder="Search"
                className={`w-4/5 h-2/4 ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EBEBEB]'}`}
            />
        </div>
    )
};

export default SearchBar;