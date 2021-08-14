import React, {useState, useEffect} from 'react'

const Nav = () => {

    const [sliderValue, setSliderValue] = useState(0)

    const changeHandler = event => {
        setSliderValue(event.target.value)
    }
    return (
        <div className="container-fluid d-flex p-2" style={Header}>
            <div className="col-md-3" style={logo}>
                <h1>Sorting Visualizer</h1>
            </div>
            <div className="col-md-9" style={{width: "auto", marginLeft : "50px"}}>
                <div className="row mb-3">

                    <div className="col-md-6">
                        <label for="customRange1" class="form-label" style={{ width: 100, color: 'white' }}>Array Size:</label>
                        <input type="range" class="form-range pt-3" id="customRange1" style={{ width: 150 }} onChange={changeHandler}/>
                    </div>
                    
                    <div className="col-md-6">
                        <button type="button" class="btn rounded text-white" style={algoButton}>Generate</button>
                    </div>

                </div>
                <div className="row">
                    <button type="button" class="btn rounded text-white" style={algoButton}>Bubble Sort</button>
                    <button type="button" class="btn rounded text-white" style={algoButton}>Selection Sort</button>
                    <button type="button" class="btn rounded text-white" style={algoButton}>Insertion Sort</button>
                    <button type="button" class="btn rounded text-white" style={algoButton}>Heap Sort</button>
                    <button type="button" class="btn rounded text-white" style={algoButton}>Merge Sort</button>
                        
                </div>
            </div>
           
          
          
        </div>
    )
}

const logo = {
    margin : "auto 5px"
}

const Header = {
    backgroundColor: "#406B6D",
   width : "100%",
   height : "120px"
}

const algoButton = {
    width : "150px",
    backgroundColor : "#555252",
    marginLeft : "10px"
}


export default Nav

