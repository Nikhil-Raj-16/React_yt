import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users = [
    { img: 'https://plus.unsplash.com/premium_photo-1790995552633-2cd146c0efb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'RoyalBlue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1791997902673-9e55039ff708?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'darkolivegreen ',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1766939228501-065717002601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'salmon',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1791433238403-97918eaf8449?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'teal',
      tag: 'Undercooked'
    }
  ]


  return (
    <div className=''>
      <Section1 users={users}/>
      <Section2/>

    </div>
  )
}

export default App
