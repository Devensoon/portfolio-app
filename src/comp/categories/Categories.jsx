import React from 'react'

import './index.scss'

const Categories = ({ value, onClickTag }) => {
    const name = ['Show all', 'Desing', 'Branding', 'Illustration', 'Motion']

    return (
        <div className="content">
            <ul>
                {name.map((items, i) =>
                    <li
                        key={i}
                        onClick={() => onClickTag(i)}
                        className={value === i ? 'active' : ''}
                    >
                        {items}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Categories