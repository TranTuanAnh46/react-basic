import React from 'react';

class MyComponent3 extends React.Component {


    /*  
        - Đây là ví dụ về việc nếu state thay đổi thì - phần giao diện cũng sẽ được thay đổi real time 
        - trong ví dụ này tôi tạo ra 1 ô input nhập giá trị name - sẽ đc thay đổi realtime   
    */


    state = {
        name: 'Tuan Anh11',
        channel: 'Hoi Dan IT'
    }

    handlOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        let name = 'TRAN TUAN ANH';

        return (

            <>
                <div className="first">
                    <input type='text' value={this.state.name} onChange={(event) => this.handlOnChangeName(event)} />
                    hello my component - My name is {this.state.name}
                </div >
                < div className="second">
                    My youtube channel {this.state.channel}
                </div >
            </>
        )
    }
}


export default MyComponent3;
