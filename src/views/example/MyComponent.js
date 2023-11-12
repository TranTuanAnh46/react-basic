import React from 'react';

class MyComponent extends React.Component {


    /*
        - JSX mình hiểu đơn giản là 1 function javascript trả về 1 khối ( là các thẻ HTML ) 
            + Bên cạnh đó cú pháp JSX còn hộ trợ - truyền các biến từ javascript vào trong các thẻ của html
        - Nếu muốn sử dụng console.log ở chỉ có thể truyền vào trong thẻ div như ví dụ dưới
        - Thằng JSX chỉ trả về 1 khối nếu trong ví dụ dưới mà chúng ta có 2 div độc lập - thì nó sẽ báo lỗi 
          , do đó cần phải lồng 2 div đó vào chung trong 1 div tổng để trả về
        - Nếu trong trường hợp bạn không muốn dùng return 1 thẻ div tổng thì ta dùng cú pháp <React.Fragment>

        - Cú pháp <React.Fragment> là các phiên bản cũ - đối với các phiên bản mới ng ta sẽ dùng <> </>
    */

    render() {

        let name = 'TRAN TUAN ANH';

        return (
            //Way1
            /* 
            <React.Fragment>
                < div>
                    {console.log('minh ten la ai :', name)}
                    hello my component - My name is {name}
                </div >
                < div>
                    sdfsdfsd
                </div >
            </React.Fragment>
            */

            //Way2
            <>
                < div>
                    {console.log('minh ten la ai :', name)}
                    hello my component - My name is {name}
                </div >
                < div>
                    sdfsdfsd
                </div >
            </>
        )
    }
}


export default MyComponent;
