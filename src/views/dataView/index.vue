<template>
  <div class="dataView_container">
    <div class="dataView_tools">
      <el-button type="primary" size="small" @click="search">查询</el-button>
      <el-button type="primary" size="small" @click="test">测试</el-button>
    </div>
    <div class="dataView_echart_pie">
      <EchartPie :series-data="dataList" :extra-option="extraOption" />
    </div>
    <div class="dataView_echart_pie dataView_echart_pie2">
      <EchartPie :series-data="dataList2" :extra-option="extraOption" />
    </div>
    <div id="allMap" class="dataView_map"></div>
  </div>
</template>
<script type="text/javascript" src="//apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
import styleJson from '../../utils/map_config.json'
import EchartPie from '@/components/EchartsPie/index.vue'
export default {
  name: '',
  props: {},
  components: {
    EchartPie,
  },
  data() {
    return {
      bmap: null /* 地图 */,
      reqData: [] /* 请求数据 */,
      standardPoint: [] /* 标准点位 */,
      infoWindow: null /* 窗口信息 */,
      infoWindowClick: null,
      dataList2: [
        {
          name: '西瓜',
          value: 20,
        },
        {
          name: '橘子',
          value: 13,
        },
        {
          name: '杨桃',
          value: 33,
        },
      ],
      dataList: [
        {
          name: '西瓜',
          value: 20,
        },
        {
          name: '橘子',
          value: 13,
        },
        {
          name: '杨桃',
          value: 33,
        },
      ],
      extraOption: {
        color: ['#000', '#2d90d1', '#f75981', '#90e2a9'],
      },
    }
  },
  mounted() {
    this.mapInit2()
  },
  methods: {
    mapInit1() {
      const BMapGL = window.BMapGL
      this.bmap = new BMapGL.Map('allMap', {
        enableMapClick: false,
      }) // 创建Map实例
      this.bmap.centerAndZoom(new BMapGL.Point(120.004909, 30.283515), 16) // 初始化地图,设置中心点坐标和地图级别
      this.bmap.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.bmap.setMapStyleV2({
        styleJson: styleJson,
      })
    },
    mapInit2() {
      const BMapGL = window.BMapGL
      this.bmap = new BMapGL.Map('allMap', {
        enableMapClick: false,
      }) // 创建Map实例
      this.bmap.centerAndZoom(new BMapGL.Point(115.604, 39.225), 9) // 初始化地图,设置中心点坐标和地图级别
      this.bmap.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.bmap.setMapStyleV2({
        styleJson: styleJson,
      })
      this.bmap.setTilt(50)
      this.bmap.enableScrollWheelZoom()
      this.renderBounds()
    },
    // 清空图层
    clearMap() {
      this.bmap.clearOverlays()
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
    getCityBoundary(cityName, topFillColor, sideFillColor) {
      const that = this
      var bd = new BMapGL.Boundary()
      bd.get(cityName, function (rs) {
        var count = rs.boundaries.length //行政区域的点有多少个
        for (var i = 0; i < count; i++) {
          var path = []
          let str = rs.boundaries[i].replace(' ', '')
          let points = str.split(';')
          for (var j = 0; j < points.length; j++) {
            var lng = points[j].split(',')[0]
            var lat = points[j].split(',')[1]
            path.push(new BMapGL.Point(lng, lat))
          }
          var prism = new BMapGL.Prism(path, 10000, {
            topFillColor: topFillColor,
            topFillOpacity: 1,
            sideFillColor: sideFillColor,
            sideFillOpacity: 0.8,
          })
          that.bmap.addOverlay(prism)
        }
      })
    },
    search() {
      this.clearMap()
      this.getData()
      this.buildStandardPoint()
      this.renderPolyline()
      this.renderPolygon()
      this.renderLabel()
      this.dataList2 = [
        {
          name: '变化数据1',
          value: 10,
        },
        {
          name: '变化数据2',
          value: 70,
        },
        {
          name: '变化数据3',
          value: 23,
        },
      ]
    },
    // 方法实例
    test() {
      this.mapInit2()
    },
    // 构造标准点位
    buildStandardPoint() {
      this.standardPoint = this.reqData.map((v) => {
        return new BMapGL.Point(v.longitude, v.latitude)
      })
      let zoom = this.bmap.getViewport(this.standardPoint).zoom
      this.bmap.centerAndZoom(
        this.standardPoint[this.standardPoint.length - 3],
        zoom
      )
    },
    // 渲染标注
    renderLabel() {
      this.reqData.forEach((v, index) => {
        let icon = 'detail_icon'
        let content = `
        <div class='${icon}'}></div>
      `
        let tranckLabel = new BMapGL.Label(content, {
          position: new BMapGL.Point(v.longitude, v.latitude),
          offset: new BMapGL.Size(-10, -10),
        })
        this.bmap.addOverlay(tranckLabel)
        tranckLabel.addEventListener('click', () => {
          this.renderInfoWindow(v, index)
        })
      })
    },
    // 渲染线
    renderPolyline() {
      const tranckLine = new BMapGL.Polyline(this.standardPoint, {
        strokeColor: '#fb368e',
        strokeWeight: 2,
        strokeStyle: 'solid',
      })
      this.bmap.addOverlay(tranckLine)
    },
    // 渲染覆盖物
    renderPolygon() {
      const tranckPolygon = new BMapGL.Polygon(this.standardPoint, {
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
        this.infoWindow = new BMapGL.Label(content, {
          position: new BMapGL.Point(item.longitude, item.latitude),
        })
        this.infoWindowClick = index
        this.bmap.addOverlay(this.infoWindow)
      } else {
        this.bmap.removeOverlay(this.infoWindow)
        this.infoWindow = null
      }
    },
    // 渲染区域地图
    renderBounds() {
      this.getCityBoundary('北京市', '#5679ea', '#5679ea')
      this.getCityBoundary('廊坊市', '#CC6666', '#CC6666')
      this.getCityBoundary('保定市', '#3B9F88', '#3B9F88')
    },
  },
}
</script>

<style lang="scss" scoped>
.dataView {
  width: 100%;
  height: 100%;
  &_container {
    margin: 10px;
  }
  &_tools {
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 10px;
    z-index: 1;
  }
  &_map {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    margin: 10px;
  }
  &_echart_pie {
    position: absolute;
    top: 15%;
    left: 10px;
    width: 25vw;
    border: 1px solid #051a4b;
    height: 30vh;
    background: rgba($color: #051a4b, $alpha: 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_echart_pie2 {
    top: 60%;
    left: 10px;
  }
}
</style>
