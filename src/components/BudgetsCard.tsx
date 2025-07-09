import React, { useState } from "react";
// shadcn/ui components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, XIcon } from "lucide-react";
import OverviewCardTop from "./OverviewCardTop";
import type { Budget } from "@/types";

interface BudgetProps {
  budget: Budget;
}

function BudgetsCard({ budget }: BudgetProps) {
  const [dialogEdit, setDialogEdit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  return (
    <div className="flex flex-col bg-white rounded-[12px] p-8 w-full">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          <span
            className={`bg-[${budget.theme}] rounded-full inline-block w-4 h-4`}
          />
          <span className="font-bold text-[20px] text-gray-900">
            {budget.category}
          </span>
        </h2>

        <DropdownMenu>
          <DropdownMenuTrigger className="border-0 outline-0">
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-3 px-5">
            <DropdownMenuItem onClick={() => setDialogEdit(true)}>
              Edit Budget
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setDialogDelete(true)}>
              Delete Budget
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Edit dialog */}
        <Dialog open={dialogEdit}>
          <DialogContent className="p-8">
            <DialogHeader className="gap-0">
              <DialogTitle className="font-bold text-[32px] mb-5 flex justify-between items-center">
                <span>Edit Budget</span>
                <XIcon
                  onClick={() => setDialogEdit(false)}
                  className="border rounded-full border-gray-500 text-gray-500"
                />
              </DialogTitle>
              <DialogDescription>
                As your budgets change, feel free to update your spending
                limits.
              </DialogDescription>
              <form className="flex flex-col gap-4 mt-5">
                <Label htmlFor="budget-category">Budget Category</Label>
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
                  <Input
                    id="maximum_spend"
                    name="maximum_spend"
                    defaultValue="e.g. 2000"
                  />
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
                  onClick={() => setDialogEdit(!dialogEdit)}
                  type="button"
                  className="py-4 bg-gray-900 text-white rounded-[8px] mt-1"
                >
                  Add Budget
                </button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Delete Dialog */}
        <Dialog open={dialogDelete}>
          <DialogContent className="p-8">
            <DialogHeader className="gap-0">
              <DialogTitle className="font-bold text-[32px] mb-5 flex justify-between items-center">
                <span>Delete ‘Entertainment’?</span>
                <XIcon
                  onClick={() => setDialogDelete(false)}
                  className="border rounded-full border-gray-500 text-gray-500"
                />
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this budget? This action cannot
                be reversed, and all the data inside it will be removed forever.
              </DialogDescription>
              <button
                onClick={() => setDialogDelete(!dialogDelete)}
                type="button"
                className="py-4 bg-[#C94736] text-white rounded-[8px] my-5"
              >
                Yes, Confirm Deletion
              </button>
              <button>No, Go Back</button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-gray-500 w-full">Maximum of ${budget.maximum}</p>
        <div className="h-8 rounded-sm p-1 bg-[#F8F4F0]">
          <span
            className={`block h-full w-[25%] rounded-sm bg-[${budget.theme}]`}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex gap-4">
            <span
              className={`bg-[${budget.theme}] rounded-[8px] inline-block w-1 h-11 `}
            ></span>
            <div>
              <span className="text-[12px] text-gray-500">Spent</span>
              <h4 className="font-bold text-[14px]">$35.00</h4>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="bg-[#F8F4F0] rounded-[8px] inline-block w-1 h-11 "></span>
            <div>
              <span className="text-[12px] text-gray-500">Remaining</span>
              <h4 className="font-bold text-[14px]">$15.00</h4>
            </div>
          </div>
        </div>
        <div className="p-5 mt-5 bg-[#F8F4F0] rounded-[12px]">
          <OverviewCardTop path="/" link="See All" title="Latest Spending" />
          <div className="flex flex-col gap-3 mt-5">
            <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
              <h3 className="font-bold text-[12px]">James Thompson</h3>
              <div>
                <h4 className="font-bold text-[12px]">-$5.00</h4>
                <span className="text-[12px] text-[#696868]">11 Aug 2024</span>
              </div>
            </div>
            <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
              <h3 className="font-bold text-[12px]">James Thompson</h3>
              <div>
                <h4 className="font-bold text-[12px]">-$5.00</h4>
                <span className="text-[12px] text-[#696868]">11 Aug 2024</span>
              </div>
            </div>
            <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
              <h3 className="font-bold text-[12px]">James Thompson</h3>
              <div>
                <h4 className="font-bold text-[12px]">-$5.00</h4>
                <span className="text-[12px] text-[#696868]">11 Aug 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BudgetsCard);
