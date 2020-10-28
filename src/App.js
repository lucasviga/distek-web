import {useEffect} from 'react';
import Home from './pages/Home';

function App() {

  useEffect(() => {
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  }, []);

  return (
    <Home />
  );
}

export default App;
