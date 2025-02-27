import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = () => {
        const { username, password } = this.state;

        // Sample data for validation
        const data = [
            { username: 'Admin', password: 'pass123' }
        ];

        // Check if the username and password match
        const user = data.find(user => user.username === username && user.password === password);

        if (user) {
            // Redirect to /admin page
            window.location.href = '/admin';
        } else {
            // Show alert for invalid credentials
            alert('Invalid credentials');
        }
    };

    render() {
        const { username, password } = this.state;

        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={this.handleUsernameChange}
                />
                <input 
                    type="password" 
                    placeholder="Enter password" 
                    value={password}
                    onChange={this.handlePasswordChange}
                />
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        );
    }
}

export default LoginComponent;