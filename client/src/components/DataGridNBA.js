import React, {useState, useEffect} from "react";
import {DataGrid} from "@mui/x-data-grid";
import axios from "axios";

function DataGridNBA(){
    const [data, setData]=useState([]);
    
    const getNBAData=async ()=>{
        await axios.get("https://www.balldontlie.io/api/v1/teams")
            .then((res)=>{
                setData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            });      
    };
    useEffect(()=>{
        getNBAData();
    }, [])
}

export default DataGridNBA;