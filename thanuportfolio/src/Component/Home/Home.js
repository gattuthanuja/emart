import { Link, Route, Routes } from "react-router-dom"
import './Home.css';
import Showmore from "../Showmore/Showmore"; 
function Home() {
    return (
        <>
            <div className="para">
                <h1>Hello <br />Everyone </h1> 
                <p>
                    It was a quiet summer morning.The sun stood already pretty high in the clear sky but the fields were still sparing with draw;
                    a fresh breeze blew fragrantly from the scarce awakened valleys and in the forest,
                    still damp and hushed,
                    the birds were merrity carolling their morning song.
                </p>
            </div>
            <div class="container">
                <img src="https://shotkit.com/wp-content/uploads/2021/01/nature-photography.jpg" />
                <img src="https://images2.alphacoders.com/732/thumb-1920-732519.jpg" />
                <img src="https://cdn.pixabay.com/photo/2020/07/02/19/51/butterfly-5364211_1280.jpg" />                
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO9SQc3A5tTBZcUD4pT0uAD5XZzIe7fMkfNF_dW_SeaL8pKyWtaRK2xJBqfzT7z9D2pc&usqp=CAU" />
                <img src="https://www.teahub.io/photos/full/14-146764_most-beautiful-rose-flowers-wallpaper-very-beautiful-rose.jpg"/>
                <img src="https://images.unsplash.com/photo-1483935254693-d16df5d8741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&w=1000&q=80"/>
                <img src="https://i.pinimg.com/236x/49/1c/eb/491ceb4c68ca3f0beb9164c1f1299e74.jpg"/>
                <img src="https://w0.peakpx.com/wallpaper/522/37/HD-wallpaper-love-ultra-love-creative-nature-tulips-spring-flowers-field-romantic-redtulips.jpg"/>
            </div>
            <div class="hello">
                <Link to="/Showmore">Show more</Link>
            </div>
            <Routes>
            <Route exact path='/Showmore' element={<Showmore />}></Route>
            </Routes>
        </>
    )
}
export default Home;