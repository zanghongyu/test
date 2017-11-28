
/*
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
            'type': 'line'
        },
        {
            'name': '售电量',
            'type': 'line'
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
        url: './package1.json',
        type: 'post',
        dataType: 'json',
        success: function (rdata) {
            console.log(rdata);
            console.log(rdata.x);
            x = rdata.x;
            y= rdata.y;
            y = rdata.y1;
            option2.xAxis[0].data = x;
            option2.series[0].data = y;
            option2.series[1].data = y1;
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
*/





$(document).ready(function () {
    var option = {
        title: {
            text: ''
        },
        tooltip: {
        },
        legend: {
            data: []
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                interval: 0,
                rotate: 80,//倾斜度 -90 至 90 默认为0
                margin: 2,
                textStyle: {
                    color: "#000000"
                }
            }
        }],
        yAxis: {},
        series: [{
            'name': '供电量',
            'type': 'line',
            'symbol':'none'
            },
            {
                'name': '售电量',
                'type': 'line',
                'symbol':'none'
            }]
    };
    $(document).ready(function () {
        $.ajax({
            url: './package.json',
            type: 'post',
            dataType: 'json',
            success: function (rdata) {
                for (var i = 0; i < rdata.length; i++) {
                    var dataTemp = rdata[i];
                    var aid = 'main' + i + 5;
                    $('.charts').append('<div class="row"> <div class="col-md-7"> <h4 class="box-title">供电量与售电量曲线图</h4> <div class="box box-info"> <div class="box-body"> <div class="chart"> <canvas id=' + aid + ' style="height: 280px; width: 510px;" width="510" height="250"></canvas> </div> </div> </div> </div> <div class="col-md-5"> <h4 class="box-title">备注</h4> <form role="form"> <div class="form-group"> <textarea class="form-control" rows="3" style="height: 308px">活跃用户数（台区电表资产数曲线图）：横轴为时间，纵轴为台区用户数值。图表文字解读：该台区的活跃用户基本稳定在XXX户。</textarea> </div> </form> </div> </div>');
                    var optionTemp = option;
                    optionTemp.xAxis[0].data = dataTemp.x;
                    optionTemp.series[0].data = dataTemp.y;
                    optionTemp.series[1].data = dataTemp.y1;
                    optionTemp.legend.data[0] = "供电量";
                    optionTemp.legend.data[1] = "售电量";
                    var myChart5 = echarts.init(document.getElementById('main' + i + 5));
                    myChart5.setOption(optionTemp);
                }
            }
        })
    });

});