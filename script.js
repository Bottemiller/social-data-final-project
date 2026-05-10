const weekdayHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

const weekdayCounts = [
    60,35,20,15,12,25,100,240,520,430,420,500,
    720,715,615,620,700,835,670,500,420,350,250,150
];

const weekendCounts = [
    165,100,65,50,30,25,45,95,165,300,430,560,
    650,700,710,700,680,640,600,530,450,380,320,220
];

const weekdayTrace = {
    x: weekdayHours,
    y: weekdayCounts,
    mode: 'lines',
    name: 'Weekday',
    line: {
        width: 4
    }
};

const weekendTrace = {
    x: weekdayHours,
    y: weekendCounts,
    mode: 'lines',
    name: 'Weekend',
    line: {
        width: 4
    }
};

const layout = {
    paper_bgcolor: '#111',
    plot_bgcolor: '#111',

    font: {
        color: 'white'
    },

    xaxis: {
        title: 'Hour of Day'
    },

    yaxis: {
        title: 'Average Pedestrian Count'
    },

    hovermode: 'x unified'
};

Plotly.newPlot(
    'lineChart',
    [weekdayTrace, weekendTrace],
    layout,
    {responsive: true}
);