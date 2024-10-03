import { useForm } from "react-hook-form"
import CustomForm from "../components/ui/CustomForm"
import { contactFormSchema } from "../schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../components/ui/Input"
import { ErrorMessage } from "@hookform/error-message"
import TextArea from "../components/ui/TextArea"
import Button from "../components/ui/Button"
import { api, post, token } from "../config/config"
import { toast } from "react-toastify"

const ContactForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async(data) => {
    try{
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.get()}`
      }

      console.log(headers);
      await post(api.CONTACT,  { ...data }, {headers: headers});
      toast("Contact Form Sucessfully Submitted");
    }catch(e){
      console.log(e);
    }
  }
  return (
    <>
      <h1>Contact Us</h1>
      <CustomForm submit={handleSubmit(onSubmit)}>
        <Input type="text" name="username" label="Name" props={register("username")} />
        <ErrorMessage errors={errors} name="username" />

        <Input type="email" name="email" label="Email" props={register("email")} />
        <ErrorMessage errors={errors} name="email" />

        <Input type="text" name="phone_number" label="Phone Number" props={register("phone_number")} />
        <ErrorMessage errors={errors} name="phone_number" />

        <TextArea name="message" label="Message" cols="30" rows="5" props={register("message")} />
        <ErrorMessage errors={errors} name="message" />

        <Button name="Submit" />
      </CustomForm>
    </>
  )
}

export default ContactForm
