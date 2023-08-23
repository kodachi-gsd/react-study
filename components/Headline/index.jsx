import React from 'react'
import classes from 'components/Headline/Headline.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>
        {props.page} page
      </h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>

      <button onClick={props.onClick}>Button</button>
    </div>
  )
}
