import pic from '../../public/Ross_Peak_Walking.jpeg'
function Bio() {
    return (
      <div className="Bio">
          <img src={pic} className="background-pic" alt="Brady Ash walking on Ross Peak" />
          <p>
            Hello! My name is Brady Ash, a Computer Science Student at Montana State University! Please, look around the site! Below is my resume,
            and the Projects tab showcases some projects I enjoyed creating!
          </p>
      </div>
    );
  }
  
  export default Bio;