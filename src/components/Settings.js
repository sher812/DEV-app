import * as React from "react";

class Settings extends React.Component {
	render() {
		return (
			<>
				<nav>
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
						   role="tab" aria-controls="nav-home" aria-selected="true">Profile</a>
						<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
						   role="tab" aria-controls="nav-profile" aria-selected="false">Break Time</a>
						<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
						   role="tab" aria-controls="nav-profile" aria-selected="false">Groups</a>
					</div>
				</nav>

				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-home" role="tabpanel"
						 aria-labelledby="nav-home-tab">...
					</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">break time</div>
					<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
					<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
				</div>
			</>
		);
	}
}

export default Settings