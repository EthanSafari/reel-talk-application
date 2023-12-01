import { Genre, GenreContext } from "@/context/Genre";
import React, { FC, useState, ChangeEvent, useContext } from "react";
import GenreList from "./genre-list";

interface SearchedGenreProps {
    searchedGenres: Genre[];
}

const GenreSelection: FC<SearchedGenreProps> = ({ searchedGenres }) => {
    const context = useContext(GenreContext);
    if (!context)
        return null;
    const { allGenres, setAllGenres, selectedGenres, setSelectedGenres, unselectedGenres, setUnselectedGenres } = context;

    const [selectedGenreLength, setSelectedGenreLength] = useState<number>(0);

    const toggleSelected = (id: number, isSelected: boolean): void => {
        if (!isSelected && selectedGenreLength <= 4) {
            allGenres[id].isSelected = true;

            const newSelectedState = { ...selectedGenres };
            newSelectedState[id] = allGenres[id];
            newSelectedState[id].isSelected = true;

            const newUnselectedState = { ...unselectedGenres };
            delete newUnselectedState[id];

            setAllGenres({ ...selectedGenres, ...unselectedGenres });
            setUnselectedGenres(newUnselectedState);
            setSelectedGenres(newSelectedState);
            setSelectedGenreLength(selectedGenreLength + 1);

        } else if (isSelected && selectedGenreLength >= 1) {
            allGenres[id].isSelected = false;

            const newUnselectedState = { ...unselectedGenres };
            newUnselectedState[id] = allGenres[id];
            newUnselectedState[id].isSelected = false;

            const newSelectedState = { ...selectedGenres };
            delete newSelectedState[id];

            setAllGenres({ ...selectedGenres, ...unselectedGenres });
            setSelectedGenres(newSelectedState);
            setUnselectedGenres(newUnselectedState);
            setSelectedGenreLength(selectedGenreLength - 1);
        }
    };

    if (searchedGenres.length < 33) {
        return (
            <>
                <div>
                    {
                        selectedGenreLength > 0 ? (
                            <div className="flex flex-col items-center my-4">
                                <div>Selected Genres:</div>
                                <GenreList genres={Object.values(selectedGenres)} func={toggleSelected} />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center my-4">
                                No Genres Selected, Please Select Preferred Genres.
                            </div>
                        )
                    }
                    <div className="flex flex-col items-center my-4">
                        Choices Remaining: {5 - selectedGenreLength}
                    </div>
                </div>
                <div className="flex flex-col w-screen mt-4 items-center bg-stone-800">
                    <GenreList genres={searchedGenres} func={toggleSelected} />
                </div>
            </>
        );
    };
    return (
        <div className="flex flex-col w-screen mt-4 items-center bg-stone-800">
            <div>
                {
                    selectedGenreLength > 0 ? (
                        <div className="flex flex-col items-center my-4">
                            <div>Selected Genres:</div>
                            <GenreList genres={Object.values(selectedGenres)} func={toggleSelected} />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center my-4">
                            No Genres Selected, Please Select Preferred Genres.
                        </div>
                    )
                }
            </div>
            <div className="flex flex-col items-center my-4">
                Choices Remaining: {5 - selectedGenreLength}
            </div>
            <GenreList genres={Object.values(unselectedGenres)} func={toggleSelected} />
        </div>
    );
};

export default GenreSelection;
