const BASIC_OPTION = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#ffffff'
    }
  },
  series: [
    {
      labelLine: {
        show: false
      },
      type: 'pie',
      color: ['#fe883a', '#2d90d1', '#f75981', '#90e2a9'],
      radius: '50%'
    }
  ]
}
export { BASIC_OPTION }
