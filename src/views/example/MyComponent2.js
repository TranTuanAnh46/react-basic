import React from 'react';

class MyComponent2 extends React.Component {


    /*  
       - state của React là 1 object ( 1 object thì có key và value )
       - xem ví dụ khai báo phía dưới
       - Nói chung là state dùng cho việc nếu state bị thay đổi dữ liệu liệu => thì ngay lập tức phần giao diện hoặc JSX sẽ đc thay đổi theo lập tức
    */


    state = {
        name: 'Tuan Anh11',
        channel: 'Hoi Dan IT'
    }

    render() {

        let name = 'TRAN TUAN ANH';

        return (

            <>
                <div className="first">
                    hello my component - My name is {this.state.name}
                </div >
                < div className="second">
                    My youtube channel {this.state.channel}
                </div >
            </>
        )
    }
}


export default MyComponent2;
