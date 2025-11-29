"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FromInput } from "@/components/reusable/form-input";
import {
  BusinessIcon,
  EmailIcon,
  GoogleIcon,
  LocationFieldIcon,
  LockIcon,
  UserIcon,
} from "@/icon";
import Form from "@/components/reusable/from";
import SubTitle from "@/components/reusable/title";
import { ArrowRight } from "lucide-react";
import { register_sc, register_vendor } from "@/lib";
import Link from "next/link";

export default function VendorRegister() {
  const router = useRouter();
  const from = useForm({
    resolver: zodResolver(register_vendor),
    defaultValues: {
      name: "",
      business_name: "",
      address: "",
      email: "",
      password: "",
      c_password: "",
    },
  });

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div className="w-11/12 lg:max-w-4xl bg-secondary rounded-figma-sm p-5 lg:p-10 my-30 mx-auto">
      <SubTitle text="Vendor Registration" svg={false} />
      <Form className="space-y-4 pt-8" from={from} onSubmit={handleSubmit}>
        <FromInput
          className="h-10"
          name="name"
          placeholder="Your full name"
          icon={<UserIcon />}
        />
        <FromInput
          className="h-10"
          name="business_name"
          placeholder="Your business name"
          icon={<BusinessIcon />}
        />
        <FromInput
          className="h-10"
          name="address"
          placeholder="Your address"
          icon={<LocationFieldIcon />}
        />
        <FromInput
          className="h-10"
          name="email"
          placeholder="Email"
          icon={<EmailIcon />}
        />

        <FromInput
          className="h-10"
          name="password"
          placeholder="Password"
          eye={true}
          icon={<LockIcon />}
        />
        <FromInput
          className="h-10"
          name="c_password"
          placeholder="Confirm password"
          eye={true}
          icon={<LockIcon />}
        />

        <div>
          <Link href={"/auth/vendor-verification"}>
            <Button className="w-full"> Login</Button>
          </Link>
        </div>
      </Form>

      <div className="space-y-4 mt-10">
        <div className="relative mt-1">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center ">
            <span className="px-2 bg-secondary text-figma-secondary">
              or login with
            </span>
          </div>
        </div>
        <div className="size-11 cursor-pointer grid bg-white mx-auto  place-items-center rounded-full">
          <GoogleIcon />
        </div>
        <div className="text-center  text-figma-secondary">
          Already have an account ? {"  "}
          <Link
            href="/auth"
            className="inline-flex items-center text-figma-secondary hover:underline"
          >
            {" "}
            Login here
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
