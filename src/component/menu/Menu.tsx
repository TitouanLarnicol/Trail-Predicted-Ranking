import MenuButton from "./MenuButton";
import './Menu.scss'
import React, { Fragment } from 'react'
import { MenuItem } from "../../models/menu";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer/Footer";

function Menu() {
    const location = useLocation();
    const [menu, setMenu]: [MenuItem[], any] = useState([]);
    useEffect(() => {
        setMenu([
            { label: 'Races List', isActive: location.pathname === '/', url: '' },
            { label: 'Search', isActive: location.pathname === '/search', url: 'search' }
        ]);
    }, [location.pathname])

    return (
        <Fragment>
            <div className="MenuContainer row">
                <div className="four columns Center Menu Title">
                    <label>Trail</label>
                    <label>Predicted</label>
                    <label>Ranking</label>
                </div>
                <div className="eight columns Center-Buttons">
                    {menu.map((menuItem, i) => (
                        <MenuButton key={i} menuItem={menuItem} />
                    ))}
                </div>
            </div>
            <div className="Content">
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Menu;