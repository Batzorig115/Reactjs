import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        // imageUrl: 'https://picsum.photos/200'
    };
    styles = {
        fontSize:20,
        fontWeight : 'bold' 
        
    };
    
    render() { 

        return(
            <div>
                {/* 46:46  https://www.youtube.com/watch?v=Ke90Tje7VS0 video tutorial */}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}
                <span style={{fontSize:50}} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        )

    }
    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;