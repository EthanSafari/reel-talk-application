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
                <div className="flex w-1/3 justify-center items-center">
                    <div>
                        DemoUser
                    </div>
                    <div className="flex justify-between">
                        <div className="border-full border-black border-solid border-black-solid">
                            <i className="fa-solid fa-user"></i>
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
