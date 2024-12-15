import { Box, Typography, useTheme } from '@mui/material';
import _ from 'lodash';
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import GradesChartCustomTooltip from '../gradesChartCustomTooltip/GradesChartCustomTooltip';
import type { IGrade } from 'contract/interfaces/academics/Academics';

interface GradesSummarizeChartProps {
  grades: IGrade[];
}

const GradesSummarizeChart = ({ grades }: GradesSummarizeChartProps) => {
  const {
    palette: {
      customColors: { deepRed, orange, blue, darkGreen },
    },
  } = useTheme();

  const gradeGroups = _.groupBy(grades, 'grade');
  const groupedData = [
    { grade: 2, count: gradeGroups[2]?.length ?? 0, fill: deepRed },
    { grade: 3, count: gradeGroups[3]?.length ?? 0, fill: orange },
    { grade: 4, count: gradeGroups[4]?.length ?? 0, fill: blue },
    { grade: 5, count: gradeGroups[5]?.length ?? 0, fill: darkGreen },
  ];

  if (groupedData.length === 0) {
    return null;
  }

  return (
    <Box sx={{ background: 'white', my: 4, borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{ py: 4 }}>
        Grades Presentation
      </Typography>

      <ResponsiveContainer width="100%" minHeight="25vh" maxHeight={350}>
        <BarChart data={groupedData} margin={{ top: 0, bottom: 20, left: -5, right: 10 }}>
          <Bar dataKey="count" fill="red" maxBarSize={170} radius={[5, 5, 0, 0]}>
            <LabelList dataKey="count" position="center" fill="white" fontSize={16} fontWeight="bold" />
          </Bar>
          <XAxis
            dataKey="grade"
            allowDecimals={false}
            tickLine={{ transform: 'translate(0, 4)' }}
            tickMargin={12}
            label={{
              value: 'Grade',
              position: 'insideBottom',
              offset: -1,
            }}
          />
          <YAxis
            allowDecimals={false}
            tick={false}
            label={{
              value: 'Amount',
              angle: -90,
            }}
          />
          <Tooltip content={<GradesChartCustomTooltip />} cursor={{ fill: 'transparent' }} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default GradesSummarizeChart;
