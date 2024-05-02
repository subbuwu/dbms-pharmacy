import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CompanyItem = ({ com_id, com_name }) => {
  const [editedComName, setEditedComName] = useState(com_name);

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/putCompany`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ com_id : com_id , editedComName: editedComName }),
      });
  
      if (response.ok) {
        // Optionally, handle success or show notification
        toast.success('Company name updated successfully!');

      } else {
        throw new Error('Failed to update company name.');
      }
    } catch (error) {
      // Handle error
      console.log(error)
    }

    
  };
  
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/deleteCompany`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ com_id : com_id  }),
      });
  
      if (response.ok) {
        // Optionally, handle success or show notification
        toast.success('Company deleted successfully!');
        // Optionally, you might want to refresh the page or update the list of companies after deletion
      } else {
        throw new Error('Failed to delete company.');
      }
    } catch (error) {
      // Handle error
      console.error('Error deleting company:', error);
      toast.error('Failed to delete company.');
    }

    setTimeout(() => {
      window.location.reload();
    }, 3000); 
  };
  

  return (
    <div className="grid grid-cols-2 my-3 sm:grid-cols-4 border-neutral-500 border-[0.5px]">
      <div className="p-2.5 text-center xl:p-4 bg-[#b7cbeb]">
        <p className="text-[16px] font-semibold uppercase xsm:text-base">{com_id}</p>
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <input
          type="text"
          name="com_name"
          value={editedComName}
          onChange={(e) => setEditedComName(e.target.value)}
          className="outline-none inset-0 rounded-xl px-2 border-[2px] border-[#22272f] text-[#22272f] focus:border-[#387eee] focus:ring-1 focus:scale-[1.1] text-[16px] font-semibold uppercase xsm:text-base"
        />
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
      </div>
      <div className="p-2.5 text-center xl:p-4 bg-[#f7f9fc]">
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default CompanyItem;
