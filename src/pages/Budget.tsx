import { useState } from "react";
import MyChart from "@/components/PieChart";
import BudgetsCard from "@/components/BudgetsCard";

// lucide icons
import { XIcon } from "lucide-react";

// shadcn/ui components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCollectionsData } from "@/hooks/useCollectionData";
import { motion } from "framer-motion";

function Budget() {
  const { data, isPending } = useCollectionsData();
  const [dialog, setDialog] = useState(false);

  if (!isPending && !data?.budgets?.length) {
    return <h2>No data</h2>;
  }

  // code for future filter
  // const entertainment = data?.transactions
  //   .filter((item) => item.category === "Entertainment")
  //   .slice(0, 3);

  // const diningOut = data?.transactions
  //   .filter((item) => item.category === "Dining Out")
  //   .slice(0, 3);

  // const bills = data?.transactions
  //   .filter((item) => item.category === "Bills")
  //   .slice(0, 3);

  // const personalCare = data?.transactions
  //   .filter((item) => item.category === "Personal Care")
  //   .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container md:py-8 py-10 flex flex-col gap-8 lg:px-10 px-5"
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Budgets</h1>
        <Dialog open={dialog}>
          <DialogTrigger
            onClick={() => setDialog(!dialog)}
            className="p-4 bg-gray-900 rounded-[8px] text-white hover:bg-gray-800 active:scale-110 transform transition duration-300"
          >
            + Add New Budget
          </DialogTrigger>
          <DialogContent className="p-8">
            <DialogHeader className="gap-0">
              <DialogTitle className="font-bold text-[32px] mb-5 flex justify-between items-center">
                <span>
                  Add New Budget <br />{" "}
                  <span className="underline">Coming soon!</span>
                </span>
                <XIcon
                  onClick={() => setDialog(false)}
                  className="border rounded-full border-gray-500 text-gray-500"
                />
              </DialogTitle>
              <DialogDescription>
                Choose a category to set a spending budget. These categories can
                help you monitor spending.
              </DialogDescription>
              <form className="flex flex-col gap-4 mt-5">
                <p>Budget Category</p>
                <Select name="budget-category">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Bills">Bills</SelectItem>
                    <SelectItem value="Groceries">Groceries</SelectItem>
                    <SelectItem value="Dining Out">Dining Out</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Personal Care">Personal Care</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="General">General</SelectItem>
                  </SelectContent>
                </Select>
                <div className="grid gap-3">
                  <Label htmlFor="maximum_spend">Maximum Spend</Label>
                  <Input name="maximum_spend" defaultValue="e.g. 2000" />
                </div>
                <Label htmlFor="budget-theme">Theme</Label>
                <Select name="budget-theme">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Green">Green</SelectItem>
                    <SelectItem value="Yellow">Yellow</SelectItem>
                    <SelectItem value="Cyan">Cyan</SelectItem>
                    <SelectItem value="Navy">Navy</SelectItem>
                    <SelectItem value="Red">Red</SelectItem>
                    <SelectItem value="Purple">Purple</SelectItem>
                    <SelectItem value="Turquoise">Turquoise</SelectItem>
                    <SelectItem value="Brown">Brown</SelectItem>
                    <SelectItem value="Magenta">Magenta</SelectItem>
                    <SelectItem value="Blue">Blue</SelectItem>
                    <SelectItem value="Grey">Grey</SelectItem>
                    <SelectItem value="Army">Army</SelectItem>
                    <SelectItem value="Pink">Pink</SelectItem>
                    <SelectItem value="Orange">Orange</SelectItem>
                  </SelectContent>
                </Select>

                <button
                  onClick={() => setDialog(!dialog)}
                  type="button"
                  className="py-4 bg-gray-900 text-white rounded-[8px] mt-1"
                >
                  Add Budget
                </button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="px-8 pb-8 rounded-[12px] bg-white h-full">
          <MyChart className="h-[300px] w-[300px]" />

          <div>
            <h3 className="mb-6 font-bold w-[360px] text-[20px]">
              Spending Summary
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#277C78] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Entertainment</p>
                <h4 className="text-[16px] font-bold">
                  $15.00{" "}
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $50.00
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#82C9D7] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Bills</p>
                <h4 className="text-[16px] font-bold">
                  $150.00
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $750.00
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#F2CDAC] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Dining Out</p>
                <h4 className="text-[16px] font-bold">
                  $133.00
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $75.00
                  </span>
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b-1 border-gray-200 pb-4">
              <span className="h-5 w-1 rounded-[8px] bg-[#626070] inline-block" />
              <div className="flex justify-between w-full">
                <p className="text-gray-500 text-[14px]">Personal Care</p>
                <h4 className="text-[16px] font-bold">
                  $40.00
                  <span className="font-normal text-[12px] text-gray-500 ml-2">
                    of $100.00
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          {data &&
            data?.budgets?.map((budget) => (
              <BudgetsCard key={budget.id} budget={budget} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Budget;
