"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import React, { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { authSchema } from "@/schema";
import Link from "next/link";
import Form from "@/components/reusable/from";
import { FromInput } from "@/components/reusable/form-input";
import { EmailIcon, LockIcon } from "@/icon";
import SubTitle from "@/components/reusable/title";
import { Checkbox, Label } from "@/components/ui";

export default function Login() {
  const router = useRouter();
  const from = useForm({
    // resolver: zodResolver(authSchema)
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div className="max-w-4xl bg-secondary rounded-xl p-10 my-30 mx-auto">
      <SubTitle text="User Login" svg={false} />
      <Form className="space-y-4 py-7" from={from} onSubmit={handleSubmit}>
        <FromInput
          className="h-10"
          name="email"
          label="Email"
          placeholder="Enter your email"
          icon={<EmailIcon />}
        />

        <div>
          <FromInput
            className="h-10"
            name="password"
            label="Password"
            placeholder="Password"
            eye={true}
            icon={<LockIcon />}
          />

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me">Keep me logged in</Label>
            </div>
            <Link
              href="/forgot-password"
              className="font-semibold hover:underline"
            >
              Forgot Password ?
            </Link>
          </div>
        </div>

        <div>
          <Button className="w-full"> Login</Button>
        </div>
      </Form>
    </div>
  );
}
