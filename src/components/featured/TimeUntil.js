import React, { Component } from 'react'

class TimeUntil extends Component {
    state = {

    }
    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Start In
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">23</div>
                        <div className="countdown_tag">Days</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">2</div>
                        <div className="countdown_tag">Hr</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">42</div>
                        <div className="countdown_tag">Min</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">55</div>
                        <div className="countdown_tag">Sec</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeUntil;