import classes from 'components/Main/Main.module.css'
import { Links } from 'components/Links'
import { Headline } from 'components/Headline'
import { useEffect } from 'react';

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
