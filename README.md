# react-render-if
HOC to render component with condition

### Installation
```
npm install --save render-if-react
```

### Limitation
Class component must be render as child.

### Props
| Name | Description | Default |
| --- | --- | --- |
| `condition` | `Condition to render` | true |
| `component` | `Stateless component to be render with condition` |  |
| `strict` | `Mode to handle invalid component true: throw Error, false: log warning` | false |

### Example Stateless component as props
```jsx
import RenderIf from 'render-if-react'

const Hello = () => <h1>Hello</h1>

class MyComponent extends Component {
    render() {
        return (
            <div>
                <RenderIf condition={1 + 1 === 2} component={Hello} />
            </div>
        );
    }
}
```

### Example Stateless component as child
```jsx
import RenderIf from 'render-if-react'

const Hello = () => <h1>Hello</h1>

class MyComponent extends Component {
    render() {
        return (
            <div>
                <RenderIf condition={1 + 1 === 2}>
                    <Hello />
                </RenderIf>
            </div>
        );
    }
}
```

### Example class component
```jsx
import RenderIf from 'render-if-react'

class Hello extends Component {
    render() {
        return (
            <h3>Hello</h3>
        );
    }
}

class MyComponent extends Component {
    render() {
        return (
            <div>
                <RenderIf condition={1 + 1 === 2}>
                    <Hello />
                </RenderIf>
            </div>
        );
    }
}
```
