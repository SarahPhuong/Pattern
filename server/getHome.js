export default () => (
    fetch('http://localhost:3000')
    .then(res => res.text())
)
