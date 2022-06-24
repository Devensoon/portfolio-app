import React from 'react'
import Cards from './comp/cards/Cards';
import Categories from './comp/categories/Categories';

function App() {

	const [items, setItems] = React.useState([])
	const [tagId, setTagId] = React.useState(0)
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		fetch('https://62b4465ca36f3a973d304407.mockapi.io/items?key=' + tagId)
			.then((res) => res.json())
			.then((arr) => {
				setItems(arr);
			})
	}, [tagId])
	return (
		<div className="app">
			<header>
				<div className="nav">
					<div className="logo">
						<img src="/img/logo.svg" alt="Logo" />
					</div>

					<div className="items">
						<a href="/">About</a>
						<a href="/">Services</a>
						<a href="/">Pricing</a>
						<a href="/">Blog</a>
					</div>

					<div className="btn">
						<button>CONTACT</button>
					</div>
				</div>

				<div className="title">
					<h1>Portfolio</h1>
					<p>Agency provides a full service range including technical skills, design, business understanding.</p>
				</div>
			</header>

			<Categories value={tagId} onClickTag={(i) => setTagId(i)} />

			<div className='wrapp'>

				{items.map((obj, id) => <Cards  onClickTag={(i) => setTagId(i)} key={id} show={show} title={obj.title} tag={obj.tag} imgUrl={obj.imgUrl} />)}

			</div>

			<div className="btn-open">
				<button onClick={() => setShow(!show)}>LOAD MORE</button>
			</div>

		</div>
	);
}

export default App;
