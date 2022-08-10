import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import '../styles/Experience.css'
function Experience() {
    return <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2020-2022' iconStyle={{background: '#3e497a', color:'#fff'}} icon={<WorkIcon />}>
                <h3 className='vertical-timeline-element-title'>Experience</h3>
                <p>khlklkjlkjlk</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2020-2022' iconStyle={{background: '#3e497a', color:'#fff'}} icon={<WorkIcon />}>
                <h3>Experience</h3>
                <p>jhkjhdkjhakhkj</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' date='2020-2022' iconStyle={{background: '#3e497a', color:'#fff'}} icon={<WorkIcon />}>
                <h3>Experience</h3>
                <p>hljlkjlkjlkjlk</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}

export default Experience