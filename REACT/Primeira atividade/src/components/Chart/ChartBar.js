import './ChartBar.css'

const ChartBar = function (props) {
  let barFillHeight = '0%'

  if (props.maxValue > 0) {
    barFillHeight = Math.random((props.value / props.maxValue) * 100) + '%'
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        <div className="chart-bar__label"></div>
      </div>
    </div>
  )
}
