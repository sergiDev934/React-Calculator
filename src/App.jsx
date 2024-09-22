import { useState, React } from 'react'

export function App () {
  const [internalData, setInternalData] = useState([''])
  const [screenData, setScreenData] = useState('')
  const number = internalData[internalData.length - 1]
  console.log(internalData)
  const handleClick = e => {
    const newScreenData = screenData + e.target.textContent
    setScreenData(newScreenData)
    if (isNaN(e.target.textContent)) {
      if (e.target.textContent !== '.') {
        console.log(e.target.textContent, number)
        const updateInternalData = internalData
        updateInternalData.push(e.target.textContent)
        setInternalData(updateInternalData)
      }
    }
    if (!isNaN(e.target.textContent) || e.target.textContent === '.') {
      const updateInternalData = internalData
      if (isNaN(internalData[internalData.length - 1])) updateInternalData.push(e.target.textContent)
      else updateInternalData[updateInternalData.length - 1] += e.target.textContent

      setInternalData(updateInternalData)
    }
  }
  const deleteAll = () => {
    setScreenData('')
    setInternalData([''])
  }
  const handleDelete = () => {
    const newScreenData = screenData.slice(0, -1)
    setScreenData(newScreenData)
  }
  const calculate = () => {
    const a = eval(screenData)
    setScreenData(a)
  }
  return (
    <main className='calculator'>
      <section className='result-section'>
        <input type='text' className='result' placeholder='0' value={screenData} readOnly />
      </section>
      <section className='buttons'>
        <button onClick={deleteAll}>AC</button>
        <button onClick={handleClick}>%</button>
        <button onClick={handleDelete} id='delete'>⬅</button>
        <button onClick={handleClick} value={7}>7</button>
        <button onClick={handleClick} value={8}>8</button>
        <button onClick={handleClick} value={9}>9</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick} value={4}>4</button>
        <button onClick={handleClick} value={5}>5</button>
        <button onClick={handleClick} value={6}>6</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick} value={1}>1</button>
        <button onClick={handleClick} value={2}>2</button>
        <button onClick={handleClick} value={3}>3</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick} value={0}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={handleClick}>-</button>
      </section>
    </main>
  )
}
