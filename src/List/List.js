import React from 'react';
import Card from '../Card/Card';
import STORE from '../store';
import './List.css';

class List extends React.Component {
	render() {
		const cards = this.props.cardIds.map(card => {
			return (
				<Card
					key={card}
					title={STORE.allCards[card].title}
					content={STORE.allCards[card].content}
				/>
			);
		});
		return (
			<section className="List">
				<header className="List-header">
					<h2>{this.props.header}</h2>
				</header>
				<div className="List-cards">{cards}</div>
			</section>
		);
	}
}

export default List;
