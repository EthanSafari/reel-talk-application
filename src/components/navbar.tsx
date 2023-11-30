import React, { FC, useState, ChangeEvent } from "react";
import SearchBar from "./searchbar";

const Navbar: FC = () => {
    return (
        <div className="w-screen h-12 bg-white flex flex-row text-black justify-evenly items-center">
            <div className="flex w-screen px-4">
                <div className="w-1/3 flex justify-center">
                    <div>
                        REEL TALK
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Browse
                        </div>
                        <div>
                            Community
                        </div>
                        <div>
                            Discussion
                        </div>
                    </div>
                </div>
                <SearchBar forOnboarding={false} />
                <div className="flex w-1/3 justify-center">
                    <div>
                        USERNAME
                    </div>
                    <div className="flex justify-between">
                        <div>
                            User IMG
                        </div>
                        <div>
                            DROPDOWN
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;