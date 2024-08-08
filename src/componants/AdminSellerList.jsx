function AdminSellerList() {
  return (
    <div>
      <div className="container col-lg-12">
        <table className="table table-responsive table-striped bg-dark text-white text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>GSTNo</th>
              <th>Bank Account</th>
              <th>Branch</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSellerList;
