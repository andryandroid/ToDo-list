import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		};
	}

	addMessage(e) {
		if (e.target.value != "" && e.keyCode == 13) {
			this.setState({
				list: this.state.list.concat(e.target.value)
			});
			e.target.value = "";
		}
	}

	delete(index) {
		this.state.list.splice(index, 1);
		this.setState({
			list: this.state.list
		});
	}

	hola() {
		alert("Hola");
	}

	render() {
		return (
			<div className="card">
				<h1>TODOS</h1>
				<div className="card-body">
					<input
						type="text"
						className="form-control"
						placeholder="What needs to be done?"
						onKeyDown={e => this.addMessage(e)}
					/>
					<ul className="list-group">
						{this.state.list.map((singleTask, i) => {
							return (
								<li
									className="list-group-item"
									key={i}
									hover={() => this.hola()}>
									{singleTask}
									<a onClick={() => this.delete(i)}>
										<i className="fas fa-times" />
									</a>
								</li>
							);
						})}
						<p>{this.state.list.length} item letf</p>
					</ul>
				</div>
			</div>
		);
	}
}
