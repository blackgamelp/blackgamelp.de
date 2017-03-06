import React from 'react';

import styles from './styles.sass';

class SkillItem extends React.Component {
	render(){
		const desc = (this.props.description === "" || this.props.description === null);

		return (<div className={styles.SkillItem}>
                	<div className={styles.SkillItemBarWrapper}>
                    	<div className={styles.SkillItemBar} style={{width:this.props.value+'%'}} />
                    </div>
					<span>{this.props.name}{desc ? null : " *"}</span>
					{
						desc ? null : 
						<div className={styles.SkillItemDescription}>
							{this.props.description}
						</div>
					}
                </div>);
	}
}

export default SkillItem;
