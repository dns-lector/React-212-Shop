
import CategoriesList from "./CategoriesList";

export default function Home() {
    return (<>
    <div className="row">
        <div className="col col-sm-3"><CategoriesList /></div>
        <div className="col col-sm-9"><h1>Home Page</h1></div>
    </div>
    </>);    
}
