import "./filter.css"
import { Grid } from "@mui/material"
const Filter = ({handleFilter}) => {


    return(
      <div style={{ display: "block", height:"auto", marginBottom:'1.5rem' }}>
        <div className="filter" style={{flexDirection:"row", flexWrap:"wrap"}} container spacing={2}>
            <div className="color" style={{padding:"0 1.5rem 0 1.5rem"}}>
                <b>Colour</b>
            
             <div >
             <input type="checkbox" onChange={handleFilter}  name="color" value="Red"/>
              <label ><span>Red</span></label><br />
             </div >
             <div >
             <input type="checkbox" onChange={handleFilter}  name="color" value="Blue" />
              <label ><span>Blue</span></label><br />
             </div>
             <div >
             <input type="checkbox" onChange={handleFilter}  name="color" value="Green"/>
              <label ><span>Green</span></label>
             </div>
        </div>
             <div className="gender" style={{padding:"0 1.5rem 0 1.5rem"}}>
                <b>Gender</b>
            
             <div >
             <input type="checkbox" onChange={handleFilter}  name="gender" value="Men" />
              <label><span>Men</span></label><br />
             </div>
             <div >
             <input type="checkbox" onChange={handleFilter}  name="gender" value="Women"/>
              <label><span>Women</span></label>
             </div>
        </div>
             <div className="price" style={{padding:"0 1.5rem 0 1.5rem"}}>
                <b>Price</b>
            
        
             <div >
             <input type="checkbox" onChange={handleFilter}  name="0-250" value="0-250"/>
              <label ><span>0-Rs250</span></label><br />
             </div >
             <div >
             <input type="checkbox" onChange={handleFilter}  name="251-450" value="251-450" />
              <label><span>Rs251-450</span></label><br />
             </div>
             <div >
             <input type="checkbox" onChange={handleFilter}  name="450" value="450"/>
              <label><span>Rs450</span></label>
             </div>
        </div>
             <div className="type" style={{padding:"0 1.5rem 0 1.5rem"}}>
                <b>Type</b>
            
        
             <div >
             <input type="checkbox" onChange={handleFilter}  name="type" value="Hoodie"/>
              <label ><span>Hoodie</span></label><br />
             </div >
             <div >
             <input type="checkbox" onChange={handleFilter}  name="type" value="Basic" />
              <label ><span>Basic</span></label><br />
             </div>
             <div >
             <input type="checkbox" onChange={handleFilter}  name="type" value="Polo"/>
              <label ><span>Polo</span></label>
             </div>

        </div>
              
        </div>
        </div>
    )
}

export default Filter;

// const {name,value,checked} = e.target
//        console.log(name,value,checked)


//        if(checked)
//        {
//             const valueArray = checklist[name]
//             valueArray.push(value)
//             setChecklist({...checklist,  [name]: valueArray})

//        }
//        else{

//             const valueArray = checklist[name]
//             const newfilteredArray = valueArray.filter((e)=>e!==value)
//             setChecklist({...checklist,  [name]: newfilteredArray})
//        }