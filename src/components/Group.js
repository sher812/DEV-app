import * as React from "react";
import Profilepic from "./profilepic.png";


class Group extends React.Component {
	render() {
		return (
			<>
				
                <div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active" id="nav-group" role="tabpanel"
						 aria-labelledby="nav-home-tab">
                        <img src={Profilepic} alt="profile" className = "profilepic" />
                        <div className="settingText">
                        <text>Members: {"\n"}</text> <br/>
                        <text> <span className="tab">Jane</span>    Total points:xxxx</text> <br/>
                        <text> <span className="tab">Jake</span>   Total points:xxxx</text> <br/>
                        <text> <span className="tab">Bob</span>    Total points:xxxx</text> <br/>
                        <text> <span className="tab">Rachel</span> Total points:xxxx</text> <br/>
                        <text> <span className="tab">Huang</span>  Total points:xxxx</text> <br/>
                        </div>
                        <div className ="container">

                        <button type="button" className="btn btn-secondary" >Add</button>
                        <button type="button" className="btn btn-primary" >Remove</button>
                        </div>
                        
					</div>
					
				</div>
			</>
		);
	}
}

export default Group