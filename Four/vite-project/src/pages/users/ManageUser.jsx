import axios from "axios";
import { useEffect, useState } from "react";

const ManageUser = () => {
  const [user, setUser] = useState([]);
//   const [messages, setMessage] = useState([]);
  // const [messages,setMessage]=useState('');
  const loaderUser = async () => {
    const result = await axios.get(
      "http://localhost/React/Four/Backend/view.php"
    );
    setUser(result.data.phpresult);
  };
  useEffect(() => {
    loaderUser();
  }, []);
  return (
    <>
      <div>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Default box */}
          <div className="card-body">
            {/* <p className="text-danger">{message} </p> */}

            <table id="example1" className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    {/* <td> */}
                      {/* <Link to={"/edit-user/"+user.id} className="btn btn-success mx-2">Edit</Link> */}
                      {/* <NavLink to={`/edit-user/${user.id}`}>
                        <button className="btn btn-info mb-2 mt-2">
                          Update
                        </button>
                      </NavLink> */}
                      {/* <button className="btn btn-danger" onClick={ ()=>handleDelete(user.id)}>Delete</button> */}
                      {/* <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                      >
                        Delete
                      </button> */}
                    {/* </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    </>
  );
};

export default ManageUser;
