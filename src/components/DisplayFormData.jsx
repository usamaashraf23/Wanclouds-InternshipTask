import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFormData } from "../features/form/formSlice";
import { FaTrashAlt } from "react-icons/fa";
function DisplayFormData() {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Users Data</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Company</th>
            <th>Telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>{form.firstName}</td>
              <td>{form.lastName}</td>
              <td>{form.address}</td>
              <td>{form.company}</td>
              <td>{form.telephone}</td>
              <td>
                <button
                  onClick={() => dispatch(removeFormData(form.id))}
                  className="btn-delete">
                  <FaTrashAlt size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayFormData;
