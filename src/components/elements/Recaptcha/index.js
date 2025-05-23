import React from 'react'

/**
 * A React component that renders a Google reCAPTCHA widget.
 *
 * This component handles the loading and rendering of the reCAPTCHA widget, and provides a callback function to notify the parent component when the reCAPTCHA is verified.
 *
 * @param {object} props - The component props.
 * @param {string} [props.id] - The ID of the reCAPTCHA element. Defaults to 'reCaptchaReactElement'.
 * @param {function} props.onVerify - A callback function that is called when the reCAPTCHA is verified, with the reCAPTCHA token as the argument.
 */
export class Recaptcha extends React.PureComponent {
    
    constructor(props) {
        super(props)
        this.state = {
            token: '',
            'id': this.props.id || 'reCaptchaReactElement'
        }
    }
    componentDidMount() {
        let isNotExist = Array.from(document.querySelectorAll('script[src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"]')).length === 0;
        if (isNotExist) {
            let script = document.createElement('script');
            script.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            console.log('recaptcha is added')
        } else {
            console.log('recaptcha is aleady exist')
        }

        //
        window.onloadCallback = this.onRecaptchaLoaded.bind(this)
    }
    onRecaptchaLoaded() {
        console.log('recaptcha ')
        if (window.grecaptcha) {
            window.grecaptcha.render(this.state.id, {
                'sitekey': '6LeyyN0nAAAAAAQXdwzodg-616QyLDHYIBwlHeCI',
                'callback': token => this.verifyCallback(token)//this.verifyCallback.bind(this),
            })
        }
    }
    reset() {
        console.log('reset')
        window.grecaptcha.reset()
    }
    verifyCallback(token) {
        console.log({ token })
        if (typeof this.props.onVerify === 'function') {
            this.props.onVerify(token)
        }
    }
    render() {
        return (
            <div id={this.state.id} ></div>
        )
    }
}

export default Recaptcha