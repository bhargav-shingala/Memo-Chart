import React, { memo, useMemo } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js'
import { Doughnut, PolarArea } from 'react-chartjs-2'
import './style.css';
import { Spin } from "antd";
import { ChartColor } from "../../constant";


ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale)

const ChartData = ({ income }) => {
    const totalInconme = income?.januray + income?.february + income?.march + income?.april

    const chartData = useMemo(() => {
        const januray = Math.round((income.januray * 100) / totalInconme)
        const february = Math.round((income.february * 100) / totalInconme)
        const march = Math.round((income.march * 100) / totalInconme)
        const april = Math.round((income.april * 100) / totalInconme)
        const parData = [januray, february, march, april]
        const highestper = parData.reduce((a, b) => Math.max(a, b), 0)
        const dataset = {
            datasets: [
                {
                    data: [income.januray, income.february, income.march, income.april],
                    backgroundColor: ChartColor?.color1,
                    borderWidth: 0
                }
            ]
        }
        const januryData = {
            datasets: [
                {
                    data: [januray, 100 - januray,],
                    backgroundColor: ChartColor?.color2,
                    borderWidth: 0
                }
            ]
        }
        const februaryData = {

            datasets: [
                {
                    data: [february, 100 - february,],
                    backgroundColor: ChartColor?.color3,
                    borderWidth: 0
                }
            ]
        }
        const overLapfebruaryData = {
            datasets: [
                {
                    data: [income.januray, income.february, income.march, income.april],
                    backgroundColor: ChartColor?.color4,
                    borderWidth: 0
                }
            ]
        }
        const overLapMarchData = {
            datasets: [
                {
                    data: [income.januray, income.february, income.march, income.april],
                    backgroundColor:ChartColor?.color5 ,
                    borderWidth: 0
                }
            ]
        }
        const overLapAprilData = {
            datasets: [
                {
                    data: [income.januray, income.february, income.march, income.april],
                    backgroundColor: ChartColor?.color6,
                    borderWidth: 0
                }
            ]
        }
        const marchData = {
            datasets: [
                {
                    data: [march, 100 - march,],
                    backgroundColor:ChartColor?.color7,
                    borderWidth: 0
                }
            ]
        }
        const aprilData = {
            datasets: [
                {
                    data: [april, 100 - april,],
                    backgroundColor: ChartColor?.color8,
                    borderWidth: 0
                }
            ]
        }


        const PolarAreaData = {
            datasets: [
                {
                    data: [income.januray, income.february, income.march, income.april],
                    backgroundColor: ChartColor?.color9,
                    borderWidth: 2
                }
            ]
        }


        const plugin = [
            {
                beforeDraw: (chart) => {
                    let width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx
                    ctx.restore();
                    var fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                    ctx.textColor = "red";
                    var text = `${highestper}%`,
                        textX = Math.round((width -
                            ctx.measureText(text).width) / 2),
                        textY = height / 2;
                    ctx.fillStyle = 'white';
                    ctx.fillText(text, textX, textY);
                    let fontSize1 = (height / 185).toFixed(2)
                    ctx.font = fontSize1 + 'em sans-serif'
                    ctx.textBaseline = 'top'
                    let text1 = `hight income`,
                        text1X = Math.round((width - ctx.measureText(text1).width) / 2),
                        text1Y = height / 1.8
                    ctx.fillText(text1, text1X, text1Y)
                    ctx.save();
                }
            }
        ]


        return { dataset, plugin, januryData, februaryData, marchData, aprilData, PolarAreaData, overLapfebruaryData, overLapMarchData, overLapAprilData }
    }, [income])



    return (
        <div style={{ marginLeft: 40 }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Income Info</h1>
            {income ?
                <div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <div style={{ width: '140px' }}>

                            <Doughnut
                                data={chartData?.dataset}
                                plugins={chartData?.plugin}
                                options={{
                                    cutout: 40
                                }}
                            />
                            <div className="chartlabel">normal Doughnut Chart</div>
                        </div>
                        <div>
                            <div style={{ position: 'relative', width: '300px' }}>


                                <Doughnut
                                    data={chartData?.januryData}
                                    options={{
                                        cutout: 120
                                    }}
                                />
                                <div
                                    className="mutipalchart"
                                    style={{
                                        width: "80%",
                                        height: "80%",
                                    }}>
                                    <Doughnut
                                        data={chartData?.februaryData}
                                        options={{
                                            cutout: 90
                                        }}
                                    />
                                    <div
                                        className="mutipalchart"
                                        style={{
                                            width: "75%",
                                            height: "75%",
                                        }}>
                                        <Doughnut
                                            data={chartData?.marchData}
                                            options={{
                                                cutout: 60
                                            }}
                                        />
                                        <div
                                            className="mutipalchart"
                                            style={{
                                                width: "68%",
                                                height: "68%",
                                            }}>
                                            <Doughnut
                                                data={chartData?.aprilData}
                                                options={{
                                                    cutout: 40
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chartlabel">multi Doughnut Chart</div>

                        </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: 20 }}>
                        <div style={{ width: '230px' }}>
                            <PolarArea data={chartData?.PolarAreaData} />
                            <div className="chartlabel">Polararea Chart</div>

                        </div>
                        <div>
                            <div style={{ position: 'relative', width: '210px', }}>

                                <Doughnut
                                    data={chartData?.januryData}

                                />
                                <div className="doughnut">
                                    <Doughnut
                                        data={chartData?.overLapfebruaryData}

                                    />
                                    <div className="doughnut" >
                                        <Doughnut
                                            data={chartData?.overLapMarchData}
                                            options={{
                                                cutout: 60
                                            }}
                                        />
                                        <div className="doughnut" >
                                            <Doughnut
                                                data={chartData?.overLapAprilData}
                                                options={{
                                                    cutout: 40
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chartlabel">Overlap Chart</div>
                        </div>
                    </div>
                </div>

                : <Spin />
            }
        </div>
    )
}

export default memo(ChartData)