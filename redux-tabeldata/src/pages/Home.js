import React, { useEffect } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../redux/actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const { users, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you want to delete this user?")) {
      dispatch(deleteUserStart(id));
      toast.success("User Deleted Successfully");
    }
  };

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <MDBBtn className="m-1" color="none" onClick={() => handleDelete(item.id)}>
                    <MDBTooltip tag="span" title="Delete">
                      <MDBIcon fas icon="trash-alt" style={{ color: "#dd4b39" }} size="lg" />
                    </MDBTooltip>
                  </MDBBtn>

                  <Link to={`/editUser/${item.id}`} className="m-1">
                    <MDBTooltip tag="span" title="Edit">
                      <MDBIcon fas icon="edit" style={{ color: "#55acee" }} size="lg" />
                    </MDBTooltip>
                  </Link>

                  <Link to={`/userInfo/${item.id}`} className="m-1">
                    <MDBTooltip tag="span" title="View">
                      <MDBIcon fas icon="eye" style={{ color: "#3b5998" }} size="lg" />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No users available
              </td>
            </tr>
          )}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Home;
