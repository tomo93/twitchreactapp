import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends Component{   

    componentDidMount(){
        //2 param è la callback
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '15450170644-r002m2mjamf6r319n13v60lgdan0fcao.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                //now gapi is ready to go!

                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //called when status of auth changed
    onAuthChange =(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId()); //call the action creator
        } else{
            this.props.signOut(); //call the action creator
        }

    }

    onSignIn = ()=>{
        this.auth.signIn();
    }

    onSignOut = ()=>{
        this.auth.signOut();
    }


    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;
        } else if (this.props.isSignedIn){
            return (
            <button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"/>
                Logout
            </button>);
        } else{
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon"/>
                    Login
                </button>);
        }
    }
    render(){

        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);