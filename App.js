const heading = React.createElement('h1', {
    id: 'heading',
    class: 'heading'
}, 'Hello world from react')
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
// heading is an object and root.render is making that an element.