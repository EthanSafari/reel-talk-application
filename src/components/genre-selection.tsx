import React, { FC, useState, ChangeEvent, useEffect } from "react";

type Genre = {
    id: number,
    name: string,
    icon: string,
    isSelected: boolean
};

interface SelectionProps {
    genres: Genre[];
};

const GenreSelection: FC<SelectionProps> = ({ genres }) => {
    const [allGenres, setAllGenres] = useState<Genre[]>(genres);
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

    useEffect(() => {
        setAllGenres(genres);
    }, [genres]);

    const toggleSelected = (e: ChangeEvent<HTMLInputElement>, id: number, isSelected: boolean): void => {
        let updatedGenres: Genre[] = [];
        if (!isSelected && selectedGenres.length <= 4)
            updatedGenres = allGenres.map(genre => genre.id === id ? { ...genre, isSelected: true } : genre);
        else
            updatedGenres = allGenres.map(genre => genre.id === id ? { ...genre, isSelected: false } : genre);
        setAllGenres(updatedGenres);
        setSelectedGenres(updatedGenres.filter(genre => genre.isSelected));
    };

    return (
        <div className="flex flex-col w-screen mt-4 items-center bg-stone-800">
            <ul className="flex flex-wrap w-10/12 justify-evenly">
                {/* <div>
                    {
                        selectedGenres.length > 0 ? (
                            <>
                                <div>Selected Genres:</div>
                                <ul>
                                    {selectedGenres.map(({ id, name, icon, isSelected }) => (
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
                </div> */}
                <div>
                    Choices Remaining: {5 - selectedGenres.length}
                </div>
                {
                    allGenres.map(({ id, name, icon, isSelected }) => (
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
