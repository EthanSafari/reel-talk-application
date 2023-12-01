import { GenreContext } from "@/context/Genre";
import React, { FC, useState, ChangeEvent, useEffect, useContext } from "react";

type Genre = {
    id: number,
    name: string,
    icon: string,
    isSelected: boolean
};

interface SelectionProps {
    genres: Genre[];
};

const GenreSelection: FC<SelectionProps> = () => {
    const context = useContext(GenreContext);

    if (!context)
        return null;

    const { allGenres, setAllGenres, selectedGenres, setSelectedGenres, unselectedGenres, setUnselectedGenres } = context;

    const genreList = Object.values(allGenres);

    const [selectedGenreLength, setSelectedGenreLength] = useState<number>(0);

    const toggleSelected = (e: ChangeEvent<HTMLInputElement>, id: number, isSelected: boolean): void => {
        if (!isSelected && selectedGenreLength <= 4) {
            allGenres[id].isSelected = true;

            const newSelectedState = {...selectedGenres};
            newSelectedState[id] = allGenres[id];
            newSelectedState[id].isSelected = true;

            const newUnselectedState = {...unselectedGenres};
            delete newUnselectedState[id];

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

            setSelectedGenres(newSelectedState);
            setUnselectedGenres(newUnselectedState);
            setSelectedGenreLength(selectedGenreLength - 1);
        }
    };

    return (
        <div className="flex flex-col w-screen mt-4 items-center bg-stone-800">
            <ul className="flex flex-wrap w-10/12 justify-evenly">
                <div>
                    {
                        selectedGenres ? (
                            <>
                                <div>Selected Genres:</div>
                                <ul>
                                    {Object.values(selectedGenres).map(({ id, name, icon, isSelected }) => (
                                        <li key={id} className={`flex justify-evenly text-center container w-40 order-${id} ${!isSelected ? 'bg-white' : 'bg-yellow-500'} p-2 m-2 text-black rounded border-2 border-stone-500 min-w-fit`}>
                                            <div>
                                                {icon}
                                            </div>
                                            <div className="mx-1">
                                                {name}
                                            </div>
                                            <input type='checkbox' id={`${id}`} className="" value={id} checked={isSelected}
                                                onChange={(e) => toggleSelected(e, id, isSelected)}
                                            />
                                        </li>
                                    ))}
                                </ul>
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
                {
                    Object.values(unselectedGenres).map(({ id, name, icon, isSelected }) => (
                        <li key={id} className={`flex justify-evenly text-center container w-40 order-${id} ${!isSelected ? 'bg-white' : 'bg-yellow-500'} p-2 m-2 text-black rounded border-2 border-stone-500 min-w-fit`}>
                            <div>
                                {icon}
                            </div>
                            <div className="mx-1">
                                {name}
                            </div>
                            <input type='checkbox' id={`${id}`} className="" value={id} checked={isSelected}
                                onChange={(e) => toggleSelected(e, id, isSelected)}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default GenreSelection;
