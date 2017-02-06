import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDom from 'react-dom';

import Timeline from './components/Timline';
import TimelineItem from './components/TimlineItem';
import SkillItem from './components/SkillItem';
import styles from './styles/base.sass';

import HeroImage from './img/hero.jpg';
import Avatar from './img/avatar.jpg';
import BabelLogo from './img/babel.svg';
import GoogleCloud from './img/google-cloud.svg';
import ReactLogo from './img/react.svg';
import WebpackLogo from './img/icon-square-small-slack.png';

console.log('Hey :) '); // eslint-disable-line no-console


ReactDom.render(
    <div className={styles.app}>
        <div className={styles.Header + ' ' + styles.ActiveHeader}>
            <div className={styles.Content}>
                <div className={styles.Logo}>
                    <div className={styles.hexagon}>
                        <div className={styles.hexagon1}><div className={styles.hexagon2} style={{backgroundImage: 'url(\''+Avatar+'\')'}} /></div>
                    </div>
                </div>
                <div className={styles.Navigation}>
                    <div className={styles.NavItem}>About</div>
                    <div className={styles.NavItem}>Showcase</div>
                    <div className={styles.NavItem}>Contact</div>
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
            <div className={styles.ContentBox + ' ' + styles.AboutBox} style={{background:'#fff'}}>
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
                        </div>
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
            <div className={styles.ContentBox}>
                <div className={styles.Content}>
                    <div className={styles.ContentBoxHeader}>Contact</div>
                    <div className={styles.ContactWrapper}>
                        <textarea placeholder="Write you message :)" />
                        <input type="email" placeholder="email" /><br/>
                        <input type="text" placeholder="your name" /><br />
                        <button >Send</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.Footer} style={{backgroundImage: 'url(\''+HeroImage+'\')'}} >
            <div className={styles.Content}>
                &copy; 2017 Steffen Meyer - <a href="#">Imprint</a><br />
                <div className={styles.SocialMediaButtons}>
                    <a href='https://github.com/blackgamelp/blackgamelp.de' target="_blank" ><div className={styles.FooterSocialMediaButton}>Source Code?</div></a>
                    <a href='https://github.com/blackgamelp' target="_blank" ><div className={styles.FooterSocialMediaButton}>Github</div></a>
                    <a href='https://soundcloud.com/steves-dead' target="_blank" ><div className={styles.FooterSocialMediaButton}>Soundcloud</div></a>
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('root'));
