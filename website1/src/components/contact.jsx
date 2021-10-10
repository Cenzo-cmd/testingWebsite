import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Smart Contract Address</h2>
                <p>
                Coming soon 😁
                </p>
                <p>Special Thanks 🙏:</p>
                <p>Gary V. - You are a role model for us at emOG NFT.</p>
                <p>Thanks for all the insight and knowledge you put out.</p>
                <p>Danny - I would not be here if I did not stumble on your twitter.</p>
              </div>
              
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              {/* <h3>Contact Info</h3> */}
              <p>
                {' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.discord : '/'} target="_blank" rel="noreferrer">
                    <i className="fab fa-discord"></i>
                      <img className="icons" src="/img/icons/twitter.png" alt="React Logo" />
                       
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.discord : '/'} target="_blank" rel="noreferrer">
                    <i className="fab fa-discord"></i>
                      <img className="icons" src="/img/icons/discord2.png" alt="React Logo" />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.discord : '/'} target="_blank" rel="noreferrer">
                    <i className="fab fa-discord"></i>
                      <img className="icons" src="/img/icons/linkedin.png" alt="React Logo" />                 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
