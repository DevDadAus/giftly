import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Login(props) {
    const {setToken} = props;
    const [mockToken, setMockToken] = React.useState(null);


    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <TextField label={"Username"}/>
            <TextField label={"Password"}/>
        </div>
    )
}