"use client";
import AdminNavTitle from "@/components/common/super-dash/reuse/admin-nav";
import SearchBox from "@/components/common/super-dash/reuse/search-box";
import { TableNoItem } from "@/components/reusable/table-no-item";
import { TableSkeleton } from "@/components/reusable/table-skeleton";
import { CustomTable } from "@/components/reusable/custom-table";
import { Pagination } from "@/components/reusable/pagination";
import { Button, TableCell, TableRow } from "@/components/ui";
import useConfirmation from "@/provider/confirmation";
import { dummyJson } from "@/components/dummy-json";
import { DeleteBtn, PreviewBtn } from "@/components/reusable/btn";
import Modal from "@/components/reusable/modal";
import { useGlobalState } from "@/hooks";
import FavIcon from "@/favicon/favicon";
import { Plus } from "lucide-react";

const data = [
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    addOnName: "Add-on name",
    createdDate: "10th Nov, 2025 at 05:30 PM",
    usedBy: 25,
    actions: {
      edit: true,
      delete: true,
    },
  },
];
const intState = {
  page: 1,
  isAdd: false,
  isEdit: false,
};

export default function AddOn() {
  const { confirm } = useConfirmation();
  const [global, updateGlobal] = useGlobalState(intState);
  const headers = ["Add-on name", "Created date", "Used by", "Action"];
  const isLoading = false;

  const handleDelete = async (id: any) => {
    const confirmed = await confirm({
      title: "Delete add-on ?",
      description:
        "You are going to delete this user. After deleting, this user will no longer available in your platform",
    });
    if (confirmed) {
      console.log(id);
    }
  };
  return (
    <div>
      <AdminNavTitle
        title="Add-on Management"
        subTitle="You can manage all the add-ons of your platform from here"
      />
      <div className="flex flex-wrap space-y-3 lg:space-y-0 mt-2 items-center justify-between">
        <SearchBox onChange={(e) => console.log(e)} />
        <Button onClick={() => updateGlobal("isAdd", true)} size="lg">
          <Plus />
          Add more
        </Button>
      </div>
      <CustomTable
        headers={headers}
        pagination={
          <ul className="flex items-center flex-wrap justify-between py-3">
            <li className="flex">
              Total:
              <sup className="font-medium text-2xl relative -top-3 px-2 ">
                500
              </sup>
              add-ons
            </li>
            <li>
              <Pagination
                onPageChange={(v: any) => updateGlobal("page", v)}
                {...dummyJson.meta}
              />
            </li>
          </ul>
        }
      >
        {isLoading ? (
          <TableSkeleton colSpan={headers?.length} tdStyle="!pl-2" />
        ) : data?.length > 0 ? (
          data?.map((item, index) => (
            <TableRow key={index} className="border">
              <TableCell className="relative">
                <div className="flex items-center">
                  <div className="bg-primary/10 grid   place-items-center size-9 rounded-full">
                    <FavIcon className="size-5" name="add_ons_cc" />
                  </div>
                  <span className="ml-2">{item.addOnName}</span>
                </div>
              </TableCell>
              <TableCell>{item.createdDate}</TableCell>
              <TableCell>
                <h1 className="ml-6">{item.usedBy}</h1>
              </TableCell>
              <TableCell>
                <ul className="flex gap-2">
                  <li>
                    <PreviewBtn onClick={() => updateGlobal("isEdit", true)} />
                  </li>
                  <li>
                    <DeleteBtn onClick={() => handleDelete("4343")} />
                  </li>
                </ul>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableNoItem
            colSpan={headers?.length}
            title="No users are available at the moment"
            tdStyle="!bg-background"
          />
        )}
      </CustomTable>
      {/* ============== add on  ============== */}
      <Modal
        open={global.isAdd}
        setIsOpen={(v: any) => updateGlobal("isAdd", v)}
        title="User Details"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <h1>Add Add-on</h1>
      </Modal>
      {/* ============== add edit  ============== */}
      <Modal
        open={global.isEdit}
        setIsOpen={(v: any) => updateGlobal("isEdit", v)}
        title="User Details"
        titleStyle="text-center"
        className="sm:max-w-xl"
      >
        <h1>Add Edit</h1>
      </Modal>
    </div>
  );
}

function EventCardSm({ icon, title, value }: any) {
  return (
    <div className="flex *:text-black items-center bg-secondary p-3 rounded-xl gap-2 text-muted-foreground">
      <span className="bg-white size-12 rounded-full grid place-items-center">
        {" "}
        <FavIcon name={icon} />
      </span>
      <div className="flex flex-col">
        <span className="text-base leading-4">{title}</span>
        <span className="text-xl font-medium">{value}</span>
      </div>
    </div>
  );
}
