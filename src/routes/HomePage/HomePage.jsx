import Header from "../../components/Header/Header";
import ItemList from "../../components/ItemList/ItemList";
import picture from "./beginningPicture.jpg";
import '../../App.css'

const HomePage=()=>{
    return(
    <>
        <Header />
        <div className='flex h-96 justify-center mt-10'>
            <img src={picture} alt='Dog and Cat' className="rounded"/>
        </div>
        <ItemList />
    </>
    )
}

export default HomePage