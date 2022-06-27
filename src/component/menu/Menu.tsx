import MenuButton from "./MenuButton";
import './Menu.scss'
import React, { Fragment } from 'react'
import { MenuItem } from "../../models/menu";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";
import classnames from "classnames";

function Menu() {
    const location = useLocation();
    const navigate = useNavigate();
    const [menu, setMenu]: [MenuItem[], any] = useState([]);
    useEffect(() => {
        setMenu([
            { label: 'Compétitions', isActive: location.pathname === '/racelist', url: 'racelist' },
            { label: 'Rechercher', isActive: location.pathname === '/search', url: 'search' }
        ]);
    }, [location.pathname])

    const onIconClick = () => {
        navigate("/")
    }

    return (
        <Fragment>
            <div className="MenuContainer row">
                <div className="four columns Center Menu Title" onClick={onIconClick}>
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
            <div className={classnames(
                'Content',
                location.pathname === '/' && 'BgBlue',
                location.pathname !== '/' && 'AddPadding'
            )}>
                <Outlet />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Menu;