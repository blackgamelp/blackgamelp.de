import React from 'react';

import styles from './styles.sass';

class TimelineItem extends React.Component {
	render(){
		return (<div className={this.props.className} style={this.props.style}>
					<div className={styles.TimeListItemTime}>{this.props.time}</div>
                    <div className={styles.TimeListItemHeader}>{this.props.location}</div>
                    <div className={styles.TimeListItemSubject}>{this.props.subject}</div>
					<p>{this.props.content}</p>
                </div>);
	}
}

export default TimelineItem;
