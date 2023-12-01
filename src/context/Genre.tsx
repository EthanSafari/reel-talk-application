import { createContext, useState, FC, ReactNode, SetStateAction, Dispatch } from 'react';

type Genre = {
    id: number,
    name: string,
    icon: string,
    isSelected: boolean
};

type GenreContextType = {
    allGenres: { [id: number]: Genre };
    setAllGenres: Dispatch<SetStateAction<{ [id: number]: Genre }>>;
    selectedGenres: { [id: number]: Genre };
    setSelectedGenres: Dispatch<SetStateAction<{ [id: number]: Genre }>>;
    unselectedGenres: { [id: number]: Genre };
    setUnselectedGenres: Dispatch<SetStateAction<{ [id: number]: Genre }>>;
}

const initialGenres: { [key: number]: Genre } = {
    1: { id: 1, name: 'Action', icon: '💥', isSelected: false },
    2: { id: 2, name: 'Adult', icon: '🔞', isSelected: false },
    3: { id: 3, name: 'Adventure', icon: '🪂', isSelected: false },
    4: { id: 4, name: 'Animation', icon: '🖍️', isSelected: false },
    5: { id: 5, name: 'Biology', icon: '📚', isSelected: false },
    6: { id: 6, name: 'Bollywood', icon: '🇮🇳', isSelected: false },
    7: { id: 7, name: 'Comedy', icon: '😂', isSelected: false },
    8: { id: 8, name: 'Crime', icon: '🕵️', isSelected: false },
    9: { id: 9, name: 'Disaster', icon: '☄️', isSelected: false },
    10: { id: 10, name: 'Documentary', icon: '🎥', isSelected: false },
    11: { id: 11, name: 'Drama', icon: '🎭', isSelected: false },
    12: { id: 12, name: 'Family', icon: '👪', isSelected: false },
    13: { id: 13, name: 'Fantasy', icon: '🦄', isSelected: false },
    14: { id: 14, name: 'Film-Noir', icon: '🎞️', isSelected: false },
    15: { id: 15, name: 'History', icon: '📜', isSelected: false },
    16: { id: 16, name: 'Horror', icon: '🧟', isSelected: false },
    17: { id: 17, name: 'Game-Show', icon: '🎲', isSelected: false },
    18: { id: 18, name: 'Independent', icon: '📢', isSelected: false },
    19: { id: 19, name: 'International', icon: '🌎', isSelected: false },
    20: { id: 20, name: 'Music', icon: '🎧', isSelected: false },
    21: { id: 21, name: 'Musical', icon: '🎶', isSelected: false },
    22: { id: 22, name: 'Mystery', icon: '🔎', isSelected: false },
    23: { id: 23, name: 'News', icon: '📰', isSelected: false },
    24: { id: 24, name: 'Reality-TV', icon: '📺', isSelected: false },
    25: { id: 25, name: 'Romance', icon: '❤️', isSelected: false },
    26: { id: 26, name: 'Rom-Com', icon: '💏', isSelected: false },
    27: { id: 27, name: 'Sci-Fi', icon: '👽', isSelected: false },
    28: { id: 28, name: 'Talk-Show', icon: '🗣️', isSelected: false },
    29: { id: 29, name: 'Short', icon: '⏳', isSelected: false },
    30: { id: 30, name: 'Sport', icon: '🏈', isSelected: false },
    31: { id: 31, name: 'Thriller', icon: '😱', isSelected: false },
    32: { id: 32, name: 'War', icon: '⚔️', isSelected: false },
    33: { id: 33, name: 'Western', icon: '🤠', isSelected: false }
};

export const GenreContext = createContext<GenreContextType | undefined>(undefined);

interface GenreProviderProps {
    children: ReactNode;
    genres?: Genre[];
}


export const GenreProvider: FC<GenreProviderProps> = (props) => {
    const [allGenres, setAllGenres] = useState<{ [id: number]: Genre }>(initialGenres);
    const [selectedGenres, setSelectedGenres] = useState<{ [id: number]: Genre }>({});
    const [unselectedGenres, setUnselectedGenres] = useState<{ [id: number]: Genre }>(initialGenres);
    return (
        <GenreContext.Provider value={{
            allGenres, setAllGenres,
            selectedGenres, setSelectedGenres,
            unselectedGenres, setUnselectedGenres
        }}>
            {props.children}
        </GenreContext.Provider>
    );
};
