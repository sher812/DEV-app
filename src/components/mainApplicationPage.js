import React from "react";

class MainApplicationPage extends React.Component {
	render() {
		return (
			// <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
				 aria-labelledby="exampleModalLabel" aria-hidden="true">

			<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="row">
								<div className="col-3">
									<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
										 aria-orientation="vertical">
										<a className="nav-link active" id="v-pills-home-tab" data-toggle="pill"
										   href="#v-pills-home" role="tab" aria-controls="v-pills-home"
										   aria-selected="true">Home</a>
										<a className="nav-link" id="v-pills-profile-tab" data-toggle="pill"
										   href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
										   aria-selected="false">Profile</a>
										<a className="nav-link" id="v-pills-messages-tab" data-toggle="pill"
										   href="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
										   aria-selected="false">Messages</a>
										<a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
										   href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
										   aria-selected="false">Settings</a>
									</div>
								</div>
								<div className="col-9">
									<div className="tab-content" id="v-pills-tabContent">
										<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
											 aria-labelledby="v-pills-home-tab">...
										</div>
										<div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
											 aria-labelledby="v-pills-profile-tab">...
										</div>
										<div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
											 aria-labelledby="v-pills-messages-tab">...
										</div>
										<div className="tab-pane fade" id="v-pills-settings" role="tabpanel"
											 aria-labelledby="v-pills-settings-tab">...
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MainApplicationPage;