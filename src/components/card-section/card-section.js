import React from 'react';
import './card-section.css'

const CardSection = (props) => {
    const {title, elems} = props;

    let giveRussianTitle = () => {
        let r_title = '';

        switch (title) {
            case 'training' : r_title = 'Тренинги';
            break;

            case 'course' : r_title = 'Курсы';
            break;

            case 'test' : r_title = 'Тесты';
            break;

            case 'post-training' : r_title = 'Отработка навыка';
            break;
        }

        return r_title;
    }

    return(
        <div>
            <h1>{giveRussianTitle(title)}</h1>
            <div className="card-section-wrapper">
                {elems}
            </div>

        </div>

    )
}

export default CardSection;