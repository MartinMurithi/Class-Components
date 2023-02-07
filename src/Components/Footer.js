import React  from "react";

class Footer extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props);
    }

    render(){
        return(
            <div>
                {this.props?.columns?.map(ele=>{
                    return <span>{ele}</span>
                })};
            </div>
        )
    }
}

export default Footer;