import React from "react";

class Breaktime extends React.Component {
    state = {
        break: "Whenever",
        hours: "However long"
    }
	render() {
		return (
			<form>
				<h3>How often do you want to go on break?</h3>
				<div>
                    <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                    >
                    <option value="Orange">Orange</option>
                        <option value="Radish">Radish</option>
                        <option value="Cherry">Cherry</option>
                    </select>
                    <p>{message}</p>
                </div>        
				<h3>Up to how long do you wish to work per day in total?</h3>
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{this.state.hours}
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange = {this.handleChange}>
						<a class="dropdown-item" id = "7 hours">7 hours</a>
						<a class="dropdown-item" id ="8 hours">8 hours</a>
						<a class="dropdown-item" id = "9 hours">9 hours</a>
						<a class="dropdown-item" id = "10 hours">10 hours</a>
						<a class="dropdown-item" id = "11 hours">11 hours</a>
						<a class="dropdown-item" id = "12 hours">12 hours</a>
					</div>
				</div>
			</form>

		);
	}
}

/* class Breaktime extends React.Component {
	render() {
		return (
			<form>
				<h3>How often do you want to go on break?</h3>
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{this.state.break}
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange = {this.handleChange}>
						<a class="dropdown-item" id = "Every 60 minutes">Every 60 minutes</a>
						<a class="dropdown-item" id = "Every 70 minutes">Every 70 minutes</a>
						<a class="dropdown-item" id = "Every 80 minutes">Every 80 minutes</a>
						<a class="dropdown-item" id = "Every 90 minutes">Every 90 minutes</a>
						<a class="dropdown-item" id = "Every 100 minutes">Every 100 minutes</a>
						<a class="dropdown-item" id = "Every 110 minutes">Every 110 minutes</a>
						<a class="dropdown-item" id ="Every 120 minutes">Every 120 minutes</a>
					</div>
				</div>
				<h3>Up to how long do you wish to work per day in total?</h3>
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						{this.state.hours}
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange = {this.handleChange}>
						<a class="dropdown-item" id = "7 hours">7 hours</a>
						<a class="dropdown-item" id ="8 hours">8 hours</a>
						<a class="dropdown-item" id = "9 hours">9 hours</a>
						<a class="dropdown-item" id = "10 hours">10 hours</a>
						<a class="dropdown-item" id = "11 hours">11 hours</a>
						<a class="dropdown-item" id = "12 hours">12 hours</a>
					</div>
				</div>
			</form>

		);
	}
} */


/* class Breaktime extends React.Component {
	render() {
		return (
			<form>
				<h3>How often do you want to go on break?</h3>
					<div class="btn-group" role="group" aria-label="...">
						<button type="button" class="btn btn-primary">Every 60 minutes</button>
						<button type="button" class="btn btn-secondary">Every 70 minutes</button>
						<button type="button" class="btn btn-success">Every 80 minutes</button>
						<button type="button" class="btn btn-danger">Every 90 minutes</button>
						<button type="button" class="btn btn-warning">Every 120 minutes</button>
					</div>
				<h3>Up to how long do you wish to work per day in total?</h3>
				<div class="btn-group" role="group" aria-label="...">
					<button type="button" class="btn btn-primary">7 hours</button>
					<button type="button" class="btn btn-secondary">8 hours</button>
					<button type="button" class="btn btn-success">9 hours</button>
					<button type="button" class="btn btn-danger">10 hours</button>
				</div>
			</form>

		);
	}
} */



/* class Breaktime extends React.Component {
	render() {
		return (
			<form>
				<div class="form-group">
					<h3>How often do you want to go on break?</h3>
					<button type="button" class="btn btn-primary">Every 60 minutes</button>
					<button type="button" class="btn btn-secondary">Every 70 minutes</button>
					<button type="button" class="btn btn-success">Every 80 minutes</button>
					<button type="button" class="btn btn-danger">Every 90 minutes</button>
					<button type="button" class="btn btn-warning">Every 120 minutes</button>
				</div>
				<div class="form-group">
					<h3>Up to how long do you wish to work per day in total?</h3>
					<button type="button" class="btn btn-primary">7 hours</button>
					<button type="button" class="btn btn-secondary">8 hours</button>
					<button type="button" class="btn btn-success">9 hours</button>
					<button type="button" class="btn btn-danger">10 hours</button>
				</div>
			</form>

		);
	}
} */
export default Breaktime;