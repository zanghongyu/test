
var option1 = {
    tooltip: {
        show: true
    },
    legend: {
        data: ['供电量','售电量']
    },
    xAxis: [
        {
            type: 'category',
            axisLabel:{
                interval:0,
                rotate:80,//倾斜度 -90 至 90 默认为0
                margin:2,
                textStyle:{
                    color:"#000000"
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value'

        }
    ],
    series: [
        {
            'name': '供电量',
            'type': 'bar'
        },
        {
            'name': '售电量',
            'type': 'bar'
        }
    ]
};
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('main1'));
// 指定图表的配置项和数据
var x = [];
var y = [];
var y1 = [];
$(document).ready(function () {
    $.ajax({
        url: './package.json',
        type: 'post',
        dataType: 'json',
        success: function (rdata) {
            console.log(rdata);
            console.log(rdata.x);
            x = rdata.x;
            y = rdata.y;
            y1 = rdata.y1;
            option1.xAxis[0].data = x;
            option1.series[0].data = y;
            option1.series[1].data = y1;
            myChart1.setOption(option1);
            myChart1.hideLoading();
        }
    })
});



var option2 = {
    tooltip: {
        show: true
    },
    legend: {
        data: ['供电量','售电量']
    },
    xAxis: [
        {
            type: 'category',
            axisLabel:{
                interval:0,
                rotate:80,//倾斜度 -90 至 90 默认为0
                margin:2,
                textStyle:{
                    color:"#000000"
                }
            }

        }
    ],
    yAxis: [
        {
            type: 'value'

        }
    ],
    series: [
        {
            'name': '供电量',
            'type': 'line'
        },
        {
            'name': '售电量',
            'type': 'line'
        }
    ]
};
// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
var x1 = [];
var y1 = [];
var y11 = [];
$(document).ready(function () {
    $.ajax({
        url: './package1.json',
        type: 'post',
        dataType: 'json',
        success: function (rdata) {
            console.log(rdata);
            console.log(rdata.x);
            x1 = rdata.x;
            y1 = rdata.y;
            y11 = rdata.y1;
            option2.xAxis[0].data = x1;
            option2.series[0].data = y1;
            option2.series[1].data = y11;
            myChart2.setOption(option2);
            myChart2.hideLoading();
        }
    })
});


// 基于准备好的dom，初始化echarts实例
var myChart3 = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
var option3 = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {},
    xAxis: {},
    yAxis: {},
    series: []
};
$(document).ready(function () {
    $.ajax({
        url: '/src/data',
        type: 'post',
        dataType: 'json',
        success: function (rdata) {
            option3.xAxis = rdata.x;
            option3.series = rdata.y;
            option3.legend = rdata;
        }
    })
});
myChart3.setOption(option3);


// 基于准备好的dom，初始化echarts实例
var myChart4 = echarts.init(document.getElementById('main4'));
// 指定图表的配置项和数据
var option4 = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {},
    xAxis: {},
    yAxis: {},
    series: []
};
$(document).ready(function () {
    $.ajax({
        url: '/src/data',
        type: 'post',
        dataType: 'json',
        success: function (rdata) {
            option4.xAxis = rdata.x;
            option4.series = rdata.y;
            option4.legend = rdata;
        }
    })
});
myChart4.setOption(option4);


// 基于准备好的dom，初始化echarts实例
var myChart5 = echarts.init(document.getElementById('main5'));
// 指定图表的配置项和数据
var option5 = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {},
    xAxis: {},
    yAxis: {},
    series: []
};
$(document).ready(function () {
    $.ajax({
        url: '/src/data',
        type: 'post',
        dataType: 'json',
        success: function (rdata) {
            option5.xAxis = rdata.x;
            option5.series = rdata.y;
            option5.legend = rdata;
        }
    })
});
myChart5.setOption(option5);