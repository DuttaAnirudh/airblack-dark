import { Controller, useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SelectSearch from "../../ui/SelectSearch";
import { useModal } from "../../context/ModalContext";
import toast from "react-hot-toast";
import {
  callingCodes,
  clubs,
  professions,
  goals,
  cities,
} from "../../lib/data";

const AdmissionForm = () => {
  const { closeModal } = useModal();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  // Handle Form Submit
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully");
    closeModal();
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault(); // TEST: Remove this when sending a GET/POST request
        handleSubmit(onSubmit)(e);
      }}
    >
      <h3 className="font-boska font-semibold tracking-widest text-3xl">
        Application Form
      </h3>

      {/* NAME */}
      <FormRow label="Enter your Name" id="name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          placeholder="Anisha Sharma"
          register={{ ...register("name", { required: "Name is required" }) }}
        />
      </FormRow>

      {/* CONTACT */}
      <FormRow
        label="Enter your Whatsapp Number"
        id="contact"
        error={errors?.contact?.message}
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

      {/* CHOOSE CLUB */}
      <FormRow
        label="Select a school you want to apply for"
        id="club"
        error={errors?.club?.message}
      >
        <Controller
          name="club"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <SelectSearch
              options={clubs}
              placeholder="Select the most relevant option"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FormRow>

      {/* CHOOSE PROFESSION */}
      <FormRow
        label="Select your profession"
        id="profession"
        error={errors?.profession?.message}
      >
        <Controller
          name="profession"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <SelectSearch
              options={professions}
              placeholder="Select the most relevant option"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FormRow>

      {/* CHOOSE GOAL */}
      <FormRow
        label="Select your goal here"
        id="goal"
        error={errors?.goal?.message}
      >
        <Controller
          name="goal"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <SelectSearch
              options={goals}
              placeholder="Select the most relevant option"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FormRow>

      {/* CHOOSE/SEARCH CITY */}
      <FormRow
        label="Select your City"
        id=""
        className="mb-16"
        error={errors?.city?.message}
      >
        <Controller
          name="city"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <SelectSearch
              options={cities}
              placeholder="Select the most relevant option"
              isSearchable={true}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FormRow>

      <FormButton fixed={true} textSize="small" disabled={!isValid}>
        Submit
      </FormButton>
    </Form>
  );
};

export default AdmissionForm;
