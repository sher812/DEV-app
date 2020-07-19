import React from "react";
import {Dropdown} from "react-bootstrap"
import "../App.css";

class Breaktime extends React.Component {
    state = {
        break: "Every 60 minutes",
        hours: "8 hours"
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
					<div class="row">
						<div class = "col-lg-8">
						<h3 className = "title1">How often do you want to go on break?</h3>
						</div>
						<div class = "col-lg-4" className = "btnBrk">
						<Dropdown onSelect={(eKey,e) => {this.handleChangeBreak(eKey,e)}}>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
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
						</div>
					</div>

					<div class="row">
						<div class = "col-lg-8">
						<h3 className = "title1">Up to how long do you wish to work per day in total?</h3>
						</div>

						<div class = "col-lg-4" className = "btnBrk">
						<div class="dropdown">
						<Dropdown onSelect={(eKey,e) => {this.handleChangeHours(eKey,e)}}>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
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

					</div>
						
						
					</div>
				</form>

		);
	}
} 

export default Breaktime;