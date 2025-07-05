import React, { useState } from "react";
import { FieldType, FormField } from "./types";
import { v4 as uuidv4 } from "uuid";
import { saveForm } from "../../Services/formService";

export const FormBuilder = () => {
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (type: FieldType) => {
    const labelMap = {
      text: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
    };
    const newField: FormField = {
      id: uuidv4(),
      label: labelMap[type],
      type,
      required: true,
    };
    setFields((prev) => [...prev, newField]);
  };

  const handleSubmit = async () => {
    try {
      await saveForm({ title, fields });
      alert("✅ تم حفظ النموذج بنجاح");
      setTitle("");
      setFields([]);
    } catch (error) {
      alert("❌ حدث خطأ أثناء الحفظ");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        منشئ النماذج
      </h1>

      <input
        type="text"
        placeholder="عنوان النموذج"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-right"
      />

      <div className="flex gap-2 justify-end">
        <button onClick={() => addField("text")} className="btn">
          + نص
        </button>
        <button onClick={() => addField("email")} className="btn">
          + بريد إلكتروني
        </button>
        <button onClick={() => addField("phone")} className="btn">
          + رقم هاتف
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <div
            key={field.id}
            className="flex flex-col border border-gray-200 p-3 rounded bg-gray-50"
          >
            <label className="text-sm font-medium mb-1">{field.label}</label>
            <input
              type={field.type === "phone" ? "text" : field.type}
              className="border px-2 py-1 rounded text-right"
              disabled
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        حفظ النموذج
      </button>
    </div>
  );
};
