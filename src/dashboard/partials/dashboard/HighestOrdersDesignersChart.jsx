import React, { useEffect, useState } from "react"
import DoughnutChart from "../../charts/DoughnutChart"

// Import utilities
import { tailwindConfig } from "../../utils/Utils"
import { useSelector } from "react-redux"

function HighestOrdersDesignersChart({ maxRated, text, values }) {
    const chartData = {
        labels:
            maxRated &&
            maxRated.map((item) => {
                return item.myName
            }),
        datasets: [
            {
                label: text,
                data: values,
                backgroundColor: [
                    tailwindConfig().theme.colors.indigo[500],
                    tailwindConfig().theme.colors.blue[400],
                    tailwindConfig().theme.colors.indigo[800],
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.indigo[600],
                    tailwindConfig().theme.colors.blue[500],
                    tailwindConfig().theme.colors.indigo[900],
                ],
                hoverBorderColor: tailwindConfig().theme.colors.white,
            },
        ],
    }

    return (
        <div className="flex flex-col col-span-4 sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">{text}</h2>
            </header>
            {/* Chart built with Chart.js 3 */}
            {/* Change the height attribute to adjust the chart height */}
            {maxRated && (
                <DoughnutChart data={chartData} width={389} height={260} />
            )}
        </div>
    )
}

export default HighestOrdersDesignersChart
