import React from 'react'

import './card.scss'

const Cards = ({ title, tag, imgUrl, id, show }) => {

	const [activeCard, setActiveCard] = React.useState(false)

	const onActiveCard = () => {
		setActiveCard(!activeCard)
	}

	return (
		<div className='container'>
			{show && <div key={id} className='card'>
				<div className={activeCard ? 'active' : ''} onClick={() => onActiveCard()}>
					<img src={imgUrl} alt="Url" />
				</div>
				<div className="card-items">
					<button>{tag}</button>
					<h1>{title}</h1>
				</div>
			</div>}
		</div>
	)
}

export default Cards