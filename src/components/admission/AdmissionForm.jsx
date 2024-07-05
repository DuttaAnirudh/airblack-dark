import { Controller, useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormButton from "../../ui/FormButton";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import SelectSearch from "../../ui/SelectSearch";
import { useModal } from "../../context/ModalContext";
import toast from "react-hot-toast";

const callingCodes = [
  { value: "+91", label: "IN +91" },
  { value: "+971", label: "AE +971" },
  { value: "+44", label: "GB +44" },
  { value: "+1", label: "US +1" },
];

const clubs = [
  { value: "beauty", label: "Airblack Beauty Club" },
  { value: "culinary", label: "Airblack Culinary Club" },
];

const professions = [
  { value: "student", label: "Student" },
  { value: "beautician", label: "Beautician" },
  { value: "working professional", label: "Working Professional" },
  { value: "homemaker", label: "Homemaker" },
  { value: "entrepreneur", label: "Entrepreneur" },
  { value: "other", label: "Other" },
];

const goals = [
  {
    value: "become a makeup artist",
    label: "I want to become a makeup artist",
  },
  { value: "get better", label: "I'm already a MUA and looking to get better" },
  { value: "for my own makeup", label: "I want to learn for my own makeup" },
  {
    value: "instagram or blogging",
    label: "I want to learn for Instagram or blogging",
  },
  { value: "exploring", label: "I'm just exploring" },
];

const cities = [
  { value: "new delhi", label: "New Delhi" },
  { value: "chandigarh", label: "Chandigarh" },
  { value: "jaipur", label: "Jaipur" },
  { value: "lucknow", label: "Lucknow" },
];

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
