import React from "react";
import "./PersonalArea.css";
import Header from "../Header/Header";
import ListOfCards from "../ListOfCards/ListOfCards";


export default function PersonalArea(props) {

    return (<>
        <div className='personal-area-wrapper'>
            <Header text = "Личный кабинет"/>
            <div className='card-list-wrapper'>
                <ListOfCards currentPage = "personalArea" className = 'list-of-cards'/>
            </div>
            <div className='personal-info-wrapper'>
                <div className='main-info'>
                    <div className='user-image'>
                        <img className='user-image-img' src={require(`./Icon/avatar.svg`)} alt = "Card logo"/>
                    </div>
                    <div className='full-name'>Визгунов Андрей Дмитриевич</div>
                    <div className='mail'>vizgunov@gmail.com</div>
                    <div className='position'>Программист 3 категории</div>
                    <div className='birth-date'>Дата рождения: 01.01.1999</div>
                </div>

                <form className='additional-info'>
                    <p className='phone'>Телефон</p>
                    <input className='phone-input' type='text' value='+7(911)999-78-68'/>

                    <p className ='address'>Адрес</p>
                    <input className='address-input' type='text' value='Россия, г. Спб, ул. Попова 15, кв. 15'/>

                    <p className='about-me'>Дополнительная информация</p>
                    <input className='about-me-input' type='text'/>
                </form>



                <form>
                    <button className='save-button'>Сохранить</button>
                </form>
            </div>
        </div>
    </>);
}