import * as sc from './styled'

export default function Gyroscope() {
  const rings = [
    {speed: 10, delay: 0},
    {speed: 40, delay: 0.3},
    {speed: 15, delay: 0.6}
  ]

  return (
    <sc.MainWrapper>
      {rings.map(r => 
        <sc.Ring key={rings.indexOf(r)} index={rings.indexOf(r)} speed={r.speed} delay={r.delay}/>
        )}
    </sc.MainWrapper>
  )
}