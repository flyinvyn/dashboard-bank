import Card from "@/components/card/page";
import Dropdown from "@/components/dropdown/Page";
import ExpensesCard from "@/components/expenses-card/page";
import Invoice from "@/components/invoice/page";
import Sidebar from "@/components/sidebar/page";

export default function Home() {
  return (
    <>
      <div className="flex gap-6">
        <div>
          <Sidebar name={"Lekan Okeowo"} email={"demo@gmail.com"} />
        </div>
        <div>
          <div className="mt-10 rounded-xl bg-white w-full p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-color-primary font-semibold">All Expenses</h2>
              <Dropdown />
            </div>
            <div>
              <ExpensesCard />
            </div>
          </div>
          <div className="mt-7 rounded-xl bg-white w-full p-6 mb-10">
            <div className="flex justify-between items-center">
              <h2 className="text-color-primary font-semibold">Quick Invoice</h2>
              <button className="w-10 h-10 rounded-full bg-zinc-50 text-color-main text-lg">+</button>
            </div>
            <div>
              <Invoice />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 rounded-xl bg-white w-full p-6">
            <h2 className="text-color-primary font-semibold mb-5">My Card</h2>
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}
