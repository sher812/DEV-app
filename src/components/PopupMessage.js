import React from 'react';
import './PopupMessage.css'

function PopupMessage( props ) {

	const popupType = [
		{
			type: 'takeBreak',
			title: 'Manatu',
			body: [ 'You should take a break :D' ],
			buttonMessage: [ 'Later', 'Go on a break' ]
		},
		{
			type: 'leaveWork',
			title: 'Manatu',
			body: [ 'You have worked for eight hours, you can get off work now!' ],
			buttonMessage: [ 'Leave work' ]
		},
		{
			type: 'onBreak',
			title: 'Manatu',
			body: [ 'You are on a break' ],
			buttonMessage: [ 'View your todo list', 'Return to work' ]
		},
		{
			type: 'todoList',
			title: null,
			body: [ 'Drink water', 'Take a walk', 'Get some fresh air', 'Take a nap' ],
			buttonMessage: [ 'OK' ]
		},
	];

	const messagePopup = popupType[ props.type ]

	function buttonClicked( event ) {
		const messageInButton = event.target.innerHTML;

		const buttonMessages = messagePopup.buttonMessage;
		buttonMessages.map( ( message, index ) => {
			switch ( message ) {
				case 'Later':
					return props.changePopup( null );
				case 'Go on a break':
					return props.changePopup( '2' );
				case 'Leave work':
					return props.changePopup( null );
				case 'View your todo list':
					return props.changePopup( '3' );
				case 'Return to work':
					return props.changePopup( null );
				case 'OK':
					return props.changePopup( '2' );
			}
		})
	}

	function renderButton() {
		const messageButton = messagePopup.buttonMessage

		return (
			messageButton.map( ( message, index ) => {
				return(
					<button type="button"
							className="btn btn-primary"
							onClick={ ( e ) => buttonClicked( e ) }
					>{ message }</button>
				);
			})
		);
	}

	function renderBodyMessage() {
		const bodyMessage = messagePopup.body;

		return (
			bodyMessage.map( ( message, index ) => {
				return(
					<p>{ message }</p>
				);
			})
		);
	}

	function renderTitle() {
		const title = messagePopup.title;

		if ( title ) {
			return (
				<div className="modal-header">
					<h5 className="modal-title">{ messagePopup.title }</h5>
				</div>
			);
		}
	}

	return (
		<div id="popupMessageBox" className="modal">

			<div  id={'popupMessageContent'} className="modal-content">
				{ renderTitle() }

				<div className="modal-body" style={{ textAlign: 'left' }}>
					{ renderBodyMessage() }
				</div>

				<div className="modal-footer">
					{ renderButton() }
				</div>
			</div>

		</div>
	);
}

export default PopupMessage;