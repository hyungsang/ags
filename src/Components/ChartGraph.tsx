import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ChartLine, GuideBox, Typography } from "@midasit-dev/moaui";
import { ChartData, VarChartData, VarGraphType } from './variables';


const CompCharGraph = (props: any) => {
    const [loading, setLoading] = React.useState(false);
    const chartData = useRecoilValue(VarChartData);

    const graph_type = useRecoilValue(VarGraphType);

    const null_data: ChartData = { id: '', color: '', data: [] };
    const new_chartdata: ChartData[] = [
        (graph_type === '1') ? chartData[0] : chartData[2],
        (graph_type === '1') ? chartData[1] : null_data,
        null_data
    ];

    const x_label = (graph_type === '1') ? 'Period (sec)' : 'Time (sec)';
    const y_label = (graph_type === '1') ? 'Spectral Data' : 'Acceleration (g)';

    return (
        <GuideBox height="100%" verSpaceBetween>
            <GuideBox show fill='1' width="100%" center padding={1} borderRadius={1}>
                <Typography variant='h1'>Spectrum / Acceleration Graph</Typography>
            </GuideBox>
            <GuideBox loading={loading} center>
                <CompChartBottom xlabel={x_label} ylabel={y_label} data={new_chartdata} />
            </GuideBox>
        </GuideBox>
    );
}

export default CompCharGraph;

const CompChartBottom = (props: any) => {
    const { xlabel, ylabel, data } = props;
    return (
        <ChartLine
            width={850}
            height={300}
            data={data}
            legends
            axisBottom
            axisBottomTickValues={5}
            axisBottomDecimals={2}
            axisBottomTickRotation={0}
            axisBottomLegend={xlabel}
            axisBottomLegendOffset={50}
            axisLeft
            axisLeftTickValues={5}
            axisLeftDecimals={5}
            axisLeftTickRotation={0}
            axisLeftLegend={ylabel}
            axisLeftLegendOffset={-80}
            marginTop={20}
            marginRight={20}
            marginLeft={90}
            marginBottom={60}
            pointSize={0}
            xDecimals={2}
            yDecimals={4}            
        />
    );
}