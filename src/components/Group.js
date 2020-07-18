import * as React from "react";
import Profilepic from "./profilepic.png";


class Group extends React.Component {
	render() {
		return (

                <div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-group" role="tabpanel"
						 aria-labelledby="nav-home-tab">
                        <img src={Profilepic} alt="profile" className = "profilepic" />
                        <div className="settingText">
                        <text>Members: {"\n"}</text> <br/>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Jane
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									Total points:xxxx
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Jake
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									Total points:xxxx
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Bob
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									Total points:xxxx
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Rachel
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									Total points:xxxx
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-4 tab">
									Huang
								</div>
								<div className="col-4" style={{ textAlign: 'left' }}>
									Total points:xxxx
								</div>
							</div>
                        </div>
                        <div className ="container">


                        <button type="button" className="btn btn-secondary" >Remove</button>
                        <button type="button" className="btn btn-primary" style={{ marginLeft: '10px' }}>Add</button>
                        </div>
                        
					</div>
					
				</div>
		);
	}
}

export default Group