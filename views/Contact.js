import React,{Component} from "react";
import {connect} from "react-redux";
import * as HotelActions from "../actions/hotel";
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username : '',
            email : '',
            mobile : '',
            message : '',
            invalidFields : [],
            contact_message :''
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.saveContactData.saved !== prevProps.saveContactData.saved) {
            this.setState({
                username : '',
                email : '',
                mobile : '',
                message : '',
                invalidFields : []
            })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, function(){
            this.validateFields()
        })
    }

    submitContact =(e) => {
        let invalidCount = this.validateFields();
        let invalidFields = this.state.invalidFields;

        if(invalidCount === 0) {
            //submit contact form
            let params = {
                name : this.state.username,
                mobile :  this.state.mobile,
                email : this.state.email,
                message : this.state.message
            }

            this.props.saveContact(params)


            this.setState({
                contact_message : "Thank you for submitting the request."
            })
        }



    }

    validateFields = () => {
        let invalidCount = 0;
        let invalidFields = [];
        if(this.state.username === '') {
            invalidCount++;
            invalidFields.push('username');
        }
        if(this.state.email === '') {
            invalidCount++;
            invalidFields.push('email');
        }
        else {
            let email=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(!email.test(this.state.email))
            {
                invalidCount++;
                invalidFields.push('email');
            }

        }
        if(this.state.mobile === '') {
            invalidCount++;
            invalidFields.push('mobile');
        }
        if(this.state.message === '') {
            invalidCount++;
            invalidFields.push('message');
        }
        this.setState({
            invalidFields : invalidFields
        });
        return invalidCount;
    }
    render()
    {
        let invalidFields = this.state.invalidFields || [];
        console.log(invalidFields)
        return (
            <section className="content-area contact" id="uth-contact">
                <div className="boiler-content dark slander rev contact-exec">
                    <div className="success-msg" style={{    color: '#32f17f'}}>{this.state.contact_message}
                    </div>
                    <h5>Keep in Touch</h5>
                    <h6 className="font-bold">Do you have anything in your mind to tell us?</h6>

                    <div className="form-wrapper" >
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Name" value={this.state.username}
                                   className={`${invalidFields.includes('username') ? 'error-field' : ''}`}
                                   onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div className="input-box">
                            <input type="number" name="mobile" placeholder="Mobile" value={this.state.mobile}
                                   className={`${invalidFields.includes('mobile') ? 'error-field' : ''}`}
                                   onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Email" value={this.state.email} className={`${invalidFields.includes('email') ? 'error-field' : ''}`}
                                   onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div className="input-box">
                            <input type="text" name="message" placeholder="Message" value={this.state.message} className={`${invalidFields.includes('message') ? 'error-field' : ''}`}
                                   onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div className="button-block">
                            <button className="general-btn" onClick={() => this.submitContact()}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    saveContactData:state.HotelReducer.saveContactData,

});


export default connect(
    mapStateToProps,
    {
        saveContact : HotelActions.saveContact
    }
)(Contact);
