function AdminCategoryList(){
    return (
      <div>
        <div className="container col-lg-12">
          <table className="table table-responsive table-striped bg-dark text-white text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
}

export default AdminCategoryList;