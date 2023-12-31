import GenreSelection from "@/components/genre-selection";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import TransitionButtons from "@/components/transition-buttons";
import { GenreProvider } from "@/context/Genre";
import React, { FC } from "react";

const GenreSelectionPage: FC = () => {
    return (
        <div className={`bg-stone-800 h-screen w-screen flex flex-col items-center`}>
            <Navbar />
            <div className="text-xl mt-10">
                Select your top 5 genres for movies and TV 
            </div>
            <GenreProvider>
                <SearchBar forOnboarding={true} GenreComponent={GenreSelection} />
            </GenreProvider>
            <TransitionButtons />
        </div>
    );
};

export default GenreSelectionPage;
