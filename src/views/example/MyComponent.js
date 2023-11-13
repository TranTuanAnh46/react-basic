import React from 'react';

class MyComponent extends React.Component {


    /*  
        - ở video 7 này chủ yếu là dậy chúng ta cách gọi 1 function trong html 
        - thì dưới đây là cú pháp để gọi 1 function - nhớ rằng đây là gọi arrow function
        - có 2 cú pháp gọi function - tôi thấy ông HoiDanIT hay dùng cách số 2
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

    handleClickButton = () => {
        alert('click me')
    }

    handleClickButton2 = () => {
        alert('click me2')
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


                <div className='third'>
                    <button onClick={() => { this.handleClickButton() }}>Click me</button>
                    <button onClick={() => this.handleClickButton2()}>Click me2</button>
                </div>
            </>
        )
    }
}


export default MyComponent;
