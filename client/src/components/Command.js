import React, {useState, useEffect, useRef} from "react";
import "../styles.css";
import 'react-data-grid/lib/styles.css';
import DataGrid from "react-data-grid";
import { Spinner } from 'react-bootstrap';
import DataGridNBA from "./DataGridNBA";

function Command(props){
    const [isClicked, setIsClicked]=useState(false);
    const [isLoading, setIsLoading]=useState(false);
    const [isDataReceived, setisDataReceived]=useState(false);
    const [commandText, setCommandText]=useState("");
    const isMounted=useRef(false);
    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
    ];
      
    const rows = [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
    ];

    function submitFunc(event){
        event.preventDefault();
        isClicked===true ? setIsClicked(false) : setIsClicked(true);
        setIsLoading(true);
    }
    function handleChange(event){
        const {value}=event.target;
        setCommandText(value);
    }

    useEffect(()=>{
        if (isMounted.current){
            const postCommandData=async ()=>{
                const result=await fetch('http://localhost:8000/', {
                    method: "POST" ,
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({command_input: commandText, command_number: props.num})
                });
                const result_json=await result.json();
                setIsLoading(false);
                setisDataReceived(true);
                console.log(result_json);
            }
            postCommandData();
        }
        else{
            isMounted.current=true;
        }
    }, [isClicked]);

    return(
        <div className="command-box">   
        <form 
            action="/" 
            className="command-form" 
            method="POST" 
            id="command_form" 

        >
            <textarea 
                disabled={isClicked} 
                id="command_input" 
                className="command-textarea" 
                placeholder="Type input command here!" 
                name="command_input"
                onChange={handleChange} 
                value={commandText}
            />
            <br />
            <button type="submit" onClick={submitFunc} form="command_form" value="submit" disabled={isClicked} className="command-submit-btn" >
                Submit
            </button>
            {isLoading && <Spinner animation="border" variant="primary" />}
        </form>
        <div className="command-output">
            {isDataReceived && <DataGrid columns={columns} rows={rows} />}
        </div>
        </div>
    )
}

export default Command;