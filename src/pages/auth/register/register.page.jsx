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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../../../config/axios.config";

const RegisterPage = () => {
  const userRegisterDTO = Yup.object({
    fullName: Yup.string().min(2).max(25).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,25}$/,
        {
          message:
            "Password should contain at least one character, a number and a special character.",
        }
      )
      .required(),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")])
      .required(),
    gender: Yup.string()
      .matches(/^(male|female|other)$/)
      .required(),
    role: Yup.string()
      .matches(/^(customer|seller)$/)
      .required(),
    telephone: Yup.string()
      .matches(
        /^(?:\+977[- ]?)?(98\d{8}|97\d{8}|96\d{8}|0[1-6][- ]?\d{6,7})$/,
        { message: "Phone number should start with 98 or .." }
      )
      .required(),
    address: Yup.string().nullable().optional().default(null),
    profileImage: Yup.mixed().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userRegisterDTO) });

  const submitEvent = (data) => {
    axiosInstance.post("/user", data, {
      headers: {
        // Corrected to lowercase
        "Content-Type": "application/json", // Content-Type header
      },
    });
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
