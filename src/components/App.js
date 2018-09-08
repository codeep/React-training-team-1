import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';

import Home from './HomeComponent';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 0   
        };
        this.data = [
            {
                id: 2,
                title: 'Before She was Harriet',
                author: 'Lesa Cline-Ransome',
                imgurl: 'https://www.bookish.com/wp-content/uploads/9780823420476_d2861-1.jpg',
                category: 'History',
                description: 'A lush and lyrical biography of Harriet Tubman, written in verse and illustrated by an award-winning artist.We know her today as Harriet Tubman, but in her lifetime she was called by many names. As General Tubman she was a Union spy. As Moses she led hundreds to freedom on the Underground Railroad. As Minty she was a slave whose spirit could not be broken. An evocative poem and opulent watercolors come together to honor a woman of humble origins whose courage and compassion make her larger than life.',
                date: new Date().toLocaleTimeString(),
                uploadedBy: 'Admin'
            },
            {
                id: 1,
                title: 'Fred the Lonely Monster',
                author: 'Anne Lowensky',
                imgurl: 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png',
                category: 'Comedy',
                description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                date: new Date().toLocaleTimeString(),
                uploadedBy: 'Admin'
            },
            {
                id: 0,
                title: 'The Man in the High Castle',
                author: 'Philip K. Dick',
                imgurl: 'https://res.cloudinary.com/bookbub/image/upload/c_scale,w_405/v1488624290/pro_pbid_395450.jpg',
                category: 'Alternate History',
                description: 't’s America in 1962. Slavery is legal once again. The few Jews who still survive hide under assumed names. In San Francisco, the I Ching is as common as the Yellow Pages. All because some twenty years earlier the United States lost a war—and is now occupied by Nazi Germany and Japan.',
                date: new Date().toLocaleTimeString(),
                uploadedBy: 'Admin'
            }
        ];
        if (localStorage.getItem('books') === null) {
            localStorage.setItem('books', JSON.stringify(this.data));
        }

    }

    componentDidMount(){
        let interval = setInterval(() => {
            this.setState({percentage : this.state.percentage+1});
            if(this.state.percentage === 100){   
                clearInterval(interval);
            }
        }, 30);
    }

    renderProgressBar() {
        if ( this.state.percentage < 100 ) {
            return (
                <CircularProgressbar
                    className='progressbar'
                    percentage={this.state.percentage}
                    text={`${this.state.percentage}%`}
                    styles={{
                        path: { stroke: `rgba(62, 152, 199, ${this.state.percentage / 100})` },
                        text: { fill: 'rgb(255, 225, 225)', fontSize: '16px' },
                    }}
                />
            );
        }
        return (
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    }
    render() {
        return (
            <div>
                {this.renderProgressBar()}
            </div>
        );
    }
}