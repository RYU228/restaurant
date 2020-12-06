import React from 'react';
import moment, { Moment as MomentTypes } from 'moment';
import './calendar.css';
import { getNodeText } from '@testing-library/react';

class Calender extends React.Component {
    render() {
        const today = new Date();
        const thisMonth = new Date(2020, 11, 6);    //2020-12-1
        const firstDate = thisMonth.getDate();   //첫번째날
        const firstDay = thisMonth.getDay();    //요일
        const lastDate = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0).getDate();
        const preLastDate = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 0).getDate();
        console.log(firstDay);
        
        return (
            <div className="calendar_container">
                <div className="calendar_head">
                    <button
                    className="calendar_left">
                        왼
                    </button>
                    <button className="calendar_title">
                        월
                    </button>
                    <button className="calendar_right">
                        오
                    </button>
                </div>
                <div className="calendar_bodyContainer">
                    <div className="calendar_body">
                        <div className="calendar_box">
                            <span>일</span>
                        </div>
                        <div className="calendar_box">
                            <span>월</span>
                        </div>
                        <div className="calendar_box">
                            <span>화</span>
                        </div>
                        <div className="calendar_box">
                            <span>수</span>
                        </div>
                        <div className="calendar_box">
                            <span>목</span>
                        </div>
                        <div className="calendar_box">
                            <span>금</span>
                        </div>
                        <div className="calendar_box">
                            <span>토</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calender;