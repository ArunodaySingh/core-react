import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Dropdown, DropdownToggle, DropdownMenu } from '../Dropdown'
import Icon from '../Icon'
import './index.less'

class SelectDropdown extends React.Component {
  close () {
    this.dropdown.close()
  }

  render () {
    const {
      className, children, title, url, hasPropValue, caret, onLoad, onToggle, width,
      disabled, ...other
    } = this.props

    if (width) {
      other.style = Object.assign(other.style || {}, { width })
    }

    return (
      <Dropdown
        aligned
        onToggle={onToggle}
        disabled={disabled}
        ref={dropdown => (this.dropdown = dropdown)}
      >
        <DropdownToggle className={cx(`${prefixCls}-select-dropdown`, {
          [`${prefixCls}-select-dropdown__dropdown-toggle_caretable`]: caret
        }, className)} {...other}>
          {title}
          {caret && <Icon type="caret-down" className={`${prefixCls}-select-dropdown__caret`} />}
        </DropdownToggle>
        <DropdownMenu className={`${prefixCls}-select-dropdown__popover`}>
          {children}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

SelectDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.element.isRequired,
  url: PropTypes.string,
  hasPropValue: PropTypes.bool,
  caret: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  onLoad: PropTypes.func,
  onToggle: PropTypes.func
}

export default SelectDropdown
