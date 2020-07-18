import * as React from "react";
import Profile from "./profile";
import Group from "./Group";

class Settings extends React.Component {
	render() {
		return (
			<>
				<nav>
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
						   role="tab" aria-controls="nav-profile" aria-selected="true">Profile</a>
						<a className="nav-item nav-link" id="nav-breakTime-tab" data-toggle="tab" href="#nav-breakTime"
						   role="tab" aria-controls="nav-breakTime" aria-selected="false">Break Time</a>
						<a className="nav-item nav-link" id="nav-group-tab" data-toggle="tab" href="#nav-group"
						   role="tab" aria-controls="nav-group" aria-selected="false">Groups</a>
					</div>
				</nav>

				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-profile" role="tabpanel"
						 aria-labelledby="nav-home-tab">
						<Profile />
					</div>
					<div className="tab-pane fade" id="nav-breakTime" role="tabpanel" aria-labelledby="nav-breakTime-tab">break time
					</div>
					<div className="tab-pane fade" id="nav-group" role="tabpanel" aria-labelledby="nav-group-tab">
						<Group />
					</div>
					
				</div>
			</>
		);
	}
}

export default Settings  