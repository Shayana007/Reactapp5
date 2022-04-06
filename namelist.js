import React, {Component} from "react";

class Namelist extends Component{
    render()
    {
        var listitems = this.props.names.map(
            (Name) => <li>{Name.toUpperCase()}</li>

        );
        return(
            <ul className = "names">{listitems}</ul>

        );
    }
}
const names =['Esther','Lily','Candace','Edward','Sidney',];
    
export default Namelist