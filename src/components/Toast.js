import * as React from 'react';

const ToastContext = React.createContext({});

function Toast({message, type}){
    return <div style={{
        background: 'hsl(208, 100%, 97%)',
        padding: '20px',
        width: '200px',
        position: 'absolute',
        right: 10,
        top: 20
    }}>{ message }</div>
}

function withToast(WrappedComponent) {
    return class extends React.Component {

        static contextType = ToastContext;

        state = {
            show: false,
            message: 'Some message',
            type: 'error'
        }

        show = (message) => { 
            this.setState((state) => ({
                show: true,
                message: message ? message : state.message
            }));
            setTimeout(() => {
                this.hide();
            }, 2000)
         }
        
        hide = () => { 
            this.setState({
                show: false
            })
         }

        render() {
            return (<ToastContext.Provider value={{hideToast: this.hide, showToast: this.show }}>
                        { this.state.show ? <Toast message={this.state.message} type={this.state.type}/> : null }
                        <ToastContext.Consumer>
                            { value => <WrappedComponent {...this.props} {...value}/>}
                        </ToastContext.Consumer>
                    </ToastContext.Provider>);
        }
    }
}

export default withToast;