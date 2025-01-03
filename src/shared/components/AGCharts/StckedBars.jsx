import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";

function getData() {
    return [
        {
            quarter: "Q1'18",
            iphone: 140,
            mac: 16,
            ipad: 14,
            wearables: 12,
            services: 20,
        },
        {
            quarter: "Q2'18",
            iphone: 124,
            mac: 20,
            ipad: 14,
            wearables: 12,
            services: 30,
        },
        {
            quarter: "Q3'18",
            iphone: 112,
            mac: 20,
            ipad: 18,
            wearables: 14,
            services: 36,
        },
        {
            quarter: "Q4'18",
            iphone: 118,
            mac: 24,
            ipad: 14,
            wearables: 14,
            services: 36,
        },
        {
            quarter: "Q1'19",
            iphone: 124,
            mac: 18,
            ipad: 16,
            wearables: 18,
            services: 26,
        },
        {
            quarter: "Q2'19",
            iphone: 108,
            mac: 20,
            ipad: 16,
            wearables: 18,
            services: 40,
        },
        {
            quarter: "Q3'19",
            iphone: 96,
            mac: 22,
            ipad: 18,
            wearables: 24,
            services: 42,
        },
        {
            quarter: "Q4'19",
            iphone: 104,
            mac: 22,
            ipad: 14,
            wearables: 20,
            services: 40,
        },
    ];
}

export default function StackedBars() {
    const [options, setOptions] = useState({
        title: {
            text: "Apple's Revenue by Product Category",
        },
        subtitle: {
            text: "In Billion U.S. Dollars",
        },
        data: getData(),
        series: [
            {
                type: "bar",
                xKey: "quarter",
                yKey: "iphone",
                yName: "iPhone",
                stacked: true,
                cornerRadius: 10,
            },
            {
                type: "bar",
                xKey: "quarter",
                yKey: "mac",
                yName: "Mac",
                stacked: true,
                cornerRadius: 10,
            },
            {
                type: "bar",
                xKey: "quarter",
                yKey: "ipad",
                yName: "iPad",
                stacked: true,
                cornerRadius: 10,
            },
            {
                type: "bar",
                xKey: "quarter",
                yKey: "wearables",
                yName: "Wearables",
                stacked: true,
                cornerRadius: 10,
            },
            {
                type: "bar",
                xKey: "quarter",
                yKey: "services",
                yName: "Services",
                stacked: true,
                cornerRadius: 10,
            },
        ],
    });

    return <AgCharts options={options} />;
}