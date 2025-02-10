import { SubmitHandler, useForm } from "react-hook-form";
import { signInType, singInShema } from "../validations/signInshema";
import { zodResolver } from "@hookform/resolvers/zod";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    resolver: zodResolver(singInShema),
    mode: "onBlur",
  });

  const submitForm: SubmitHandler<signInType> = async (data) => {
    const {email, password} = data
  
  };

  return {
    submitForm,
    register,
    handleSubmit,
    errors,
  };
};

export default useLogin;
