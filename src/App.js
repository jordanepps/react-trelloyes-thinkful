import React, { Component } from 'react';
import List from './List/List';
import './App.css';

class App extends Component {
	render() {
		const storeList = this.props.store.lists.map(list => {
			const cardData = [];
			list.cardIds.forEach(id => {
				cardData.push(this.props.store.allCards[id]);
			});
			return <List key={list.id} header={list.header} cards={cardData} />;
		});
		return (
			<div className="App">
				<header className="App-header">
					<h1>Trelloyes!</h1>
				</header>
				<div className="App-list">{storeList}</div>
			</div>
		);
	}
}

export default App;
