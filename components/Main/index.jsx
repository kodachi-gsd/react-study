import classes from 'components/Main/Main.module.css'
import { Links } from 'components/Links'
import { Headline } from 'components/Headline'
import { useEffect } from 'react';

export function Main(props) {
  useEffect(() => {
    // マウント時の処理
    console.log("マウント時の処理")
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時の処理
    return ( ) => {
      console.log("アンマウント時の処理")
      document.body.style.backgroundColor = "";
    };
  },[]);

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
