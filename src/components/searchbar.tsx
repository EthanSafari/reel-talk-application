import { Genre, GenreContext } from "@/context/Genre";
import React, { FC, useState, ComponentType, useContext } from "react";

interface SearchBarProps {
    forOnboarding: boolean,
    GenreComponent?: ComponentType<{ searchedGenres: Genre[] }>
};

const SearchBar: FC<SearchBarProps> = ({ forOnboarding, GenreComponent }) => {
    const context = useContext(GenreContext);
    const { allGenres } = context || {};
    const [activeSearch, setActiveSearch] = useState<string>('');
    return (
        <>
            <div className={`flex ${!forOnboarding ? 'w-1/3' : 'w-3/4 mt-10 mb-3'} justify-center items-center`}>
                <button>
                    <i className={`fa-solid fa-magnifying-glass ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EAEAEA] cursor-pointer hover:cursor-not-allowed'} h-7 flex justify-center items-center w-7 rounded-l`}></i>
                </button>
                <input
                    disabled={!forOnboarding}
                    type="text"
                    placeholder=" Search"
                    className={`w-4/5 h-7 ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EAEAEA] cursor-pointer hover:cursor-not-allowed'} rounded-r`}
                    value={activeSearch}
                    onChange={e => setActiveSearch(e.target.value)}
                />
            </div>
            {forOnboarding && GenreComponent && (
                <GenreComponent searchedGenres={Object.values(allGenres!).filter(genre => genre.name.toLowerCase().includes(activeSearch.toLowerCase()))} />
            )}
        </>
    )
};

export default SearchBar;
