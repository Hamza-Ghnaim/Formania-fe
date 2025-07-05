export type FieldType = "text" | "email" | "phone";

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
}
