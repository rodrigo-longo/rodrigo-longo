import './MainPage.scss';
import swal from 'sweetalert';
import li from '../../assets/imgs/linkedin.svg';
import gh from '../../assets/imgs/github.svg';
import cv from '../../assets/imgs/cv.svg';
import cvRL from '../../assets/imgs/cvRL.jpg';
import evin from '../../assets/imgs/EVÎN.mp4';
import stance from '../../assets/imgs/STANCE.mp4';
import sniff from '../../assets/imgs/Sniff.mp4';
import { useState } from 'react';

export function MainPage() {

    const [showCv, setShowCv] = useState(false)

    function copyFn() {
        var copyText = document.getElementById("input");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
      
        swal("Email Copied");
    }
    
    window.addEventListener('scroll',()=>{
        const $$presentation = document.getElementById('presentation');
        const $$project1 = document.getElementById('project1');
        const $$project2 = document.getElementById('project2');
        const $$project3 = document.getElementById('project3');
        const $$end = document.getElementById('end');
        // console.log(Math.round(window.scrollY)); 
        //- imprimir el valor en px del scroll en la pantalla
        if(Math.round(window.scrollY) > 500 &  Math.round(window.scrollY) < 1778){
            $$presentation.classList.add('slide-in-right')
            $$presentation.classList.remove('visibility')
        } else {
            $$presentation.classList.add('visibility')
            $$presentation.classList.remove('slide-in-right')
        }
        if(Math.round(window.scrollY) > 1901){
            $$project1.classList.add('bounce-in-bottom')
            $$project1.classList.remove('visibility')
        } else {
            $$project1.classList.add('visibility')
            $$project1.classList.remove('bounce-in-bottom')
        }
        if(Math.round(window.scrollY) > 2318){
            $$project2.classList.add('bounce-in-bottom')
            $$project2.classList.remove('visibility')
        } else {
            $$project2.classList.add('visibility')
            $$project2.classList.remove('bounce-in-bottom')
        }
        if(Math.round(window.scrollY) > 2753){
            $$project3.classList.add('bounce-in-bottom')
            $$project3.classList.remove('visibility')
        } else {
            $$project3.classList.add('visibility')
            $$project3.classList.remove('bounce-in-bottom')
        }
        if(Math.round(window.scrollY) > 3621){
            $$end.classList.add('slide-in-elliptic-top-fwd')
            $$end.classList.remove('visibility')
        } else {
            $$end.classList.add('visibility')
            $$end.classList.remove('slide-in-elliptic-top-fwd')
        }
    })

    return (
        <>
            <a href="#" className="logo">
                RL
            </a>
            <input className="email" type="text" id="input" value="rodrigo.longo1431@gmail.com"/>
            <button className="email__btn" onClick={copyFn}></button>
            <div className="social">
                <span className="social__box">
                    <a target="_blank" href="https://www.linkedin.com/in/rodrigo-norberto-longo-810805201/">
                        <img src={li} alt="linkedin"></img>
                    </a>
                </span>
                <span className="social__box">
                    <a target="_blank" href="https://github.com/rodrigo-longo">
                        <img src={gh} alt="github"></img>

                    </a>
                </span>
                <span onClick={()=>{setShowCv(true)}}  className="social__box">
                    <img src={cv} alt="cv"></img>
                </span>
            </div>
            { showCv && <div className="cv">
                <div  onClick={()=>{setShowCv(false)}} className="cv__close">X</div>
                <img className="cv__img" src={cvRL}>

                </img>
            </div>}
            <div className="main" >
                <div className="main__intro">
                    ¿Buscas un <br />  Full Stack Developer  ?
                </div>
                <div className="main__text">
                    Si es así, sigue bajando
                </div>
                <div className="main__presentation hide" id="presentation">
                    Soy Rodrigo, desarrollo y diseño webs como esta.
                </div>
                <div className="main__portfolio">
                <div class="skew-arriba"></div>
                    <div className="main__likethis">
                        Y ESTAS...
                    </div>
                    <div className="project" id="project1">
                        <div className="project__info">
                            <div className="project__title">
                                EVÎN
                            </div>
                            <div className="project__content">
                                EVÎN es una aplicación web hecha con PHP y Symfony. <br/>
                                Esta es una app de citas que nos permetirá encontrar a nustro futuro evín (amor). <br/>
                                Actualmente sigue en desarrollo.
                            </div>
                            <a className="project__link" href="#">
                                Link page in construction
                            </a>
                        </div>
                        <video id="evin" className="project__image" muted autoPlay  loop>
                            <source src={evin}/>
                        </video>
                    </div>
                    <div className="project" id="project2">
                        <video id="evin" className="project__image" muted autoPlay  loop>
                            <source src={sniff}/>
                        </video>
                        <div className="project__info">
                            <div className="project__title">
                                SNIFF CLOTHE
                            </div>
                            <div className="project__content">
                                Catálogo de SNIFF CLOTHE, app desarrollada con React <br/>
                                Esta página es el catálogo web de la marca SNIFF CLOTHE, la cual se ve... ¡¡Increíble!! <br/>
                                Te recomiendo que la visites.
                            </div>
                            <a className="project__link" href="#">
                                Link page in construction
                            </a>
                        </div>
                    </div>
                    <div className="project" id="project3">
                        <div className="project__info">
                            <div className="project__title">
                                STANCE NATION
                            </div>
                            <div className="project__content">
                                A esta le tengo especial cariño, ya que fue mi primera maquetación de una página web. <br/>
                                En esta versión de STANCE NATION combino mis dos pasiones, los coches y programar. <br/>
                                Es una maquetación responsive, pero la web no tiene funcionalidad.
                            </div>
                            <a className="project__link" target="_blank" href="https://stance-nation.netlify.app">
                                Visit Page
                            </a>
                        </div>
                        <video id="stance" className="project__image" muted autoPlay loop>
                            <source src={stance}/>
                        </video>
                    </div>
                <div class="skew-abajo"></div>
                </div>


                <div className="contact" id="end">
                    <div className="contact__gb">
                        ¿Quieres trabajar conmigo?
                    </div>
                    <div className="contact__email">
                        Escribeme a:
                        <span onClick={copyFn}>
                            rodrigo.longo1431@gmail.com
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}