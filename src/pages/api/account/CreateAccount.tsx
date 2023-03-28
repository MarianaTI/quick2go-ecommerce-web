import CreateAccountUseCase from '@/application/usecases/accountUseCase/CreateAccountUseCase';
import AccountRepo from '@/infrastructure/implementation/httpRequest/axios/AccountRepo';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const accountRepo = new AccountRepo();
    const createAccountUseCase = new CreateAccountUseCase(accountRepo);
    const account = {
      email: email,
      password: password,
    };
    try {
      const response = await createAccountUseCase.run(account);
      // Aquí podrías almacenar la información de la cuenta de usuario en el estado de tu componente o en una cookie
    } catch (error) {
      setError('Las credenciales que has introducido son incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
