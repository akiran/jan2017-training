import React from 'react'
import TabsExample from './Tabs/TabsExample'
import Header from './Header'
import Title from './Title'
import Counter from './Counter'
import LoginForm from './LoginForm'
import Switch from './Switch'
import Timer from './Timer'
import Bootstrap from './Bootstrap'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Bootstrap />
        <hr />
        <Header text='my site header'/>
        <hr />
        <Title>This is a title</Title>
        <hr />
        <Counter />
        <hr />
        <Switch />
        <hr />
        <TabsExample />
        <hr />
        <Timer />
        <hr />
        <LoginForm />
        <hr />
      </div>
    )
  }
}
