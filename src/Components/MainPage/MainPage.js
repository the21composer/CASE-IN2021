import React from "react";
import "./MainPage.css";
import ListOfCards from "../ListOfCards/ListOfCards";
import CheckList from "../CheckList/CheckList";
import Header from "../Header/Header";
import News from "../News/News";


export default function MainPage(props) {

    //Поработать над новостями

    return (<>
        <div className='main-page-wrapper'>
            <Header text = "Здравствуйте, Андрей!"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "mainPage" className = 'list-of-cards'/>
            </div>
            <div className='check-list-wrapper'>
                <CheckList percent = {5}/>
            </div>
            <div className='news-wrapper'>
                <div className='news-heading'>Это может быть интересно:</div>
                <News
                    name = "Построить будущее на историческом фундаменте: ЛЭТИ провел международную дискуссию по реновации кампусов"
                info = "18 марта 2021 года по инициативе СПбГЭТУ «ЛЭТИ» состоялась онлайн-дискуссия «Академические пространства университетов будущего», в рамках которой эксперты из России, Нидерландов, Италии и Финляндии обсудили принципы и лучший опыт преобразования общественных и учебных пространств в университетах, основанных более 100 лет назад. "/>
            </div>
        </div>
    </>);
}