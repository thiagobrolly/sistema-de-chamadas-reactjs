import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    alert('Click')
  }

  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={Logo} alt='Sistema Logo' />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <input type='text' placeholder='John Doe' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Cadastrar</button>
        </form>

        <Link to="/">Já possui uma conta? Entre</Link>
      </div>
    </div>
  )
}