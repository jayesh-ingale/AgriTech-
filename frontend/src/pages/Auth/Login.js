import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert('Login successful!');
      navigate('/dashboard');  // Redirect to Market page
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deepTeal to-lightGreen bg-animation">
      <div className="w-full max-w-md p-8 bg-darkGray rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-softWhite mb-6">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Login" onClick={handleLogin} />
        <p className="text-center text-softWhite mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-tealAccent1 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
