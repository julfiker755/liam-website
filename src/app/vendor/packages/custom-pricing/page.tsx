import SubTitle from "@/components/reusable/title";
import { Button, Switch } from "@/components/ui";

export default function CustomPricing() {
  return (
    <div className="container py-10">
      <SubTitle text="Custom Pricing Management" svg={false} />
      <div className="bg-secondary flex justify-between items-center flex-wrap p-4 mt-10 rounded-md">
        <div>
          <h2 className="text-xl font-semibold">Custom pricing</h2>
          <p>
            If enable, users will be able to create custom package and order it
            to you.
          </p>
        </div>

        <div className="flex items-center mt-2 lg:mt-0 space-x-2">
          <Switch className="cursor-pointer" id="airplane-mode" />
        </div>
      </div>
      <Button size="lg">Save changes</Button>
    </div>
  );
}
