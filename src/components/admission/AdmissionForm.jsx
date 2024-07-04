import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const clubs = ["Airblack Beauty Club", "Airblack Culinary Club"];

const professions = [
  "Student",
  "Beautician",
  "Working Professional",
  "Homemaker",
  "Entrepreneur",
  "Other",
];

const goals = [
  "I want to become a makeup artist",
  "I'm already a MUA and looking to get better",
  "I want to learn for my own makeup",
  "I want to learn for Instagram or blogging",
  "I'm just exploring",
];

const AdmissionForm = () => {
  return (
    <Form>
      <h3 className="font-boska font-semibold tracking-widest text-3xl">
        Application Form
      </h3>
      <FormRow label="Enter your Name">
        <Input type="text" placeholder="Anisha Sharma" />
      </FormRow>

      <FormRow label="Enter your Whatsapp Number">
        <Input type="text" placeholder="0123456789" />
      </FormRow>

      <FormRow label="Select a school you want to apply for">
        <Select options={clubs} />
      </FormRow>

      <FormRow label="Select your profession">
        <Select
          options={professions}
          placeholder="Select the most relevant option"
        />
      </FormRow>

      <FormRow label="Select your goal here">
        <Select
          options={professions}
          placeholder="Select the most relevant option"
        />
      </FormRow>
    </Form>
  );
};

export default AdmissionForm;
