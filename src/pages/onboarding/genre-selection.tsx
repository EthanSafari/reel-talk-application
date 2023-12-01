import GenreSelection from "@/components/genre-selection";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import { GenreProvider } from "@/context/Genre";
import React, { FC } from "react";

const GenreSelectionPage: FC = () => {
    return (
        <div className={` bg-stone-800 h-screen w-screen flex flex-col items-center`}>
            <Navbar />
            <GenreProvider>
                <SearchBar forOnboarding={true} GenreComponent={GenreSelection} />
            </GenreProvider>
        </div>
    );
};

export default GenreSelectionPage;
