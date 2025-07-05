import axios from "axios";
import { FormField } from "../views/FormBuilder/types";

export const saveForm = async (formData: {
  title: string;
  fields: FormField[];
}) => {
  const res = await axios.post("http://localhost:5001/forms", formData, {
    withCredentials: true,
  });
  return res.data;
};
