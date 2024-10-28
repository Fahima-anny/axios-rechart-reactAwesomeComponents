import { LineChart as LC, Line,XAxis,YAxis } from 'recharts';


const LineChart = () => {

  let studentData =    
  [
    { "id": 1, "name": "Arif", "math": 78, "physics": 85, "chemistry": 80 },
    { "id": 2, "name": "Bithi", "math": 85, "physics": 89, "chemistry": 84 },
    { "id": 3, "name": "Chowdhury", "math": 92, "physics": 91, "chemistry": 88 },
    { "id": 4, "name": "Dipa", "math": 66, "physics": 75, "chemistry": 70 },
    { "id": 5, "name": "Emon", "math": 88, "physics": 82, "chemistry": 86 },
    { "id": 6, "name": "Farhan", "math": 74, "physics": 78, "chemistry": 72 },
    { "id": 7, "name": "Gazi", "math": 95, "physics": 94, "chemistry": 96 },
    { "id": 8, "name": "Hira", "math": 81, "physics": 80, "chemistry": 83 },
    { "id": 9, "name": "Iqbal", "math": 69, "physics": 72, "chemistry": 71 },
    { "id": 10, "name": "Jannat", "math": 90, "physics": 88, "chemistry": 87 }
  ]
  
      

    return (
        <div className='mx-auto'>
            <LC width={800} height={400} data={studentData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
<Line dataKey="math" stroke='green'></Line>
{/* <Line dataKey="physics" stroke='purple'></Line> */}
{/* <Line dataKey="math"></Line> */}
            </LC>
        </div>
    );
};

export default LineChart;