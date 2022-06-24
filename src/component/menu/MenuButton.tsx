import './Menu.scss'
import React from 'react'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

function MenuButton(props: any) {

    return (
        <Link className={classnames(
            'Center',
            'MenuButton',
            props.menuItem.isActive && 'WithBorder'
        )}
            onClick={props.onClick} to={props.menuItem.url}>
            {props.menuItem.label}
        </Link>
    )
}

export default MenuButton;