import { useState } from "react";
import OverviewCardTop from "@/components/OverviewCardTop";
import MyChart from "@/components/PieChart";

// lucide icons
import { EllipsisVertical } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Budget() {
  const [dialog, setDialog] = useState(false);
  const [dialogEdit, setDialogEdit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);

  return (
    <div className="container md:py-8 py-10 flex flex-col gap-8 lg:px-10 px-5">
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
                <span>Add New Budget</span>
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
          <div className="flex flex-col bg-white rounded-[12px] p-8 w-full">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#277C78] rounded-full inline-block w-4 h-4" />
                <span className="font-bold text-[20px] text-gray-900">
                  Entertainment
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
                          <SelectItem value="Entertainment">
                            Entertainment
                          </SelectItem>
                          <SelectItem value="Bills">Bills</SelectItem>
                          <SelectItem value="Groceries">Groceries</SelectItem>
                          <SelectItem value="Dining Out">Dining Out</SelectItem>
                          <SelectItem value="Transportation">
                            Transportation
                          </SelectItem>
                          <SelectItem value="Personal Care">
                            Personal Care
                          </SelectItem>
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
                      Are you sure you want to delete this budget? This action
                      cannot be reversed, and all the data inside it will be
                      removed forever.
                    </DialogDescription>
                    <button
                      onClick={() => setDialogEdit(!dialogEdit)}
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
              <p className="text-gray-500 w-full">Maximum of $50.00</p>
              <div className="h-8 rounded-sm p-1 bg-[#F8F4F0]">
                <span className="block h-full w-[25%] rounded-sm bg-[#277C78]" />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-4">
                  <span className="bg-[#277C78] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Remaining</span>
                    <h4 className="font-bold text-[14px]">$35.00</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#F8F4F0] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Spent</span>
                    <h4 className="font-bold text-[14px]">$15.00</h4>
                  </div>
                </div>
              </div>
              <div className="p-5 mt-5 bg-[#F8F4F0] rounded-[12px]">
                <OverviewCardTop
                  path="/"
                  link="See All"
                  title="Latest Spending"
                />
                <div className="flex flex-col gap-3 mt-5">
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-[12px] p-8 w-full">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#82C9D7] rounded-full inline-block w-4 h-4" />
                <span className="font-bold text-[20px] text-gray-900">
                  Bills
                </span>
              </h2>
              <EllipsisVertical />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 w-full">Maximum of $50.00</p>
              <div className="h-8 rounded-sm p-1 bg-[#F8F4F0]">
                <span className="block h-full w-[25%] rounded-sm bg-[#82C9D7]" />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-4">
                  <span className="bg-[#82C9D7] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Remaining</span>
                    <h4 className="font-bold text-[14px]">$150</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#F8F4F0] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Spent</span>
                    <h4 className="font-bold text-[14px]">$600</h4>
                  </div>
                </div>
              </div>
              <div className="p-5 mt-5 bg-[#F8F4F0] rounded-[12px]">
                <OverviewCardTop
                  path="/"
                  link="See All"
                  title="Latest Spending"
                />
                <div className="flex flex-col gap-3 mt-5">
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-[12px] p-8 w-full">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#F2CDAC] rounded-full inline-block w-4 h-4" />
                <span className="font-bold text-[20px] text-gray-900">
                  Dining Out
                </span>
              </h2>
              <EllipsisVertical />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 w-full">Maximum of $50.00</p>
              <div className="h-8 rounded-sm p-1 bg-[#F8F4F0]">
                <span className="block h-full w-[100%] rounded-sm bg-[#F2CDAC]" />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-4">
                  <span className="bg-[#F2CDAC] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Remaining</span>
                    <h4 className="font-bold text-[14px]">$35.00</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#F8F4F0] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Spent</span>
                    <h4 className="font-bold text-[14px]">$0</h4>
                  </div>
                </div>
              </div>
              <div className="p-5 mt-5 bg-[#F8F4F0] rounded-[12px]">
                <OverviewCardTop
                  path="/"
                  link="See All"
                  title="Latest Spending"
                />
                <div className="flex flex-col gap-3 mt-5">
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-[12px] p-8 w-full">
            <div className="flex justify-between items-center">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#626070] rounded-full inline-block w-4 h-4" />
                <span className="font-bold text-[20px] text-gray-900">
                  Personal Care
                </span>
              </h2>
              <EllipsisVertical />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 w-full">Maximum of $50.00</p>
              <div className="h-8 rounded-sm p-1 bg-[#F8F4F0]">
                <span className="block h-full w-[66%] rounded-sm bg-[#626070]" />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex gap-4">
                  <span className="bg-[#626070] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Remaining</span>
                    <h4 className="font-bold text-[14px]">$40.00</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-[#F8F4F0] rounded-[8px] inline-block w-1 h-11 "></span>
                  <div>
                    <span className="text-[12px] text-gray-500">Spent</span>
                    <h4 className="font-bold text-[14px]">$60.00</h4>
                  </div>
                </div>
              </div>
              <div className="p-5 mt-5 bg-[#F8F4F0] rounded-[12px]">
                <OverviewCardTop
                  path="/"
                  link="See All"
                  title="Latest Spending"
                />
                <div className="flex flex-col gap-3 mt-5">
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-1 border-[#696868]/15 text-gray-900 flex justify-between items-center">
                    <h3 className="font-bold text-[12px]">James Thompson</h3>
                    <div>
                      <h4 className="font-bold text-[12px]">-$5.00</h4>
                      <span className="text-[12px] text-[#696868]">
                        11 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
