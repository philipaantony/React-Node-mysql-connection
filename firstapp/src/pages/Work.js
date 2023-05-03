import React from 'react'
import { useState } from 'react';
import SampleClass from '../components/classcomponent';
import Sample from '../components/header';
import Counter from '../components/counter';
import Header from '../tempale/Header';
import Footer from '../tempale/Footer';


function Work()
 {
  const data = 'passing value'
  const datatoclass = 'passing value'

  const [name, setname] = useState('Click the button below here')
  function changename() {
    setname('haiii...')
  }

  const [count, setCount] = useState(0)
  const addcount = () => {
    setCount(count + 1)
    console.log(count)
  }
  let obj = {
    titlename: '1st Counter',
    count,
  }

  return (
    <div>
       <Header/>
       <br></br>
       <br></br><br></br><br></br><br></br><br></br><br></br>

        <center><h1> {name}</h1>
        <button onClick={changename}>Change</button>

        <Counter {...obj} />
        {/* spread operator */}
        <Counter titlename='2nd Counter' count={count} />
        <button onClick={addcount}>Add Count</button>

        <h1>hello world</h1>
        <Hello />
        <Sample data={data} />

        <SampleClass data={datatoclass} />

        </center>
      <Footer/>
      </div>
    
  )
}

export default Work


function Hello() {
  return <h1> fuction called here</h1>
}