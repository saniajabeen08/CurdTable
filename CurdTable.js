import React, { useState } from 'react';

const CrudTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Rijushree Guha', email: 'riju100@gmail.com', phone: '7989465612', joiningDate: '2022-10-10' },
    { id: 2, name: 'Remo D', email: 'remo@gmail.com', phone: '7984689612', joiningDate: '2022-10-10' },
    { id: 5, name: 'David', email: 'david100@gmail.com', phone: '4678894556', joiningDate: '2022-10-12' },
    { id: 7, name: 'rohan', email: 'rohan123@gmail.com', phone: '7846589123', joiningDate: '2022-10-12' },
    { id: 8, name: 'Rijushree Guha', email: 'rij@gmail.com', phone: '7989354648', joiningDate: '2022-10-12' },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, name: '', email: '', phone: '', joiningDate: '' });

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAddNew = () => {
    const newId = data.length + 1;
    setData([
      ...data,
      { id: newId, name: 'New User', email: 'newuser@example.com', phone: '1234567890', joiningDate: '2022-11-12' },
    ]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleUpdate = () => {
    setData(data.map((item) => (item.id === currentItem.id ? currentItem : item)));
    setIsEditing(false);
    setCurrentItem({ id: null, name: '', email: '', phone: '', joiningDate: '' });
  };

  return (
    <div>
      <header style={{ backgroundColor: '#343a40', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h1>PHP CRUD OPERATION</h1>
      </header>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#343a40', color: '#fff' }}>
        <span>Home</span>
        <button onClick={handleAddNew} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
          Add New
        </button>
      </nav>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>JOINING DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.joiningDate}</td>
              <td>
                <button
                  onClick={() => handleEdit(item)}
                  style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '5px 10px', marginRight: '5px', cursor: 'pointer' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div style={{ marginTop: '20px' }}>
          <h3>Edit Item</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={currentItem.name}
                onChange={handleInputChange}
                style={{ margin: '5px' }}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={currentItem.email}
                onChange={handleInputChange}
                style={{ margin: '5px' }}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={currentItem.phone}
                onChange={handleInputChange}
                style={{ margin: '5px' }}
              />
            </label>
            <label>
              Joining Date:
              <input
                type="date"
                name="joiningDate"
                value={currentItem.joiningDate}
                onChange={handleInputChange}
                style={{ margin: '5px' }}
              />
            </label>
            <button onClick={handleUpdate} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '5px 10px', margin: '5px' }}>
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CrudTable;
