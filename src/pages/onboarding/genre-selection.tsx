import React, { FC } from "react";

type Genre = {
    id: number,
    name: string,
    icon: string,
    isSelected: boolean
};

const AllGenres: Genre[] = [
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
    return (
        <div>
            <ul>
                {
                    AllGenres.map(({ id, name, icon, isSelected }) => (
                        <li key={id}>
                            {`${icon} ${name} ${isSelected}`}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default GenreSelection;
