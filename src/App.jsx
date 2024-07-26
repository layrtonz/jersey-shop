import './App.css';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
import { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
    
    const shopName = "Jersey Shop NBA";
 
    const [data, setData] = useState([
     {id: 1, image: './public/img/capa.png'},
     {id: 2, image: './public/img/celticss.jpg'},
     {id: 3, image: './public/img/golden.png'},
     {id: 4, image: './public/img/denver.jpg'},
    ]);
    
    const [items, setItems] = useState(
        [
        {
            id: 1, 
            photo: "gsw.png",
            name: "Golden State Warriors",
            price: 789.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {

            id: 14, 
            photo: "memphis.png",
            name: "Memphis Grizzlies",
            price: 719.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 2, 
            photo: "indiana.png",
            name: "Indiana Pacers",
            price: 599.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 3, 
            photo: "orlando.png",
            name: "Orlando Magic",
            price: 499.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 4, 
            photo: "rockets.png",
            name: "Houston Rockets",
            price: 509.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 5, photo: "wizard.png",
            name: "Washington Wizards",
            price: 489.49,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "76ers.png",
            name: "Philadelphia 76ers",
            price: 529.79,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "atlanta.png",
            name: "Atlanta Hawks",
            price: 519.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 8, 
            photo: "bucks.png",
            name: "Milwaukee Bucks",
            price: 694.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "bulls.png",
            name: "Chicago Bulls",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 10, 
            photo: "cleveland.png",
            name: "Cleveland Cavaliers",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 11, 
            photo: "clippers.png",
            name: "Los Angeles Clippers",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 12, 
            photo: "dallas.png",
            name: "Mavericks Dallas",
            price: 689.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 13, 
            photo: "denver.png",
            name: "Denver Nuggets",
            price: 689.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 15, 
            photo: "heat.png",
            name: "Miami Heat",
            price: 689.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 16, 
            photo: "hornets.png",
            name: "Charlotte Hornets",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 17, 
            photo: "knicks.png",
            name: "New York Knicks",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 18, 
            photo: "lakers.png",
            name: "Los Angeles Lakers",
            price: 789.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 19, 
            photo: "nets.png",
            name: "Bkooklyn Nets",
            price: 789.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 20, 
            photo: "okc.png",
            name: "Oklahoma City Thunder",
            price: 689.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 21, 
            photo: "pelicans.png",
            name: "New Orleans Pelicans",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 22, 
            photo: "pistons.png",
            name: "Detroid Pistons",
            price: 489.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 23, 
            photo: "portland.png",
            name: "Portland Trail Blazers",
            price: 489.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 24, 
            photo: "spurs.png",
            name: "San Antonio Spurs",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 25, 
            photo: "suns.png",
            name: "Pheonix Suns",
            price: 599.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 26, 
            photo: "toronto.png",
            name: "Toronto Raptors",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 27, 
            photo: "wolves.png",
            name: "Minnesota Timberwolves",
            price: 589.99,
            active: false,
            quantity: 1, 
            isInBag: false
        }
    ]);

    const itemsInBag = items.filter(item => item.isInBag);

    function selectHandler(id) {
        let item = items.filter(item => item.id === id)[0];
        item.isInBag = !item.isInBag;
        setItems(items.map(el => el.id === id ? item : el));
    }

    function quantityHandler(e, id, increment){
        e.stopPropagation();
        let item = items.filter(item => item.id === id)[0];
        item.quantity += increment;
        setItems(items.map(el => el.id === id ? item : el));
    }
    
    return ( 
        <>
            <section className="items">
                <img className='logo' src="./public/img/nba.png" alt=""/>   
        
                <h4>{ shopName }</h4>

                { items.map(item => 
                    <Item 
                        selectProduct={(id) => selectHandler(id)}
                        changeQuantity={(e, id, increment)=> quantityHandler(e, id, increment)}
                        item={item} 
                        key={item.id} 
                    />
                ) }
                
            </section>
            
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            > 
                {data.map( (item) => (
                    <SwiperSlide key={item.id}> 
                        <img src={item.image} 
                             alt={Slider}
                             className={slider-item} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper> 

            {itemsInBag.length > 0 && <OrderDetails itemsInBag={itemsInBag} />}

        </>   
   
    );
}

export default App
