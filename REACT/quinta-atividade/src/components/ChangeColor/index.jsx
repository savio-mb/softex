export const ChangeColor = ({ cor, setColor }) => {
  return (
    <button onClick={() => setColor(cor)}>{`Change H1 color to ${
      cor === 'green' ? 'blue' : 'green'
    }`}</button>
  )
}
