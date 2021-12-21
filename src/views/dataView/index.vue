<template>
  <div class="dataView_container">
    <div id="allMap" class="dataView_map"></div>
  </div>
</template>
<script type="text/javascript" src="//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
import styleJson from '../../utils/map_config.json'
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      bmap: null /* 地图 */,
      reqData: [] /* 请求数据 */,
      standardPoint: [] /* 标准点位 */,
      infoWindow: null /* 窗口信息 */,
      infoWindowClick: null,
    }
  },
  mounted() {
    this.mapInit()
  },
  methods: {
    mapInit() {
      const BMap = window.BMap
      this.bmap = new BMap.Map('allMap', {
        enableMapClick: false,
      }) // 创建Map实例
      this.bmap.centerAndZoom(new BMap.Point(120.004909, 30.283515), 10) // 初始化地图,设置中心点坐标和地图级别
      this.bmap.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.bmap.setMapStyleV2({
        styleJson: styleJson,
      })
      this.getData()
      this.buildStandardPoint()
      this.renderPolyline()
      this.renderPolygon()
      let zoom = this.bmap.getViewport(this.standardPoint).zoom
      this.bmap.centerAndZoom(
        this.standardPoint[this.standardPoint.length - 3],
        zoom
      )
      this.renderLabel()
    },
    getData() {
      this.reqData = [
        {
          billNo: '135********',
          inTime: '2021-04-27 00:00:00',
          lacCi: '22297_53745858',
          longitude: '120.23978870791153',
          latitude: '30.313105488897413',
          cityName: '杭州市',
          provName: '浙江省',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州普福村LY原筑一号3DMIMO_194',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:50:05',
          lacCi: '22297_189975298',
          longitude: '120.2406478238839',
          latitude: '30.314464872281892',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州原筑壹号地下室及电梯SFFDD1800_2',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:53:31',
          lacCi: '22297_48750529',
          longitude: '120.23931419045435',
          latitude: '30.314382564359313',
          provName: '浙江省',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州普福村CRAN原筑壹号北3DMIMO_193',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:54:00',
          lacCi: '22297_53745858',
          longitude: '120.23978870791153',
          latitude: '30.313105488897413',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州普福村LY原筑一号3DMIMO_194',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:54:39',
          lacCi: '22297_211661636',
          longitude: '120.23301225771037',
          latitude: '30.31163872297817',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州黎明三组3DMIMO_68_2CA65',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:55:45',
          lacCi: '22297_53735105',
          longitude: '120.23119859891258',
          latitude: '30.312889032153407',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州黎明村接入CRAN明石商业大厦3DMIMO_193',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:57:21',
          lacCi: '22297_54113221',
          longitude: '120.2222476357207',
          latitude: '30.312494332650576',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州黎明村接入CRAN草庄社区3DMIMO_197',
        },
        {
          billNo: '135********',
          inTime: '2021-04-27 08:58:06',
          lacCi: '22297_210616644',
          longitude: '120.21992793145938',
          latitude: '30.311275901014817',
          cityName: '杭州市',
          countyName: '江干区',
          townName: '笕桥街道',
          lacCiName: '杭州彭埠东接入机房LY钱塘天誉北3DMIMO_68_2CA65',
        },
      ]
    },
    // 构造标准点位
    buildStandardPoint() {
      this.standardPoint = this.reqData.map((v) => {
        return new BMap.Point(v.longitude, v.latitude)
      })
    },
    // 渲染聚合物
    renderPolymer() {
      var randomCount = 500
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
    // 渲染标注
    renderLabel() {
      this.reqData.forEach((v, index) => {
        let icon = 'detail_icon'
        let content = `
        <div class='${icon}'}></div>
      `
        let tranckLabel = new BMap.Label(content, {
          position: new BMap.Point(v.longitude, v.latitude),
          offset: new BMap.Size(-10, -10),
        })
        this.bmap.addOverlay(tranckLabel)
        tranckLabel.addEventListener('click', () => {
          this.renderInfoWindow(v, index)
        })
      })
    },
    // 渲染线
    renderPolyline() {
      const tranckLine = new BMap.Polyline(this.standardPoint, {
        strokeColor: '#fb368e',
        strokeWeight: 2,
        strokeStyle: 'solid',
      })
      this.bmap.addOverlay(tranckLine)
    },
    // 渲染覆盖物
    renderPolygon() {
      const tranckPolygon = new BMap.Polygon(this.standardPoint, {
        strokeColor: 'red',
        strokeWeight: 2,
        fillColor: '#fb368e',
      })
      this.bmap.addOverlay(tranckPolygon)
      tranckPolygon.addEventListener('click', function (e) {
        alert(e.point.lng + ',' + e.point.lat)
      })
    },
    // 渲染弹窗
    renderInfoWindow(item, index) {
      let infoWindowClass = 'infoWindow'
      let content = `
        <div class=${infoWindowClass}>
          <div class=infoWindow_item>${item.countyName}</div>
          <div class=infoWindow_item>${item.lacCiName}</div>
          <div class=infoWindow_item>${item.townName}</div>
        </div>
      `
      // 每次点击的时候记录当前的index,如果是同一个点位,执行正常的切换,如果不是同一个点位,则移除信息框,打开新的点位弹窗
      if (this.infoWindowClick !== index) {
        this.bmap.removeOverlay(this.infoWindow)
        this.infoWindow = null
      }
      if (!this.infoWindow) {
        this.infoWindow = new BMap.Label(content, {
          position: new BMap.Point(item.longitude, item.latitude),
        })
        this.infoWindowClick = index
        this.bmap.addOverlay(this.infoWindow)
      } else {
        this.bmap.removeOverlay(this.infoWindow)
        this.infoWindow = null
      }
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
