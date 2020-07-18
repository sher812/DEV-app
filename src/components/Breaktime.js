import React from "react";
import {Dropdown} from "react-bootstrap"

class Breaktime extends React.Component {
    state = {
        break: "Whenever",
        hours: "However long"
    }
    handleChangeBreak(eKey,e)  {
        e.preventDefault();
        console.log(eKey)
        this.setState({
            "break": eKey
        })
    }
    handleChangeHours(eKey,e) {
        e.preventDefault();
        console.log(eKey)
        this.setState({
            "hours": eKey
        })
    }
	render() {
		return (
			<form>
				<h3>How often do you want to go on break?</h3>
				<Dropdown onSelect={(eKey,e) => {this.handleChangeBreak(eKey,e)}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.break}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="Every 60 minutes">Every 60 minutes</Dropdown.Item>
                    <Dropdown.Item href="Every 70 minutes">Every 70 minutes</Dropdown.Item>
                    <Dropdown.Item href="Every 80 minutes">Every 80 minutes</Dropdown.Item>
                    <Dropdown.Item href="Every 90 minutes">Every 90 minutes</Dropdown.Item>
                    <Dropdown.Item href="Every 100 minutes">Every 100 minutes</Dropdown.Item>
                    <Dropdown.Item href="Every 110 minutes">Every 110 minutes</Dropdown.Item>
                    <Dropdown.Item href="Every 120 minutes">Every 120 minutes</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                    <h3>Up to how long do you wish to work per day in total?</h3>
                    <div class="dropdown">
                    <Dropdown onSelect={(eKey,e) => {this.handleChangeHours(eKey,e)}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.state.hours}
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="7 hours">7 hours</Dropdown.Item>
                    <Dropdown.Item href="8 hours">8 hours</Dropdown.Item>
                    <Dropdown.Item href="9 hours">9 hours</Dropdown.Item>
                    <Dropdown.Item href="10 hours">10 hours</Dropdown.Item>
                    <Dropdown.Item href="11 hours">11 hours</Dropdown.Item>
                    <Dropdown.Item href="12 hours">12 hours</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
				</div>
			</form>

		);
	}
} 

/* class Breaktime extends React.Component {
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
} */

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