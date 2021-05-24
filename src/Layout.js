import React,{Component} from 'react'
import Layoutcss from './Layout.css'


class Layout extends Component {

    render(props){
        return(
            <div className={Layoutcss}>

              <Main>{props.Children}</Main>
            </div>
        )
    }
}

export default Layout