import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription
} from "@/components/ui/card"

export const data = [
    {name: "Churn Rate"},
    {name: "Retention Rate"},
    {name: "Conversion Rate"},
    {name: "CSAT"},
]
export default function CardAnalyze() {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-1.5">
            {data.map((data, index) => {
                return (
                    <Card key={index}>
                        <CardContent className="flex flex-col gap-y-2">
                            <CardDescription className="flex justify-between">
                                <p>{data.name}</p>
                                <Badge>
                                    {`+12%`}
                                </Badge>
                            </CardDescription>
                            <div className="flex flex-col gap-y-2.5">
                                <p>12000$</p>
                                <p>Trending up this month</p>
                            </div>
                            <CardDescription>Visitors for the last 6 months</CardDescription>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
