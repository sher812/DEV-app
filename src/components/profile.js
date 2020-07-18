import * as React from "react";
import Profilepic from "./profilepic.png";
import "../App.css"



class profile extends React.Component {
	render() {
		return (
			<>
				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-profile" role="tabpanel"
						 aria-labelledby="nav-home-tab">
                        <img src={Profilepic} alt="profile" className = "profilepic" />
                        <div className ="settingText">

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Name:
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									xxxxx
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Email:
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									xxxxxx
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Total points:
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									xxxxx
								</div>
							</div>
                        </div>
                          
                    </div>
				</div>
			</>
		);
	}
}

export default profile