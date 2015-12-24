import React from 'react';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="shui-splash-screen">
        		<table style="width:100%;height:100%;">
        			<tr>
        				<td style="height:60px;">

        				</td>
        			</tr>
        			<tr>
        				<td>
        					<div className="shui-button" onClick={this.onManualClicked.bind(this)}>Manual</div>
        					<div className="shui-button" onClick={this.onFromFileClicked.bind(this)}>From File</div>
        					<div className="shui-button" onClick={this.onFromGoogleDrive.bind(this)}>From Google Drive</div>
        				</td>
        			</tr>
        		</table>
        	</div>
        );
    }
}

export default SplashScreen;
