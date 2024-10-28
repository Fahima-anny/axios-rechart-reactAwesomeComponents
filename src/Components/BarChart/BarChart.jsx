import { BarChart as Bchart, Bar,XAxis,YAxis } from 'recharts';

const BarChart = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 2490,
          pv: 3300,
          amt: 2600,
        },
        {
          name: 'Page G',
          uv: 3090,
          pv: 2300,
          amt: 2000,
        },
        {
          name: 'Page G',
          uv: 1490,
          pv: 2300,
          amt: 1100,
        },
        {
          name: 'Page G',
          uv: 5490,
          pv: 3300,
          amt: 2600,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
       <div className='mt-20'>
        <Bchart width={800} height={500} data={data}>
<XAxis></XAxis>
<YAxis></YAxis>
<Bar dataKey="uv" fill="pink"></Bar>
</Bchart>
       </div>
    );
};

export default BarChart;