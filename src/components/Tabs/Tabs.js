import  React from 'react'

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      content: ''
    }
    this.selectTab = this.selectTab.bind(this)
  }
  selectTab(index, content) {
    this.setState({
      selectedTab: index,
      content: content
    })
  }
  render() {
    return (
      <div>
      <ul className='nav nav-tabs'>
        {React.Children.map(this.props.children, function (child, index) {
          return React.cloneElement(child, {
            index: index,
            selectTab: this.selectTab,
            selectedTab: this.state.selectedTab,
            className: this.state.selectedTab === index ? 'active': ''
          })
        }.bind(this))}
      </ul>
      <div>{this.state.content}</div>
    </div>
    )
  }
}
