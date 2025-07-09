// shadcn/ui components
import PotsCard from "@/components/PotsCard";
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
import { XIcon } from "lucide-react";
import { useState } from "react";

function Pots() {
  const [dialog, setDialog] = useState(false);
  return (
    <div className="container md:py-8 py-10 flex flex-col gap-8 lg:px-10 px-5">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">Pots</h1>
        <Dialog open={dialog}>
          <DialogTrigger
            onClick={() => setDialog(!dialog)}
            className="p-4 bg-gray-900 rounded-[8px] text-white hover:bg-gray-800 active:scale-110 transform transition duration-300"
          >
            + Add New Pot
          </DialogTrigger>
          <DialogContent className="p-8">
            <DialogHeader className="gap-0">
              <DialogTitle className="font-bold text-[32px] mb-5 flex justify-between items-center">
                <span>Add New Pot</span>
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
      {/* Cards */}
      <div className="grid lg:grid-cols-2  grid-cols-1 gap-6">
        <PotsCard />
        <PotsCard />
        <PotsCard />
      </div>
    </div>
  );
}

export default Pots;
