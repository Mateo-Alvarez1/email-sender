import { Button } from "../ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clients = [
  {
    name: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, New York, NY",
  },
  {
    name: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    address: "456 Oak St, Los Angeles, CA",
  },
  {
    name: "Michael",
    lastname: "Johnson",
    email: "michael.johnson@example.com",
    phone: "456-789-0123",
    address: "789 Pine St, Chicago, IL",
  },
  {
    name: "Emily",
    lastname: "Brown",
    email: "emily.brown@example.com",
    phone: "654-321-9876",
    address: "321 Cedar St, Houston, TX",
  },
  {
    name: "David",
    lastname: "Wilson",
    email: "david.wilson@example.com",
    phone: "321-654-0987",
    address: "987 Elm St, San Francisco, CA",
  },
  {
    name: "Sophia",
    lastname: "Davis",
    email: "sophia.davis@example.com",
    phone: "789-012-3456",
    address: "654 Maple St, Miami, FL",
  },
  {
    name: "James",
    lastname: "Miller",
    email: "james.miller@example.com",
    phone: "012-345-6789",
    address: "456 Birch St, Seattle, WA",
  },
];

export const Contacts = () => {
  return (
    <div className="bg-zinc-900 bg-opacity-95 w-screen h-screen">
      <div className="h-28 flex flex-col lg:flex-row items-center justify-between px-20 pt-2">
        <h2 className="text-xl pt-5 lg:pt-0 text-gray-200">Contacts</h2>
        <form className="flex items-center">
          <input
            className="py-1.5 font-medium text-base px-3 rounded-lg mr-2 outline-none border-none"
            type="text"
            placeholder="Search"
            name=""
          />
          <Button className=" w-10/12  text-normal lg:flex items-center text-gray-200  outline outline-1 outline-gray-300 hover:bg-zinc-400 hover:bg-opacity-20">
            Search
          </Button>
        </form>
      </div>
      <div className="px-10 mt-10">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[220px] text-center text-gray-300 text-xl">
                Name
              </TableHead>
              <TableHead className="w-[250px] text-center text-gray-300 text-xl">
                Lastname
              </TableHead>
              <TableHead className="w-[250px] text-center text-gray-300 text-xl">
                Email
              </TableHead>
              <TableHead className="w-[250px] text-center text-gray-300 text-xl">
                Phone
              </TableHead>
              <TableHead className="w-[240px] text-center text-gray-300 text-xl">
                Address
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium text-center text-white text-sm font-normal">
                  {invoice.name}
                </TableCell>
                <TableCell className="font-medium text-center text-white text-sm font-normal">
                  {invoice.lastname}
                </TableCell>
                <TableCell className="font-medium text-center text-white text-sm font-normal">
                  {invoice.email}
                </TableCell>
                <TableCell className="font-medium text-center text-white text-sm font-normal">
                  {invoice.phone}
                </TableCell>
                <TableCell className="font-medium text-center text-white text-sm font-normal">
                  {invoice.address}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="w-10 clear-start bg-gray-200">
            <TableRow>
              <TableCell className="pl-20" colSpan={4}>
                Total Clientes
              </TableCell>
              <TableCell className="pl-28">10</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};
