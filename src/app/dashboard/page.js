import {Button} from "@/components/Button";
import ArrowLeftIcon from '@/assets/svgs/icon-arrow-left.svg'
import ColumnChartIcon from '@/assets/svgs/icon-column-chart.svg'
import LineChartIcon from '@/assets/svgs/icon-line-chart.svg'
import PieChartIcon from '@/assets/svgs/icon-pie-chart.svg'
import BarChartIcon from '@/assets/svgs/icon-bar-chart.svg'
import {FilterHorizontalTabs} from "@/components/FilterHorizontalTabs";

export default function Dashboard() {
    const chartTypes = [
        {
            text: 'Column Chart',
            value: 'column-chart',
            icon: <ColumnChartIcon />
        },
        {
            text: 'Line Chart',
            value: 'line-chart',
            icon: <LineChartIcon />
        },
        {
            text: 'Pie Chart',
            value: 'pie-chart',
            icon: <PieChartIcon />
        },
        {
            text: 'Bar Chart',
            value: 'bar-chart',
            icon: <BarChartIcon />
        }
    ];

    return (
        <div className="dashboard-padding">
            <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <Button
                        type='button'
                        label=''
                        isSecondary={true}
                        hasIcon={true}
                        icon={<ArrowLeftIcon/>}
                    />
                </div>

                <FilterHorizontalTabs tabItems={chartTypes} preSelectedValue={chartTypes[0].value} />
            </div>
        </div>
    )
}
