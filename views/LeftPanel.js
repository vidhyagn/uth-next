import React, {Component,useState} from "react";

function LeftPanel(Props) {
    const [searchText, setSearchText] = useState('');
    const [locArr, setLocArray] = useState([]);

    function handleChange(e) {
        let fieldVal = e.target.value;
        setSearchText(fieldVal)
    }

    function handleKeyUp(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code == 13) { //Enter keycode
            let searchVal = searchText;
            let locs = locArr;
            locs.push(searchText);
            setLocArray(locs)
            Props.searchHotels(searchVal);

        }
    }

    const removeLoc  =(loc) => {
        let locs = locArr;
        let index = locs.indexOf(loc);
        locs = locs.splice(index, 1);
        console.log(locs)
        setLocArray(locs)
    }

    let facilities = Props.facilities;
    console.log(facilities)

        return (
            <aside className={`filter-panel ${Props.showFilterStatus ? 'fly-in' :''}`}>


                <div className="filter-mob-header">
                    <h5>Filter by:</h5>
                    <button className="close-fly" onClick={() => Props.hideFilters()}></button>
                </div>

                <div className="filter-panel-inner">
                    <div className="search-panel">
                        <label>Location</label>
                        <div className="search-panel-box">
                            <input type="text" name="search_text" id="search_text"
                                   onKeyUp={(e)=> handleKeyUp(e)}
                                   onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div className="filter-content">
                        {locArr.length > 0 &&
                        <div className="search-tag-block">
                            {locArr.map(loc =>
                            <div className="each-search-tag">{loc} <button className="close-ico" onClick={()=>removeLoc(loc)}></button></div>
                            )}
                        </div>
                        }


                    </div>
                </div>
            </aside>

        )
}
export default LeftPanel
