import React from 'react';

import styles from './styles.sass';

class Timeline extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			currentItem: 0,
		};
	}
	clickLeft(){
		if(this.state.currentItem === 0){
			return false;
		}
		this.setState({currentItem: this.state.currentItem - 1});
	}
	clickRight(){
		if(this.state.currentItem >= this.props.children.length -1){
			return false;
		}
		this.setState({currentItem: this.state.currentItem + 1});
	}
	render(){
		
		let children = React.Children.map(this.props.children, (child, i) => {
			if(i === this.state.currentItem){
				return React.cloneElement(child, {className:styles.TimeLineItem});
			}
			return React.cloneElement(child, {
				style: {
					display: 'none'
				},
				className: styles.TimeLineItem,
			});
			
		});
		return (<div className={styles.TimeLineWrapper}>
					<span style={{float:'left'}} onClick={this.clickLeft.bind(this)} >{'<'}</span>
                    <span style={{float:'right'}} onClick={this.clickRight.bind(this)} >{'>'}</span>
					{children}
					<div className={styles.TimeLineProgress} >
						<div 
							className={styles.TimeLineProgressBar} 
							style={{
								width: (this.state.currentItem + 1) / this.props.children.length * 100 + '%'
							}} />
					</div>
                </div>);
	}
}

export default Timeline;

/*
 <div className={styles.TimeLineItem}>
                            <span className={styles.TimeListItemTime}>2014 - 2016</span>
                            <span className={styles.TimeListItemHeader}>Conerusschule Norden</span>
                            <span className={styles.TimeListItemSubject}>Kaufmännerscher Assistent Schwerpunkt Informatik</span>
                            <p>
                                Non et excepteur Lorem sit. Quis nisi occaecat cillum ex quis. Esse non excepteur aute proident qui elit. Id eu dolor id reprehenderit incididunt dolore enim elit.
                            </p>
                        </div>
                        <div className={styles.TimeLineItem} style={{display:'none'}}></div>
                        <div className={styles.TimeLineItem} style={{display:'none'}}></div>
                        <div className={styles.TimeLineItem} style={{display:'none'}}></div>
                        <div className={styles.TimeLineItem} style={{display:'none'}}></div>
 */