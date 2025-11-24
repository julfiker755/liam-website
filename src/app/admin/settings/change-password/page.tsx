"use client";

import UpdatePassword from "@/components/common/super-dash/reuse/update-password";

export default function ChangePassword() {
  return (
    <div>
      <div className="size-16 border mx-auto mb-6 rounded-xl grid place-items-center">
        {/* <FavIcon name="new_pass" /> */}
      </div>
      <UpdatePassword
        btnStyle2="flex w-full justify-end"
        btnStyle="w-fit rounded-2xl h-10 px-6"
        className="space-y-8"
        inputStyle="rounded-xl h-11"
      />
    </div>
  );
}
