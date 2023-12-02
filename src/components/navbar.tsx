import React, { FC, useState, ChangeEvent } from "react";
import SearchBar from "./searchbar";

const Navbar: FC = () => {
    return (
        <div className="w-screen h-12 bg-white flex flex-row text-black justify-evenly items-center cursor-pointer hover:cursor-not-allowed">
            <div className="flex w-screen px-4">
                <div className="w-1/3 flex justify-center">
                    <div className="mr-4 flex justify-center items-center">
                        <i className="fa-solid fa-film"></i>
                        <div className="ml-1 flex items-center font-semibold text-lg">
                            REEL TALK
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-zinc-600">
                        <div>
                            Browse
                        </div>
                        <div className="mx-3">
                            Community
                        </div>
                        <div>
                            Discussion
                        </div>
                    </div>
                </div>
                <SearchBar forOnboarding={false} />
                <div className="flex w-1/3 justify-center items-center text-zinc-600">
                    <div>
                        DemoUser
                    </div>
                    <div className="flex justify-around w">
                        <i className="fa-solid fa-user mr-2 ml-4"></i>
                        <i className="fa-solid fa-chevron-down flex justify-center items-center"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
