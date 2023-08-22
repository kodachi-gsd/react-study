import Head from 'next/head'
import Image from 'next/image'
import classes from './Main.module.css'
import { Footer } from './Footer'
import { Links } from './Links'
import { Headline } from './Headline'

export function Main(props) {
  return (
      <main className={classes.main}>
        <Headline 
          page={props.page}
          onClick={() => alert("Clicked")}
        >
          <code className={classes.code}>pages/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
  )
}
