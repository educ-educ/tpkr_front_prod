import CourseNavbar from "../components/navigation/Course/Navbar";
import * as React from 'react'
import "./pages.scss"
import {fetchWrapper } from '../_helpers';
import {useState, useLayoutEffect, useEffect} from 'react';
import {useParams} from 'react-router-dom';


export default function CoursePage() {

    let {courseId} = useParams();
    const [course, setCourse] = useState();

    return (
        <div className='course'>
            <CourseNavbar/>
            <div className="course__container">
                <div className = "course__container--title">
                    О курсе
                </div>
                <div className = "course__container--text">
                    ляяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяя яяяяяяяяя яяяяяяя
                    яяяяя яяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяяяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяя яяяяя
                    яяяяя яяяяяяяяяяяяяяяяяяя яяяяяяяя яяяяяяяяяяя яяяяяяяяяяя яяяяяяяяяя яяяяяяяяя
                    ляяя яяяяяяяяя яяяяяяяяя яяяя яяяяяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяя яяяяяяя
                    яяя яяяяяяяяяяя яяяяяяяяяяяяя яяяяяяяяяяя яяяяяяяя яяяяяя яяяяяя яяяяяя яяяяяяяяя
                    ляяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяя яяяяяяяяя яяяяяяя
                    яяяяя яяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяяяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяя яяяяя
                    яяяяя яяяяяяяяяяяяяяяяяяя яяяяяяяя яяяяяяяяяяя яяяяяяяяяяя яяяяяяяяяя яяяяяяяяя
                    ляяя яяяяяяяяя яяяяяяяяя яяяя яяяяяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяя яяяяяяя
                    яяя яяяяяяяяяяя яяяяяяяяяяяяя яяяяяяяяяяя яяяяяяяя яяяяяя яяяяяя яяяяяя яяяяяяяяя
                    ляяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяя яяяяяяяяя яяяяяяя
                    яяяяя яяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяяяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяя яяяяя
                    яяяяя яяяяяяяяяяяяяяяяяяя яяяяяяяя яяяяяяяяяяя яяяяяяяяяяя яяяяяяяяяя яяяяяяяяя
                    ляяя яяяяяяяяя яяяяяяяяя яяяя яяяяяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяя яяяяяяя
                    яяя яяяяяяяяяяя яяяяяяяяяяяяя яяяяяяяяяяя яяяяяяяя яяяяяя яяяяяя яяяяяя яяяяяяяяя
                    ляяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяяяяяя яяяяяя яяяяяяяяя яяяяяяя
                    яяяяя яяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяяяяяяяяяяя яяяяяяяяяяяяяяя яяяяяяя яяяяя
                    яяяяя яяяяяяяяяяяяяяяяяяя яяяяяяяя яяяяяяяяяяя яяяяяяяяяяя яяяяяяяяяя яяяяяяяяя
                    ляяя яяяяяяяяя яяяяяяяяя яяяя яяяяяяяяяяяяяя яяяяяяяяя яяяяяяяяяя яяяяяяя яяяяяяя
                    яяя яяяяяяяяяяя яяяяяяяяяяяяя яяяяяяяяяяя яяяяяяяя яяяяяя яяяяяя яяяяяя яяяяяяяяя
                </div>
            </div>
        </div>
    );
}