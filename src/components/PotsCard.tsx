import React, { useState } from "react";
import { EllipsisVertical, XIcon } from "lucide-react";
import { Progress } from "./ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

function PotsCard() {
  const [dialogEdit, setDialogEdit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  return (
    <div className="flex flex-col gap-8 bg-white rounded-[12px] p-8 w-full">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          <span className="bg-[#277C78] rounded-full inline-block w-4 h-4" />
          <span className="font-bold text-[20px] text-gray-900">Savings</span>
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
                <span>Edit Pot</span>
                <XIcon
                  onClick={() => setDialogEdit(false)}
                  className="border rounded-full border-gray-500 text-gray-500"
                />
              </DialogTitle>
              <DialogDescription>
                If your saving targets change, feel free to update your pots.
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
                <span>Delete ‘Savings’?</span>
                <XIcon
                  onClick={() => setDialogDelete(false)}
                  className="border rounded-full border-gray-500 text-gray-500"
                />
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this pot? This action cannot be
                reversed, and all the data inside it will be removed forever.
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
      <div>
        <div className="flex gap-4 items-center justify-between">
          <p className="text-gray-500 w-full">Total Saved</p>
          <h4 className="font-bold text-[32px]">$159.00</h4>
        </div>
        <div className="mt-4">
          <Progress color="#277C78" width="7%" value={7} />
          <div className="flex justify-between mt-[13px]">
            <p>7.95%</p>
            <p className="text-gray-500 text-[14px]">Target of $2,000</p>
          </div>
        </div>
      </div>
      <div className="flex  flex-row w-full gap-4 font-bold text-[14px]">
        <button className="rounded-[8px] bg-[#F8F4F0] py-4 w-full hover:bg-white hover:border-[#98908B] border border-transparent cursor-pointer transition-colors duration-300">
          + Add Money
        </button>
        <button className="rounded-[8px] bg-[#F8F4F0] py-4 w-full hover:bg-white hover:border-[#98908B] border border-transparent cursor-pointer transition-colors duration-300">
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default React.memo(PotsCard);
