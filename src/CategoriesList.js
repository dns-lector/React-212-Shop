import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function CategoriesList() {
    let [categories, setCategories] = useState([]);
    let savedCategories = useRef([]);
    const backendUrl = "https://localhost:7207/";
    const apiPath = "api/categories";
    const imgPath = "img/";

    useEffect(()=>{
        if(savedCategories.current.length == 0) {
            fetch(backendUrl + apiPath)
            .then(r => r.json())
            .then(j => {
                savedCategories.current = j;
                setCategories(j);
            });
        }
        else {
            setCategories(savedCategories.current);
        }
        
        // Імітація роботи бекенду - можна використовувати поки бекенд не готовий
        // setTimeout(
        //     () => setCategories([
        //         {id: '123', slug: 'cat1', name: 'Category 1', descr: 'The category 1'},
        //         {id: '124', slug: 'cat2', name: 'Category 2', descr: 'The category 2'},
        //         {id: '126', slug: 'cat3', name: 'Category 3', descr: 'The category 3'},
        //         {id: '129', slug: 'cat4', name: 'Category 4', descr: 'The category 4'},
        //     ]),
        //     500
        // );
    });
    return (<>
<div className="list-group">
    {categories.map(c => 
        <Link to={"/category/" + c.slug}
            key={c.slug}
            title={c.description}
            className="list-group-item list-group-item-action">
                <img className="ctg-img" src={backendUrl + imgPath + c.imageUrl} alt="logo" />
                {c.name}
        </Link>)}
</div>
    </>);    
}

/*
{
    "id": "62bab42b-3652-42f6-b3c1-221ce296d66d",
    "slug": "stone",
    "name": "Вироби з каменю",
    "description": "Декоративні та сувенірні товари з каменю",
    "imageUrl": "stone.jpg",
    "isActive": true
  },
*/