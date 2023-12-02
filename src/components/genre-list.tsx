import { Genre } from "@/context/Genre";
import { FC } from "react";

interface GenreProps {
    genres: Genre[];
    func: (id: number, isSelected: boolean) => void;
};

const GenreList: FC<GenreProps> = ({ genres, func }) => {
    return (
        <>
            <ul className="flex flex-wrap w-10/12 gap-0 justify-center">
                {genres.map(({ id, name, icon, isSelected }) => (
                    <li key={id} className={`flex justify-evenly text-center container w-40 order-${id} ${!isSelected ? 'bg-white' : 'bg-yellow-500'} p-2 m-2 text-black rounded border-2 border-stone-500 min-w-fit`}>
                        <div>
                            {icon}
                        </div>
                        <div className="mx-1">
                            {name}
                        </div>
                        <input type='checkbox' id={`${id}`} className="" value={id} checked={isSelected}
                            onChange={() => func(id, isSelected)}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default GenreList;
