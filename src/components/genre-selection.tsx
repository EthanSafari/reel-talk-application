import { GenreContext } from "@/context/Genre";
import React, { FC, useState, ChangeEvent, useContext } from "react";
import GenreList from "./genre-list";

const GenreSelection: FC = () => {
    const context = useContext(GenreContext);
    if (!context)
        return null;
    const { allGenres, setAllGenres, selectedGenres, setSelectedGenres, unselectedGenres, setUnselectedGenres } = context;

    const [selectedGenreLength, setSelectedGenreLength] = useState<number>(0);

    const toggleSelected = (id: number, isSelected: boolean): void => {
        if (!isSelected && selectedGenreLength <= 4) {
            allGenres[id].isSelected = true;

            const newSelectedState = {...selectedGenres};
            newSelectedState[id] = allGenres[id];
            newSelectedState[id].isSelected = true;

            const newUnselectedState = {...unselectedGenres};
            delete newUnselectedState[id];

            setAllGenres({...selectedGenres, ...unselectedGenres});
            setUnselectedGenres(newUnselectedState);
            setSelectedGenres(newSelectedState);
            setSelectedGenreLength(selectedGenreLength + 1);

        } else if (isSelected && selectedGenreLength >= 1) {
            allGenres[id].isSelected = false;

            const newUnselectedState = {...unselectedGenres};
            newUnselectedState[id] = allGenres[id];
            newUnselectedState[id].isSelected = false;

            const newSelectedState = {...selectedGenres};
            delete newSelectedState[id];

            setAllGenres({...selectedGenres, ...unselectedGenres});
            setSelectedGenres(newSelectedState);
            setUnselectedGenres(newUnselectedState);
            setSelectedGenreLength(selectedGenreLength - 1);
        }
    };

    return (
        <div className="flex flex-col w-screen mt-4 items-center bg-stone-800">
                <div>
                    {
                        selectedGenreLength > 0 ? (
                            <>
                                <div>Selected Genres:</div>
                                <GenreList genres={Object.values(selectedGenres)} func={toggleSelected} />
                            </>
                        ) : (
                            <div>
                                No Genres Selected
                            </div>
                        )
                    }
                </div>
                <div>
                    Choices Remaining: {5 - selectedGenreLength}
                </div>
                <GenreList genres={Object.values(unselectedGenres)} func={toggleSelected} />
        </div>
    );
};

export default GenreSelection;
