interface Genre {
    name: string,
    icon: string
};

type Genres = {
    id: number,
    name: string,
    icon: string,
    isSelected: boolean
};

const uncompletedGenres: Genre[] = [
    { name: 'Action', icon: '💥' },
    { name: 'Adult', icon: '🔞'},
    { name: 'Adventure', icon: '🪂'},
    { name: 'Animation', icon: '🖍️'},
    { name: 'Biology', icon: '📚'},
    { name: 'Bollywood', icon: '🇮🇳'},
    { name: 'Comedy', icon: '😂'},
    { name: 'Crime', icon: '🕵️'},
    { name: 'Disaster', icon: '☄️'},
    { name: 'Documentary', icon: '🎥'},
    { name: 'Drama', icon: '🎭'},
    { name: 'Family', icon: '👪'},
    { name: 'Fantasy', icon: '🦄'},
    { name: 'Film-Noir', icon: '🎞️'},
    { name: 'History', icon: '📜'},
    { name: 'Horror', icon: '🧟'},
    { name: 'Game-Show', icon: '🎲'},
    { name: 'Independent', icon: '📢'},
    { name: 'International', icon: '🌎'},
    { name: 'Music', icon: '🎧'},
    { name: 'Musical', icon: '🎶'},
    { name: 'Mystery', icon: '🔎'},
    { name: 'News', icon: '📰'},
    { name: 'Reality-TV', icon: '📺'},
    { name: 'Romance', icon: '❤️'},
    { name: 'Rom-Com', icon: '💏'},
    { name: 'Sci-Fi', icon: '👽'},
    { name: 'Talk-Show', icon: '🗣️'},
    { name: 'Short', icon: '⏳'},
    { name: 'Sport', icon: '🏈'},
    { name: 'Thriller', icon: '😱'},
    { name: 'War', icon: '⚔️'},
    { name: 'Western', icon: '🤠'}
];

const genreBuilder = (genreArr: Genre[]): Genres[] => {
    const completedGenres: Genres[] = [];
    for (let i = 0; i < genreArr.length; i++) {
        const {name, icon} = genreArr[i];
        completedGenres.push({
            id: i + 1,
            name,
            icon,
            isSelected: false
        });
    };
    return completedGenres;
};

const completedGenresArr: Genres[] = genreBuilder(uncompletedGenres);

console.log(completedGenresArr);
