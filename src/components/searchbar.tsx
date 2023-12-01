import { Genre } from "@/pages/onboarding/genre-selection";
import React, { FC, useState, ChangeEvent } from "react";

interface SearchBarProps {
    forOnboarding: boolean,
    genres?: Genre[]
};

const SearchBar: FC<SearchBarProps> = ({ forOnboarding, genres }) => {
    return (
        <div className="flex w-1/3 justify-center items-center">
            <i className={`fa-solid fa-magnifying-glass ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EBEBEB]'} h-7 flex justify-center items-center w-7`}></i>
            <input
                type="text"
                placeholder="Search"
                className={`w-4/5 h-7 ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EBEBEB]'}`}
            />
        </div>
    )
};

export default SearchBar;