import { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";
import { FormSubmitButtons } from "../../../components/buttons/button.component";
import {
  InputLabel,
  TextAreaField,
  RadioInputField,
  SelectOptionField,
  FileUploadField,
  TextInputField,
} from "../../../components/form/input.component";
const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitEvent = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="my-5 flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Registration
          </h2>
          <form onSubmit={handleSubmit(submitEvent)}>
            {/* Name */}
            <div className="mb-4">
              <InputLabel field={"fullName"} labelTxt={"Name: "} />
              <TextInputField
                control={control}
                name={"fullName"}
                placeholder="Enter Your name..."
                errMsg={errors?.fullName?.message}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <InputLabel field={"email"} labelTxt={"Email(Username): "} />
              <TextInputField
                type="email"
                control={control}
                name={"email"}
                placeholder="Enter Your email..."
                errMsg={errors?.email?.message}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <InputLabel field={"password"} labelTxt={"Password: "} />
              <TextInputField
                control={control}
                name={"password"}
                type="password"
                placeholder="Enter Your Password..."
                errMsg={errors?.password?.message}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <InputLabel
                field={"passwordConfirmation"}
                labelTxt={"Re-Password: "}
              />
              <TextInputField
                control={control}
                name={"passwordConfirmation"}
                type="password"
                placeholder="Re-enter Your Password..."
                errMsg={errors?.passwordConfirmation?.message}
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <InputLabel field={"gender"} labelTxt={"Gender: "} />
              <div className="flex">
                <RadioInputField
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                  ]}
                  name="gender"
                  control={control}
                  errMsg={errors?.gender?.message}
                />
              </div>
            </div>

            {/* Role */}
            <div className="mb-4">
              <InputLabel field={"role"} labelTxt={"Role: "} />
              <SelectOptionField
                options={[
                  { label: "Buyer", value: "customer" },
                  { label: "Seller", value: "seller" },
                ]}
                control={control}
                name={"role"}
                errMsg={errors?.role?.message}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <InputLabel field={"telephone"} labelTxt={"Phone: "} />
              <TextInputField
                control={control}
                name={"telephone"}
                type="tel"
                errMsg={errors?.telephone?.message}
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <InputLabel field={"address"} labelTxt={"Address: "} />
              <TextAreaField
                name={"address"}
                control={control}
                errMsg={errors?.address?.message}
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <InputLabel field={"profileImage"} labelTxt={"Image: "} />
              <FileUploadField
                control={control}
                name={"profileImage"}
                errMsg={errors?.profileImage?.message}
              />
            </div>

            {/* Submit Button */}
            <FormSubmitButtons />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
