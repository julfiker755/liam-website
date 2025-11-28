"use client";
import { DeleteBtn, PreviewBtn } from "@/components/reusable/btn";
import AdminNavTitle from "@/components/common/super-dash/reuse/admin-nav";
import SearchBox from "@/components/common/super-dash/reuse/search-box";
import { TableNoItem } from "@/components/reusable/table-no-item";
import { TableSkeleton } from "@/components/reusable/table-skeleton";
import { CustomTable } from "@/components/reusable/custom-table";
import { Pagination } from "@/components/reusable/pagination";
import SelectBox from "@/components/reusable/select-box";
import { Button, TableCell, TableRow } from "@/components/ui";
import useConfirmation from "@/provider/confirmation";
import { dummyJson } from "@/components/dummy-json";
import Avatars from "@/components/reusable/avater";
import { useGlobalState } from "@/hooks";
import Link from "next/link";
import { useState } from "react";

type VendorData = {
  id: number;
  avatar: string;
  name: string;
  email: string;
  address: string;
  business_name: string;
  business_address: string;
  totalPackage: number;
  totalStuff: number;
  status: string | null;
  actions: {
    view: boolean;
    delete: boolean;
  };
};

const initialData: VendorData[] = [
  {
    id: 1,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 2,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 3,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 4,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 5,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 6,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 7,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 8,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 9,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 10,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
  {
    id: 11,
    avatar: "/images/avatar.png",
    name: "Elizabeth Olson",
    email: "example@gmail.com",
    address: "47 W 13th St, New York, NY 10011, USA",
    business_name: "Tech Solutions Inc.",
    business_address: "123 Business Plaza, New York, NY 10001, USA",
    totalPackage: 6,
    totalStuff: 20,
    status: null,
    actions: {
      view: true,
      delete: true,
    },
  },
];

const intState = {
  page: 1,
  isPreview: false,
};

// Status color configuration
const getStatusStyle = (status: string | null) => {
  if (!status) return "";

  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border border-yellow-300";
    case "approved":
      return "bg-green-100 text-green-800 border border-green-300";
    case "rejected":
      return "bg-red-100 text-red-800 border border-red-300";
    default:
      return "";
  }
};

export default function Vendors() {
  const { confirm } = useConfirmation();
  const [global, updateGlobal] = useGlobalState(intState);
  const [data, setData] = useState<VendorData[]>(initialData);

  const headers = [
    "Name",
    "Email",
    "Business Name",
    "Business Address",
    "Total Package",
    "Total Stuff",
    "Action",
  ];
  const isLoading = false;

  const handleDelete = async (id: any) => {
    const confirmed = await confirm({
      title: "Delete vendor ?",
      description:
        "You are going to delete this vendor. After deleting, this vendor will no longer available in your platform",
    });
    if (confirmed) {
      console.log(id);
    }
  };

  const handleStatusChange = (vendorId: number, newStatus: string) => {
    setData((prevData) =>
      prevData.map((vendor) =>
        vendor.id === vendorId ? { ...vendor, status: newStatus } : vendor
      )
    );
    console.log(`Vendor ${vendorId} status changed to: ${newStatus}`);
  };

  return (
    <div>
      <AdminNavTitle
        title="Vendor Management"
        subTitle="You can manage all the vendors of your platform from here"
      />
      <div className="flex flex-wrap space-y-3 lg:space-y-0 mt-2 items-center justify-between">
        <SearchBox onChange={(e) => console.log(e)} />
        <SelectBox
          placeholder="Filter"
          icon={true}
          options={[
            { label: "New vendors", value: "new_vendors" },
            { label: "Most package offered", value: "most_package_offered" },
            { label: "Least package offered", value: "least_package_offered" },
          ]}
          triggerClassName="bg-secondary border border-none py-5"
        />
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
              vendors
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
                <div className="flex items-center gap-3">
                  <Avatars
                    src={""}
                    fallback={item.name}
                    alt="profile"
                    fallbackStyle="aStyle"
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <h5>{item.business_name}</h5>
              </TableCell>
              <TableCell>
                <h5>{item.business_address}</h5>
              </TableCell>
              <TableCell>
                <h5 className="ml-7">{item.totalPackage}</h5>
              </TableCell>
              <TableCell>
                <h5 className="ml-6">{item.totalStuff}</h5>
              </TableCell>
              <TableCell>
                <ul className="flex gap-2">
                  <li>
                    <Link href="/admin/vendors/123">
                      <PreviewBtn />
                    </Link>
                  </li>
                  <li>
                    <DeleteBtn onClick={() => handleDelete(item.id)} />
                  </li>
                  <li>
                    {item.status ? (
                      <div
                        className={`px-4 py-2.5 rounded-md font-medium text-center min-w-[150px] cursor-pointer ${getStatusStyle(item.status)}`}
                        onClick={() =>
                          setData((prevData) =>
                            prevData.map((vendor) =>
                              vendor.id === item.id
                                ? { ...vendor, status: null }
                                : vendor
                            )
                          )
                        }
                      >
                        {item.status}
                      </div>
                    ) : (
                      <SelectBox
                        placeholder="Status Change"
                        icon={false}
                        options={[
                          { label: "Pending", value: "Pending" },
                          { label: "Approved", value: "Approved" },
                          { label: "Rejected", value: "Rejected" },
                        ]}
                        onChange={(value: string) =>
                          handleStatusChange(item.id, value)
                        }
                        triggerClassName="bg-secondary min-w-[150px] border border-none py-5"
                      />
                    )}
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
    </div>
  );
}
