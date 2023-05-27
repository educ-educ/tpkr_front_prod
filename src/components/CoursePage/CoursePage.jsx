import React from 'react';
import './CoursePage.css';

const CoursePage = () => {
    return (
        <div className="course-page">
            <div className="header">
                <div className="image-container">
                    <img
                        className="banner-image"
                        src="https://thumbs.dreamstime.com/z/%D0%BF%D1%83%D1%81%D1%82%D0%B0%D1%8F-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0-%D0%B3%D0%BE%D1%80%D1%8B-%D0%BA-%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D1%83-%D0%B2-%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0-170605275.jpg"
                        alt="Course Banner"
                    />
                </div>
                <h1 className="title">Пафосное название курса длинное</h1>
                <p className="description">Автор курса, город, какая-то длинная строка</p>
            </div>
            <div className="buttons">
                <div className="two-buttons">
                    <button className="author-button">Страница автора</button>
                    <button className="reviews-button">Отзывы</button>
                </div>
                <button className="register-button">Зарегистрироваться</button>
            </div>
            <div className="course-info">
                <div className="info-container">
                    <h2 className="info-title">О курсе</h2>
                    <div className="line"></div>
                    <p className="info-text">
                        Текст описания курса здесь...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
