import { Legend, Pie, PieChart, Tooltip } from "recharts";
import CommunicationContext from "../../../Context/ContextHook";
import { useContext } from "react";
// #region Sample data


// #endregion
const Chart = () => {


  
  const { text, call, video } = useContext(CommunicationContext);

  const data = [
  { name: "Text", value: text.length, fill: '#7e35e1FF' },
  { name: "Call", value: call.length, fill: '#244d3fFF' },
  { name: "Video", value: video.length, fill: '#37a163FF' },
  
];

  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
  );
}

export default Chart