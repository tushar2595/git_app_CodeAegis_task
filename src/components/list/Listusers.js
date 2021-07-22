import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux/usersActions';
import "./style.css";
const ListUsers = ({ userData, fetchUsers }) => {
    const [gitRepo, setgitRepo] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => fetchUsers(), []);
    const showRepo = (data) => {
        console.log(data);
        setgitRepo(data);
    }
    return <div className={"list-container"}>
        <h2>CodeAegis Task</h2>
        <div>
            <p>Please Enter name of the users</p>
            <input className={"search-input"} placeholder={"Enter username"} onChange={(e) => { setSearchValue(e.target.value) }} />
        </div>
        <div>
            Users Repo URL :-
            <p style={{ border: "2px solid red", padding: "5px" }}>
                {gitRepo}
            </p>
        </div>

        <div>
            <h3>Git hub users List</h3>
        </div>
        {
            userData.loading ?
                <p>Loading please wait...</p> : ""
        }
        {
            userData && userData.users.filter((data => data.login.startsWith(searchValue))).map((data) => {
                return (
                    <div>
                        <p style={{ cursor: "pointer" }} onClick={() => { showRepo(data.repos_url) }}>
                            {data.login.toUpperCase()}
                        </p>
                    </div>
                )
            })
        }


    </div>;
};
const mapStateToProps = (state) => {
    return {
        userData: state.user,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
