<template>
  <div class="dataView_container">
    <div id="allMap" class="dataView_map"></div>
  </div>
</template>
<script type="text/javascript" src="//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      bmap: null,
    }
  },
  mounted() {
    this.mapInit()
    this.render()
  },
  methods: {
    mapInit() {
      const BMap = window.BMap
      this.bmap = new BMap.Map('allMap', {
        enableMapClick: false,
      }) // 创建Map实例
      this.bmap.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5) // 初始化地图,设置中心点坐标和地图级别
      this.bmap.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.bmap.setMapStyle({
        style: 'midnight',
      })
    },
    render() {
      var randomCount = 100000
      var data = []
      var citys = [
        '北京',
        '天津',
        '上海',
        '重庆',
        '石家庄',
        '太原',
        '呼和浩特',
        '哈尔滨',
        '长春',
        '沈阳',
        '济南',
        '南京',
        '合肥',
        '杭州',
        '南昌',
        '福州',
        '郑州',
        '武汉',
        '长沙',
        '广州',
        '南宁',
        '西安',
        '银川',
        '兰州',
        '西宁',
        '乌鲁木齐',
        '成都',
        '贵阳',
        '昆明',
        '拉萨',
        '海口',
      ]
      // 构造数据
      while (randomCount--) {
        var cityCenter = mapv.utilCityCenter.getCenterByCityName(
          citys[parseInt(Math.random() * citys.length)]
        )
        data.push({
          geometry: {
            type: 'Point',
            coordinates: [
              cityCenter.lng - 5 + Math.random() * 10,
              cityCenter.lat - 5 + Math.random() * 10,
            ],
          },
          // 具体点的icon设置
          iconOptions: {
            url: ['images/flag.png', 'images/marker.png', 'images/star.png'][
              randomCount % 3
            ], // 非聚合时点的icon,可设置为空
            width: 50 / 3,
            height: randomCount % 3 === 2 ? 50 / 3 : 77 / 3,
          },
        })
      }

      var dataSet = new mapv.DataSet(data)
      var options = {
        // shadowColor: 'rgba(255, 250, 50, 1)',
        // shadowBlur: 10,
        // 非聚合点的颜色和大小，未设置icon或icon获取失败时使用
        fillStyle: 'rgba(255, 50, 0, 1.0)',
        size: 50 / 3 / 2, // 非聚合点的半径
        // 非聚合时点的icon设置，会被具体点的设置覆盖，可设置为空
        // iconOptions: {
        //     url: 'images/marker.png',
        //     width: 50 / 3,
        //     height: 77 / 3,
        //     offset: {
        //         x: 0,
        //         y: 0
        //     }
        // },
        minSize: 8, // 聚合点最小半径
        maxSize: 31, // 聚合点最大半径
        globalAlpha: 0.8, // 透明度
        clusterRadius: 150, // 聚合像素半径
        maxClusterZoom: 18, // 最大聚合的级别
        maxZoom: 19, // 最大显示级别
        minPoints: 5, // 最少聚合点数，点数多于此值才会被聚合
        extent: 400, // 聚合的细腻程度，越高聚合后点越密集
        label: {
          // 聚合文本样式
          show: true, // 是否显示
          fillStyle: 'white',
          // shadowColor: 'yellow',
          // font: '20px Arial',
          // shadowBlur: 10,
        },
        gradient: { 0: 'blue', 0.5: 'yellow', 1.0: 'rgb(255,0,0)' }, // 聚合图标渐变色
        draw: 'cluster',
        methods: {
          click(point) {
            if (point) {
              if (point.iconOptions) {
                console.log(point.iconOptions.url)
              }
              // 通过children可以拿到被聚合的所有点
              console.log(point.children)
            }
          },
        },
      }
      new mapv.baiduMapLayer(this.bmap, dataSet, options)
    },
  },
}
</script>

<style lang="scss" scoped>
.dataView {
  &_container {
    margin: 10px;
  }
  &_map {
    width: 100%;
    height: calc(100vh - 70px);
  }
}
</style>
