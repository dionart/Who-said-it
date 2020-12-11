import React, {useEffect, useState} from 'react';

import '../styles/pages/landing.css'
import user from '../images/user.png'
import retweet from "../images/retweet.svg"
import like from "../images/like.svg"
import comments from "../images/comments.svg"
import trump from "../images/trump.jpg"
import manivela from '../images/manivela.jpg'
import data from '../server/server.json'
import logo from '../images/logo.jpg'
import ci from '../images/ci.png'
import ufpb from '../images/ufpb.png'

function Landing(){
    const [index, setIndex] = useState(0);
    const [isTrump, setIsTrump] = useState(false);
    const [isIA, setIsIA] = useState(false);
    
    useEffect(() =>{
        setIndex(getRandomInt(0,data.tweets.length-1))
    },[])
    
    function getRandomInt(min: number, max: number) {
        min = Math.ceil(0);
        max = Math.floor(data.tweets.length-1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const author = (param:string) =>{
        if(param === data.tweets[index].author){
            if(param === 'trump'){
                setIsTrump(true);
                $('#trump').css('transition','border 0.1s linear');
                $('#trump').css('border-color','green');
                $('#trump').css('border-width','3px');
                $('#ia').css('transition','border 0.1s linear');
                $('#ia').css('border-color','red');
                $('#ia').css('border-width','3px');
                setTimeout(()=>{
                    window.location.reload();
                }, 3000)
            }else{
                setIsIA(true);
                $('#trump').css('transition','border 0.1s linear');
                $('#ia').css('border-color','green');
                $('#ia').css('border-width','3px');
                $('#ia').css('transition','border 0.1s linear');
                $('#trump').css('border-color','red');
                $('#trump').css('border-width','3px');
                setTimeout(()=>{
                    window.location.reload();
                }, 3000)
            }
        }else{
            if(param === 'trump'){
                setIsIA(true);
                $('#trump').css('transition','border 0.1s linear');
                $('#trump').css('border-color','red');
                $('#trump').css('border-width','3px');
                $('#ia').css('transition','border 0.1s linear');
                $('#ia').css('border-color','green');
                $('#ia').css('border-width','3px');
                setTimeout(()=>{
                    window.location.reload();
                }, 3000)
            }else{
                setIsTrump(true);
                $('#trump').css('transition','border 0.1s linear');
                $('#ia').css('border-color','red');
                $('#ia').css('border-width','3px');
                $('#ia').css('transition','border 0.1s linear');
                $('#trump').css('border-color','green');
                $('#trump').css('border-width','3px');
                setTimeout(()=>{
                    window.location.reload();
                }, 3000)
            }
        }
    }

    return(
        <div id="page-landing">
            <div style={{height:"100px", position:"absolute",bottom:0}}>
                <img src={ci} style={{width:'40px', marginBottom:'25px'}}/>
                <img src={logo} style={{width:'100px'}}/>
                <img src={ufpb} style={{width:'30px', marginBottom:'25px'}}/>
                
            </div>
            <div className="content-wrapper">
                <main>
                    <h1 style ={{fontSize:'80px'}}>Who said it?</h1>
                    
                    <div className="tweet-content">   
                        <li>
                            <div className="info">
                                <div style={{display:'flex',flexDirection:"row"}}>
                                    <img src={isTrump ? trump : (isIA ? manivela : user)} alt="Avatar"/>

                                    <div style={{display:'flex',flexDirection:"column",paddingTop:'5px', marginLeft:'5px'}}>
                                        <strong>{isTrump ? 'Donald Trump' : ( isIA ? 'Dumb AI' :'Who Said It?')} </strong>
                                        <span>{isTrump ? '@realDonaldTrump' : ( isIA ? '@dumbAI' :'@whosaidit')}</span>
                                    </div>
                                    
                                </div>

                                <div style={{width:'100%'}}>
                                    <p>{data.tweets[index]["text-en"]}</p>
                                </div>

                                <hr style={{borderTop:'1px solid #ccd6dd'}}/>

                                <div className="actions">
                                    <a href=""><img src={comments} alt="Comments"/> {index * 20} </a>
                                    <a href=""><img src={retweet} alt="Retweet"/> {Math.ceil(index*3/2)} </a>
                                    <a href=""><img src={like} alt="Like"/> {index*50} </a>
                                </div>
                            </div>
                        </li>
                        <hr/>
                    </div> 

                    <div className="container">
                        <button id="trump" onClick={() => author('trump')}>
                            <img src={trump}/>
                            <h1>Trump</h1>
                        </button>
                        <button id="ia" onClick={() => author('IA')}>
                            <img src={manivela}/>
                            <h1>Dumb AI</h1>
                        </button>
                    </div>

                </main>

            </div>
        </div>
    );
}

export default Landing;