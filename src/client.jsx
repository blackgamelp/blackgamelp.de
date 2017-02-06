import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDom from 'react-dom';

import Timeline from './components/Timline';
import TimelineItem from './components/TimlineItem';
import SkillItem from './components/SkillItem';
import styles from './styles/base.sass';

import HeroImage from './img/hero.jpg?max-width=1920';
import Avatar from './img/avatar.jpg';
import BabelLogo from './img/babel.svg';
import GoogleCloud from './img/google-cloud.svg';
import ReactLogo from './img/react.svg';
import WebpackLogo from './img/icon-square-small-slack.png';

console.log('Hey :) want to see how its made? do you want the source code? then click https://github.com/blackgamelp/blackgamelp.de/ '); // eslint-disable-line no-console



class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {imprint:false};
	}
	send() {
		let email = this.contactEmail.value;
		let content = this.contactMsg.value;
		let name = this.contactName.value;
		this.contactEmail.value = '';
		this.contactMsg.value = '';
		this.contactName.value = '';
		var ajx = new XMLHttpRequest();
		ajx.open('POST', 'https://formspree.io/admin@blackgamelp.de', true);
		ajx.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		ajx.send('name='+name+'&_replyto='+email+'&message='+content);
		
	}
	openModal(e){
		e.preventDefault();
		this.setState({imprint:true});
	}
	closeModal(e){
		e.preventDefault();
		if(e.target.getAttribute('class') === styles.ModalBackground || e.target.getAttribute('class') === styles.ModalClose ){
			this.setState({imprint:false});
		}
	}
	navigateTo(name){
		let elem = document.getElementById(name);
		elem.scrollIntoView({behavior: 'smooth'});
        
	}
	render(){
		return (
    <div className={styles.app}>
        <div className={styles.Header + ' ' + styles.ActiveHeader}>
            <div className={styles.Content}>
                <div className={styles.Logo}>
                    <div className={styles.hexagon}>
                        <div className={styles.hexagon1}><div className={styles.hexagon2} style={{backgroundImage: 'url(\''+Avatar+'\')'}} /></div>
                    </div>
                </div>
                <div className={styles.Navigation}>
                    <div className={styles.NavItem} onClick={this.navigateTo.bind(this,'about')} >About</div>
                    {/**<div className={styles.NavItem}>Showcase</div>**/}
                    <div className={styles.NavItem} onClick={this.navigateTo.bind(this,'contact')}>Contact</div>
                </div>
            </div>
        </div>
        <div className={styles.ContentWrapper}>
            <div className={styles.Hero} style={{backgroundImage: 'url(\''+HeroImage+'\')'}}>
                <div className={styles.HeroContent}>
                    <div className={styles.HeroTitle}>CREATING ...</div>
                    <div className={styles.HeroSubTitle}>FRONTEND // USER INTERFACE // JAVASCRIPT</div>
                </div>
            </div>
            <div id="about" className={styles.ContentBox + ' ' + styles.AboutBox} style={{background:'#fff'}}>
                <div className={styles.Content}>
                    <div className={styles.ContentBoxHeader}>About Me</div>
                    <div className={styles.ProductIcon} style={{float:'left'}}>
                        <a href="https://webpack.js.org"><img src={WebpackLogo} /></a>               
                    </div>
                    <div className={styles.ProductIcon} style={{float:'left'}}>
                        <a href="https://facebook.github.io/react/"><img src={ReactLogo} /></a>               
                    </div>
                    <div className={styles.Avatar}>
                        <div className={styles.hexagon}>
                            <div className={styles.hexagon1}><div className={styles.hexagon2} style={{backgroundImage: 'url(\''+Avatar+'\')'}} /></div>
                        </div>Msg
                    </div>
                    <div className={styles.ProductIcon} style={{float:'right'}}>
                        <a href="https://cloud.google.com/"><img src={GoogleCloud} /></a>                   
                    </div>
                    <div className={styles.ProductIcon} style={{float:'right'}}>
                        <a href="http://babeljs.io/"><img src={BabelLogo} /></a>                   
                    </div>
                    <p>
                        <b>Minim tempor sint sunt excepteur ea dolor tempor aliquip incididunt consequat.</b> Lorem et ullamco do esse velit et sint duis aute occaecat anim minim aute. Eiusmod voluptate fugiat elit ullamco eu ut veniam cillum.
                        Minim tempor sint sunt excepteur ea dolor tempor aliquip incididunt consequat. Lorem et ullamco do esse velit et sint duis aute occaecat anim minim aute. Eiusmod voluptate fugiat elit ullamco eu ut veniam cillum.
                        Minim tempor sint sunt excepteur ea dolor tempor aliquip incididunt consequat. Lorem et ullamco do esse velit et sint duis aute occaecat anim minim aute. Eiusmod voluptate fugiat elit ullamco eu ut veniam cillum.
                    </p>
                    <div className={styles.ContentBoxHeader}>Tech - Skills</div>
                    <div className={styles.SkillItems}>
                        <SkillItem name="HTML" value="95" />
                        <SkillItem name="CSS" value="90" />
                        <SkillItem name="JAVASCRIPT / ES6" value="80" />
                        <SkillItem name="PHP" value="55" />
                        <SkillItem name="Python" value="55" />
                        <SkillItem name="Go" value="15" />
                        <SkillItem name="Photoshop" value="60" />
                        <SkillItem name="Illustrator" value="60" />
                    </div>

                    <div className={styles.ContentBoxHeader}>Soft - Skills</div>
                    <div className={styles.SkillItems}>
                        <SkillItem name="Adaptability" value="75" />
                        <SkillItem name="Critical thinking" value="80" />
                        <SkillItem name="Empathy" value="85" />
                        <SkillItem name="Willingness to learn" value="90" />
                        
                        
                    </div>
                    
                </div>
            </div>
            <div className={styles.ContentBox}>
                <div className={styles.Content}>
                    <div className={styles.ContentBoxHeader}>Timeline</div>
                    <Timeline>
                        <TimelineItem 
                            time = "September 2016 - now"
                            location = "React Slides"
                            subject = "-"
                            content = "Non et excepteur Lorem sit. Quis nisi occaecat cillum ex quis. Esse non excepteur aute proident qui elit. Id eu dolor id reprehenderit incididunt dolore enim elit."
                            />
                        <TimelineItem 
                            time = "August 2014 - July 2016"
                            location = "Conerusschule Norden"
                            subject = "Kaufmännerscher Assistent Schwerpunkt Informatik"
                            content = "Non et excepteur Lorem sit. Quis nisi occaecat cillum ex quis. Esse non excepteur aute proident qui elit. Id eu dolor id reprehenderit incididunt dolore enim elit."
                            />
                        <TimelineItem 
                            time = "Febuary 2014"
                            location = "Jugend Forscht"
                            subject = "Sonderpreis der IHK"
                            content = "Non et excepteur Lorem sit. Quis nisi occaecat cillum ex quis. Esse non excepteur aute proident qui elit. Id eu dolor id reprehenderit incididunt dolore enim elit."
                            />
                        <TimelineItem 
                            time = "August 2004 - July 2014"
                            location = "Inselschule Langeoog"
                            subject = "-"
                            content = "Non et excepteur Lorem sit. Quis nisi occaecat cillum ex quis. Esse non excepteur aute proident qui elit. Id eu dolor id reprehenderit incididunt dolore enim elit."
                            />
                    </Timeline>
                </div>
            </div>
            {/*
                <div className={styles.ContentBox}>
                <div className={styles.Content}>
                    <div className={styles.ContentBoxHeader}>Showcase</div>
                    <div className={styles.ShowCaseWrapper}>
                        <div className={styles.ShowCaseItem}></div>
                    </div>
                </div>
            </div>
                
            */}
            <div id="contact" className={styles.ContentBox}>
                <div className={styles.Content}>
                    <div className={styles.ContentBoxHeader}>Contact</div>
                    <div className={styles.ContactWrapper}>
                        <textarea ref={(input)=>{this.contactMsg = input;}} placeholder="Write you message :)" />
                        <input ref={(input)=>{this.contactEmail = input;}} type="email" placeholder="email" /><br/>
                        <input ref={(input)=>{this.contactName = input;}} type="text" placeholder="your name" /><br />
                        <button onClick={this.send.bind(this)} >Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.Footer} style={{backgroundImage: 'url(\''+HeroImage+'\')'}} >
            <div className={styles.Content}>
                &copy; 2017 Steffen Meyer - <a href="#" onClick={this.openModal.bind(this)}>Imprint</a><br />
                <div className={styles.SocialMediaButtons}>
                    <a href='https://github.com/blackgamelp/blackgamelp.de' target="_blank" ><div className={styles.FooterSocialMediaButton}>Source Code?</div></a>
                    <a href='https://github.com/blackgamelp' target="_blank" ><div className={styles.FooterSocialMediaButton}>Github</div></a>
                    <a href='https://soundcloud.com/steves-dead' target="_blank" ><div className={styles.FooterSocialMediaButton}>Soundcloud</div></a>
                </div>
            </div>
        </div>
        {
            this.state.imprint ? <div className={styles.ModalBackground} onClick={this.closeModal.bind(this)}>
            <div className={styles.Modal}>
                <div className={styles.ModalClose} onClick={this.closeModal.bind(this)}>X</div>
                <div className={styles.ModalHeader}>Imprint</div>
                <div className={styles.ModalContent}>
                    <p>Steffen Meyer<br />
                    Heerenhusstraße 7a<br />26465 Langeoog</p>
                    <p>Telefon: 04972 344<br />
                    E-Mail: <a href="mailto:admin@blackgamelp.de">admin@blackgamelp.de</a><br />
                    </p>
                    <br /><br /><h2>Disclaimer – rechtliche Hinweise</h2>
                    § 1 Warnhinweis zu Inhalten<br />
                    Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.<br />
                    <br />
                    § 2 Externe Links<br />
                    Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.<br />
                    <br />
                    § 3 Urheber- und Leistungsschutzrechte<br />
                    Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.<br />
                    <br />
                    Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.<br />
                    <br />
                    § 4 Besondere Nutzungsbedingungen<br />
                    Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.<p>Quelle: Juraforum.de - Impressum <a href="http://www.juraforum.de/impressum-generator/">hier</a> kostenlos online erstellen.</p>
                
                </div>
            </div>
        </div>: null
        }
    </div>);
	}
}



ReactDom.render(<App />,
    document.getElementById('root'));





