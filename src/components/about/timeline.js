import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
export default function timeline() {
    return (
        <div className="timeline-wrap">
            <hr></hr>
            <h2>Previous Project </h2>
            <div className="timeline-history">
                <Timeline lineColor={'teal'}>
                    <TimelineItem key="001" dateText="11/2010 – Present" >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="04/2009 – 11/2010"
                        dateInnerStyle={{ background: 'gold', color: '#000' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3 >Title, Company</h3>
                        <h4 >Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateComponent={(
                            <div
                                style={{
                                    display: 'block',
                                    float: 'left',
                                    padding: '10px',
                                    background: 'rgb(150, 150, 150)',
                                    color: '#fff',
                                }}
                            >
                                11/2008 – 04/2009
      </div>
                        )}
                    >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
    </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
    </p>
                        <p>
                            Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                            exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                            nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                            reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                            est.
    </p>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
}
