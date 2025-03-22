import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Welcome back, ${email}!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deepTeal to-lightGreen bg-animation">
      <div className="w-full max-w-md p-8 bg-darkGray rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-softWhite mb-6">Login</h2>
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
