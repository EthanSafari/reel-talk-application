import React, { FC, useState, ComponentType } from "react";

interface SearchBarProps {
    forOnboarding: boolean,
    GenreComponent?: ComponentType
};

const SearchBar: FC<SearchBarProps> = ({ forOnboarding, GenreComponent }) => {
    const [activeSearch, setActiveSearch] = useState<string>('');

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
                <GenreComponent />
            )}
        </>
    )
};

export default SearchBar;
