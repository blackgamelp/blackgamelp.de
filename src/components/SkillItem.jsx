import React from 'react';

import styles from './styles.sass';

class SkillItem extends React.Component {
	render(){
		return (<div className={styles.SkillItem}>
                	<div className={styles.SkillItemBarWrapper}>
                    	<div className={styles.SkillItemBar} style={{width:this.props.value+'%'}} />
                    </div>
                    <span>{this.props.name}</span>
                </div>);
	}
}

export default SkillItem;
