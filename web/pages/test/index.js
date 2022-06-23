import {useState} from "react";
import axios from "axios";

export default function Index(props) {
    const [res, setRes] = useState(null)

    function callAPI() {
        axios({
            'method': 'POST',
            'url': '/api/v2/get/getUsers',
            'data': {
                'query': `
                    query Query{
                      getUsers {
                        id
                        email
                        name
                        role
                      }
                    }
                `
            }
        }).then((_res) => {
            setRes(JSON.stringify(_res.data))
        }).catch((e) => console.log(e))
    }

    return (
        <div>
            <button onClick={() => callAPI()}>
                Click me!
            </button>
            <p>{res}</p>
        </div>
    );
}