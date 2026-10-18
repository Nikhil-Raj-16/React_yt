import './index.css'
import Card from './components/Card.jsx'


const App = () => {

  // const arr = [{user : 'John', age : 25}, {user : 'Jane', age : 30}, {user : 'Bob', age : 35}];
  
  // arr.map(function(elem){
  //   console.log(elem.user);
  // })


  const jobOpenings = [
  {
    "brandlogo": "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    "name": "Meta",
    "date_posted": "2 Days ago",
    "post": "Software Engineer",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 95,
    "location": "Menlo Park, California"
  },
  {
    "brandlogo": "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg",
    "name": "Amazon",
    "date_posted": "1 week ago",
    "post": "Data Scientist",
    "tag1": "Full time",
    "tag2": "Junior level",
    "pay": 65,
    "location": "Seattle, Washington"
  },
  {
    "brandlogo": "https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg",
    "name": "Apple",
    "date_posted": "3 Days ago",
    "post": "Machine Learning Engineer",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 110,
    "location": "Cupertino, California"
  },
  {
    "brandlogo": "https://i.pinimg.com/736x/3b/f7/9d/3bf79d56b2d8e890f6aeb7bbd5e8ebf9.jpg",
    "name": "Netflix",
    "date_posted": "5 Days ago",
    "post": "Backend Engineer",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 120,
    "location": "Los Gatos, California"
  },
  {
    "brandlogo": "https://i.pinimg.com/1200x/60/41/99/604199df880fb029291ddd7c382e828b.jpg",
    "name": "Google",
    "date_posted": "4 hours ago",
    "post": "Frontend Developer",
    "tag1": "Part time",
    "tag2": "Junior level",
    "pay": 55,
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://i.pinimg.com/736x/fa/76/9b/fa769ba2fd25c9bdd269a736e0942218.jpg",
    "name": "Microsoft",
    "date_posted": "2 weeks ago",
    "post": "Cloud Solutions Architect",
    "tag1": "Full time",
    "tag2": "Senior level",
    "pay": 105,
    "location": "Hyderabad, India"
  }
]


  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
            <Card company={elem.name} datePosted={elem.date_posted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandlogo} />  
          </div>
      })}
    </div>
  )
}

export default App
