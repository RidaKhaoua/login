
import Input from '../components/Input'
import useLogin from '../hooks/useLogin'

function LoginPage() {
    const {register, handleSubmit,submitForm, errors} = useLogin()
  return (

    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitForm)}>
            <Input type='email' register={register} name='email' error={errors.email?.message}/>
            <Input type='password' register={register} name='password' error={errors.password?.message}/>
            <button type='submit'>connect</button>
        </form>
    </div>
  )
}

export default LoginPage