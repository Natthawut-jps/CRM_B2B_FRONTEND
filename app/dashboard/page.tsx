import CardAnalyze  from "@/app/dashboard/(components)/card-analyze";
import KpiChart from "./(components)/chart-KpiChart";
import { TableDashboad } from "@/app/dashboard/(components)/table-dashboad";

export default function Dashboad() {
    return (
        <div className="mt-4 mr-4 w-full space-y-1.5">
                <CardAnalyze />
                <KpiChart />
                <TableDashboad />
        </div>
    )
}