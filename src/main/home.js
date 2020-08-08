import React from 'react'

export default function Home() {
    return (
        // <div className="home">
        //     <img src="./shopping.jpg"></img>
        //     <span>
        //         Shopping {"\n"}is{"\n"} Always{"\n"} A{"\n"}Good{"\n"}Idea!!!
        //     </span>
        // </div>

        <div className="container">

            <img src="./shopping.jpg" className="image" ></img>
            <span>
                Shopping {"\n"}is{"\n"} Always{"\n"} A{"\n"}Good{"\n"}Idea!!!
            </span>
            <div className="middle">
                <div className="text" on>Lets Shop</div>
            </div>
        </div>
    )
}
