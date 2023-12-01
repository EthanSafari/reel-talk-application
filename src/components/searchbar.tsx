import { GenreContext } from "@/context/Genre";
import { Genre } from "@/pages/onboarding/genre-selection";
import React, { FC, useState, ChangeEvent, useEffect, ComponentType, useContext } from "react";

interface SearchBarProps {
    forOnboarding: boolean,
    GenreComponent?: ComponentType<{genres: Genre[]}>
};

const SearchBar: FC<SearchBarProps> = ({ forOnboarding, GenreComponent }) => {
    const context = useContext(GenreContext);

    if (!context)
        return null;

    const {allGenres} = context;

    const [activeSearch, setActiveSearch] = useState<string>('');
    const [genreSearch, setGenreSearch] = useState<Genre[]>(Object.values(allGenres));


    useEffect(() => {
        setGenreSearch(Object.values(allGenres).filter(genre => genre.name.toLowerCase().includes(activeSearch.toLowerCase())));
    }, [activeSearch]);

    return (
        <>
            <div className={`flex ${!forOnboarding ? 'w-1/3' : 'w-3/4'} justify-center items-center`}>
                <button>
                    <i className={`fa-solid fa-magnifying-glass ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EAEAEA]'} h-7 flex justify-center items-center w-7 rounded-l`}></i>
                </button>
                <input
                    disabled={!forOnboarding}
                    type="text"
                    placeholder=" Search"
                    className={`w-4/5 h-7 ${forOnboarding ? 'bg-[#2D2D2D]' : 'bg-[#EAEAEA] rounded-r'}`}
                    value={activeSearch}
                    onChange={e => setActiveSearch(e.target.value)}
                />
            </div>
            {forOnboarding && GenreComponent && (
                <GenreComponent genres={genreSearch}/>
            )}
        </>
    )
};

export default SearchBar;
