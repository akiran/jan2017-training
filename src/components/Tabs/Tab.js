import  React from 'react'

export default class Tab extends React.Component {
  constructor(props) {
    super(props)


    this.selectAndPassData = this.selectAndPassData.bind(this)
  }
  componentDidMount() {
    if (this.props.selectedTab === this.props.index) {
      this.props.selectTab(this.props.index, this.props.children)
    }
  }
  selectAndPassData() {
    this.props.selectTab(this.props.index, this.props.children)
  }
  render() {
    return (
      <li
        className={this.props.className}
        onClick={this.selectAndPassData}>
        <a>{this.props.title}</a>
      </li>
    )
  }
}
