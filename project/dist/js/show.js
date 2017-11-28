// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var mySelect = document.getElementById('mySelect');
var newObj = {};

var option = {
    title: {
        text: 'ECharts 示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
myChart.setOption(option);

$(document).ready(function () {
    $('#btn').click(function () {
        $('#main').css('display','block');
        $('.tables').css('display','none');
        $(this).css('display','none');
    })
});