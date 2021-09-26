import React, { useContext, useState } from 'react';
import Content from './Content/Content';

var descrition = "Track the task to be faster."

export default function Footer() {
    return (
        <div className={"w-full bg-gray-900 flex-auto justify-items-center p-y-4 m-y-4"} id="footer-content">
            <div className="flex flex-wrap">
                <Content headline={"Task time"} description={descrition}/>
                <Content fb={true}/>
            </div>
            <footer className="p-4 text-white"> <small>&copy; Copyright {new Date().getFullYear()}, TaskTime</small> </footer>
        </div>
    )
}
