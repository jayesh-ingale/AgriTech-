import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { signup } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup(name, email, password);
      alert('Signup successful!');
      navigate('/login');  // Redirect to Login page after signup
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deepTeal to-lightGreen bg-animation">
      <div className="w-full max-w-md p-8 bg-darkGray rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-softWhite mb-6">Sign Up</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <InputField
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Sign Up" onClick={handleSignup} />
        <p className="text-center text-softWhite mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-tealAccent1 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
