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
                        <text>
                          Name: xxxxx {"\n"}
                          </text> <br/>
                          <text>
                              Email: xxxxxx{"\n"} 
                          </text> <br/>
                          <text>Total points: xxxxx</text> 
                        </div>
                          
                    </div>
				</div>
			</>
		);
	}
}

export default profile