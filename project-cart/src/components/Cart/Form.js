import React, { Component } from 'react'
import { Form , FormFeedback} from 'reactstrap';
import './Form.css';

export default class form extends Component {
     constructor(props){
            super(props);
            this.state = {
                 name: '',
                 email: '',
                 mobile: '',
                 address: '',
                 city: '',
                 zip: '',
                 touched: {
                name: false,
                email: false,
                mobile: false,
                address: false,
                 city: false,
                 zip: false,
            }
  

            }
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
        }
        handleInputChange(event) {
             const target = event.target;
             const value = target.value;    
             const name = target.name;
             this.setState({
                 [name]: value
             })
        }
        handleSubmit(event){
            console.log("Current state is " + JSON.stringify(this.state))
            alert("Current State is: " + JSON.stringify(this.state))
            event.preventDefault();
        }
        handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
       }
    validate(name, email, mobile,address,city,zip) {
        const errors = {
                 name: '',
                 email: '',
                 mobile: '',
                 address: '',
                 city: '',
                 zip: '',


                 
        };

        if (this.state.touched.name && name.length === 0)
            errors.name = 'This field cannot be left empty';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email id';

        const reg = /^\d+$/;
        if (this.state.touched.mobile && !reg.test(mobile))
        errors.mobile = 'Mobile number contains only number';

         if (this.state.touched.address && address.length === 0)
            errors.address = 'This field cannot be left empty';
         if (this.state.touched.city && city.length === 0)
            errors.city = 'This field cannot be left empty';
         if (this.state.touched.zip && !reg.test(zip))
        errors.zip = 'Zip contains only number';
        

        return errors;
    }
    render() {
       const errors = this.validate(this.state.name, this.state.email, this.state.mobile, this.state.address,this.state.city,this.state.zip,);
        return (
            <div className="form" style={{backgroundImage: `url("https://img.freepik.com/free-photo/white-wall-texture-background-backdrop-composition_1962-1027.jpg?size=626&ext=jpg&ga=GA1.2.1192447133.1603522449")`, height:"100%"}}>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Form onSubmit={this.handleSubmit}>
                <div className="form_container">
                    <h3>Billing Information</h3>
                    <label className="label_class"htmlFor="name"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="name" name="name" placeholder="Name" value={this.state.name} 
            valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange}></input>
            <div className="error">{errors.name}</div>
            <br></br>
            <label className="label_class"htmlfor="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="email" value={this.state.email} valid={errors.email === ''}
            invalid={errors.email !== ''} onBlur={this.handleBlur('email')} onChange={this.handleInputChange}></input>
            <div className="error">{errors.email}</div>
            <br></br>
            <label className="label_class"htmlfor="mobile"><i class="fa fa-mobile-phone" style={{fontSize:"22px"}}></i> Mobile Number</label>
            <input type="text" id="mobile" name="mobile" placeholder="Mobile Number" value={this.state.mobile}
            valid={errors.mobile === ''} invalid={errors.mobile !== ''} onBlur={this.handleBlur('mobile')} onChange={this.handleInputChange}></input>
            <div className="error">{errors.mobile}</div>
            <br></br>
            <label className="label_class"htmlfor="address"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="address" name="address" placeholder="Address" value={this.state.address}
            valid={errors.address === ''} invalid={errors.address !== ''} onBlur={this.handleBlur('address')} onChange={this.handleInputChange}></input>
            <div className="error">{errors.address}</div>
            <br></br>
             <div className="row">
                 <div className="col-50">
            <label className="label_class"htmlfor="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="City" value={this.state.city}
                 valid={errors.city === ''} invalid={errors.city !== ''} onBlur={this.handleBlur('city')} onChange={this.handleInputChange}></input>
            <div className="error">{errors.city}</div>
            </div>
            <div className="col-50">
                <label className="label_class"htmlfor="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="Zip" value={this.state.zip} 
                 valid={errors.zip === ''} invalid={errors.zip !== ''} onBlur={this.handleBlur('zip')} onChange={this.handleInputChange}></input>
            <div className="error">{errors.zip}</div>
            </div>
            </div>
                <button className="checkout_btn" type="submit">Continue to Checkout</button>
            
                </div>
                </Form>
            </div>
        )
    }
}