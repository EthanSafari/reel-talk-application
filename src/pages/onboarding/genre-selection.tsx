import React, { FC, useState, ChangeEvent } from "react";

export type Genre = {
    id: number,
    name: string,
    icon: string,
    isSelected: boolean
};

const initialGenres = [
    { id: 1, name: 'Action', icon: '💥', isSelected: false },
    { id: 2, name: 'Adult', icon: '🔞', isSelected: false },
    { id: 3, name: 'Adventure', icon: '🪂', isSelected: false },
    { id: 4, name: 'Animation', icon: '🖍️', isSelected: false },
    { id: 5, name: 'Biology', icon: '📚', isSelected: false },
    { id: 6, name: 'Bollywood', icon: '🇮🇳', isSelected: false },
    { id: 7, name: 'Comedy', icon: '😂', isSelected: false },
    { id: 8, name: 'Crime', icon: '🕵️', isSelected: false },
    { id: 9, name: 'Disaster', icon: '☄️', isSelected: false },
    { id: 10, name: 'Documentary', icon: '🎥', isSelected: false },
    { id: 11, name: 'Drama', icon: '🎭', isSelected: false },
    { id: 12, name: 'Family', icon: '👪', isSelected: false },
    { id: 13, name: 'Fantasy', icon: '🦄', isSelected: false },
    { id: 14, name: 'Film-Noir', icon: '🎞️', isSelected: false },
    { id: 15, name: 'History', icon: '📜', isSelected: false },
    { id: 16, name: 'Horror', icon: '🧟', isSelected: false },
    { id: 17, name: 'Game-Show', icon: '🎲', isSelected: false },
    { id: 18, name: 'Independent', icon: '📢', isSelected: false },
    { id: 19, name: 'International', icon: '🌎', isSelected: false },
    { id: 20, name: 'Music', icon: '🎧', isSelected: false },
    { id: 21, name: 'Musical', icon: '🎶', isSelected: false },
    { id: 22, name: 'Mystery', icon: '🔎', isSelected: false },
    { id: 23, name: 'News', icon: '📰', isSelected: false },
    { id: 24, name: 'Reality-TV', icon: '📺', isSelected: false },
    { id: 25, name: 'Romance', icon: '❤️', isSelected: false },
    { id: 26, name: 'Rom-Com', icon: '💏', isSelected: false },
    { id: 27, name: 'Sci-Fi', icon: '👽', isSelected: false },
    { id: 28, name: 'Talk-Show', icon: '🗣️', isSelected: false },
    { id: 29, name: 'Short', icon: '⏳', isSelected: false },
    { id: 30, name: 'Sport', icon: '🏈', isSelected: false },
    { id: 31, name: 'Thriller', icon: '😱', isSelected: false },
    { id: 32, name: 'War', icon: '⚔️', isSelected: false },
    { id: 33, name: 'Western', icon: '🤠', isSelected: false }
];

const GenreSelection: FC = () => {
    const [allGenres, setAllGenres] = useState<Genre[]>(initialGenres);
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

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
                {(
                    <div>
                        Choices Remaining: {5 - selectedGenres.length}
                    </div>
                )}
                {
                    allGenres.map(({ id, name, icon, isSelected }) => (
                        <li key={id} className={`flex justify-evenly text-center container w-40 order-${id} ${!isSelected ?  'bg-white' : 'bg-yellow-500'} p-2 m-2 text-black rounded border-2 border-stone-500 min-w-fit`}>
                            <div>
                                {icon}
                            </div>
                            <div className="mx-1">
                                {name}
                            </div>
                            <input type='checkbox' id={`${id}`} className="" value={id} checked={isSelected} onChange={(e) => toggleSelected(e, id, isSelected)} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default GenreSelection;
