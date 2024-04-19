import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CategoriesList from "./CategoriesList";
// import { backendUrl, apiCategoriesPath, imgPath  } from "./AppSettings"
import { backendUrl, apiCategoriesPath, imgPath  } from './AppSettings';

export default function Category() {
    const { slug } = useParams();
    let [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(backendUrl + apiCategoriesPath + "/" + slug)
      .then(r => r.json())
      .then(j => {
        setProducts(j);
      });
    }, [slug]);

    return (<> 
    <div className="row">
        <div className="col col-sm-3"><CategoriesList /></div>
        <div className="col col-sm-9">
          <h1>Category Page for {slug}</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(p => <ProductCard product={p} key={p.id} />)}
          </div>
        </div>
    </div>
    </>);    
}

function ProductCard(props) {
  return <>
  <div className="col">
    <div className="card h-100">
      <img src={backendUrl + imgPath + props.product.imageUrl} 
        className="card-img-top" alt="image"/>
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text" style={{fontStyle: 'italic'}}>{props.product.description}</p>
      </div>
    </div>
  </div>
  </>;
}
/* Д.З. (сторінка товарів по категорії):
 - вивести ціну товарів (з АРІ приходить у копійках, треба /100 )
 - вивести реальну назву розділу (категорії) - або скорочену (name) або повну (description)
 - додати на картку товару FAB (Floating Action Button) "до кошика"
 * зверстати форму для додавання нового товару під модель ASP (ProductFormModel)

  PAGE     SLUG - ідентифікатор ресурсу при спільній батьківській сторінці
/category/glass
/category/wood
/category/stone#amber
                Hash/anchor/fragment
Path params - параметри, що передаються як частина шляху


  {
    "id": "8831cc8b-2ef1-402d-a2d3-00ab4fa11cc8",
    "categoryId": "62bab42b-3652-42f6-b3c1-221ce296d66d",
    "slug": "stone3",
    "name": "Сова",
    "description": "Фігурка-амулет у формі сови",
    "imageUrl": "stone3.jpg",
    "priceCent": 30000,
    "isActive": true
  },
*/