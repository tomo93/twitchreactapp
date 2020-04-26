import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends Component{


    renderInput(){
        return <div>I am input</div>;
    }
    render(){

        //console.log(this.props);
        return (
        <form>
            <Field name="title" component={this.renderInput}/>
            <Field name="description" component={this.renderInput}/>
        </form>
         ) ;
    }
}


export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);