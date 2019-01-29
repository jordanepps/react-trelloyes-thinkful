import React, { Component } from 'react';
import Card from '../Card/Card';
import './List.css';

class List extends Component {
	static defaultProps = {
		header: '',
		cards: []
	};
	render() {
		const cards = this.props.cards.map((card, i) => {
			return <Card key={i} title={card.title} content={card.content} />;
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
