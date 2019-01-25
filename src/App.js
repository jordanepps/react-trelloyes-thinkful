import React, { Component } from 'react';
import List from './List/List';
import STORE from './store';
import './App.css';

class App extends Component {
	render() {
		const storeList = STORE.lists.map(list => {
			return <List key={list.id} header={list.header} cardIds={list.cardIds} />;
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
