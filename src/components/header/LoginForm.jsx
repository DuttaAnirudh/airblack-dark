import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const callingCodes = [
  { value: "+91", label: "IN +91" },
  { value: "+971", label: "AE +971" },
  { value: "+44", label: "GB +44" },
  { value: "+1", label: "US +1" },
];

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  // Handle Form Submit
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault(); // TEST: Remove this when sending a GET/POST request
        handleSubmit(onSubmit)(e);
      }}
      className="pb-[10rem]"
    >
      <div className="w-[5rem] h-[5rem]  self-center">
        <img
          className="w-full h-full"
          src="/logo_icon.svg"
          alt="Airblack logo"
        />
      </div>

      <h2 className="text-3xl font-semibold font-boska tracking-widest text-center self-center">
        Welcome to Airblack
      </h2>

      <FormRow
        label="Enter your phone number to login"
        id="contact"
        error={errors?.contact?.message}
        alignment="self-center"
      >
        <Select options={callingCodes} />
        <Input
          type="text"
          id="contact"
          placeholder="0123456789"
          size="small"
          register={{
            ...register("contact", {
              required: "Contact Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please provide a valid contact number",
              },
            }),
          }}
        />
      </FormRow>

      <FormButton disabled={!isValid} className="self-center">
        Send OTP
      </FormButton>
    </Form>
  );
};

export default LoginForm;
