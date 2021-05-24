import React,{Component} from 'react';
import axios from './axios';



class Post extends Components{

    state={
         category:[],
         created:"",
         description:"",
         link:"",

    }

    componentDidMount() {
        axios.get(` https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`)
          .then(res => {
            const category = res.data;
            const created=res.data
            const description=res.data
            const link=res.data

            this.setState({category,created,description,link});
          }) }
    render() {
        return (
            
            <ul>
                { this.state.category.map(person => <li>{category.name}</li>)}
                { this.state.created.map(created  => <li>{created.name}</li>)}
                { this.state.description.map(description => <li>{description.name}</li>)}
                { this.state.link.map(link => <li>{state.name}</li>)}
            </ul>
        
        );
    }
}


export default Post