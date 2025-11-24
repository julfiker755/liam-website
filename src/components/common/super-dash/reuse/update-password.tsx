import { FromInput } from "@/components/reusable/form-input";
import Form from "@/components/reusable/from";
import { Button } from "@/components/ui";
import { change_Pass, cn } from "@/lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

export default function UpdatePassword({
  btnStyle,
  btnStyle2,
  className,
  inputStyle,
}: any) {
  const from2 = useForm({
    resolver: zodResolver(change_Pass),
    defaultValues: {
      current_password: "",
      new_password: "",
      c_password: "",
    },
  });

  const handlePasswordSubmit = async (values: FieldValues) => {
    console.log(values);
    // toast.success("Update Successful", {
    //   description: "Your profile has been updated successfully",
    // });
  };
  return (
    <Form from={from2} onSubmit={handlePasswordSubmit}>
      <div className={cn("space-y-6", className)}>
        <FromInput
          label="Current Password"
          name="current_password"
          placeholder="Enter current password"
          className="h-10"
          eye={true}
        />
        <FromInput
          label="New Password"
          name="new_password"
          placeholder="Enter new password"
          className="h-10"
          eye={true}
        />
        <FromInput
          label="Retype New Password"
          name="c_password"
          placeholder="Enter retype new password"
          className="h-10"
          eye={true}
        />
        <div className={btnStyle2}>
          <Button className={cn("w-full", btnStyle)}>Save Changes</Button>
        </div>
      </div>
    </Form>
  );
}
