import { Button } from 'react-bootstrap';
import categories from '../data/CategoryData';


const Categorys = () => {
  
  return (
    <div style={{backgroundColor: 'var(--main-bg)', padding: '50px'}}>
    <div className="container-lg min-height-100">
        <div className="row">
            {categories.map((categories, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-md-6 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign: 'center'}}>{Object.keys(categories)}</h5>
                        <Button variant="outline-none" style={{backgroundColor: 'var(--red-bg)', color: 'var(--font-wt)', fontWeight: '600', width: '100%'}} size='md' id="signout-btn">Start</Button>
                    </div>
                </div>
            </div>
                
                ))}
        </div>
    
    </div>
    </div>
  );
};

export default Categorys;