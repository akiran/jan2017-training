import React from 'react'
import {Popover, OverlayTrigger, Button} from 'react-bootstrap'

export default class BootstrapExamples  extends React.Component {
  render() {
    const popoverBottom = (
      <Popover title="Popover bottom">
        This is some text
      </Popover>
    );

    return (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popoverBottom}>
        <Button>Popover Trigger</Button>
      </OverlayTrigger>
    )
  }
}
