<template>
    <div>
        <TradingVue
        :data="chart"
        :toolbar="true"
        :night="false"
        ></TradingVue>
        <CanvasJsChart :options="options" :style="styleOptions"></CanvasJsChart>
    </div>
</template>

<script>
import {TradingVue, DataCube} from 'trading-vue-js'
import CanvasJsChart from '../assets/CanvasJs/CanvasJSVueComponent.vue'

export default {
  name: 'candleBar',
  components: {
    TradingVue,
    CanvasJsChart
  },
  data () {
    return {
        styleOptions: {
          width: "100%",
          height: "360px"
        },
        options: {
          animationEnabled: true,
          theme: "dark1", // "light1", "light2", "dark1", "dark2"
          exportEnabled: true,
          title: {
            text: "Bitcoin Price"
          },
          subtitles: [{
            text: "Weekly Average"
          }],
          axisX: {
            interval: 1,
            intervalType: "day",
            valueFormatString: "DD"
          },
          axisY: {
            prefix: "",
            title: "Price in USD"
          },
          toolTip: {
            content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
          }
        ,
        data: [{
            type: "candlestick",
            yValueFormatString: "##0",
            xValueFormatString: "DD MM YYYY",
            dataPoints: [
              { x: new Date('2022-01-11'), y: [152,156,146,153] },
              { x: new Date(2022,0,12), y: [153,155,145,145] },
              { x: new Date(2022,0,13), y: [145,153,145,153] },
              { x: new Date(2022,0,14), y: [154,154,148,149] },
              { x: new Date(2022,0,17), y: [150,154,148,149] },
              { x: new Date(2022,0,18), y: [148,149,144,144] }
              
            ]
        }]
    },
        datas: [
            [ new Date(2022, 0, 11), 152, 156, 146, 153, 123 ],
            [ new Date(2022, 0, 12), 153, 155, 145, 145, 234 ],
            [ new Date(2022, 0, 13), 145, 153, 145, 153, 345 ],
            [ new Date(2022, 0, 14), 154, 154, 148, 149, 456 ]
            ],
        chart: new DataCube(this.data)
    }
  },
  mounted () {
    console.log(new Date(2022, 0, 11))
  }
}
</script>

<style>
</style>
