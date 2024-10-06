import React from 'react';
import'./Dashboard.css'

const Dashboard = () => {

  
  return (
    <>
 <div className="main-container">
  <div className="navcontainer ">
    <nav className="nav">
      <div className="nav-upper-options">
      <div className="oy">
        <br/>
    <div className="triangle"></div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png" className="nav-img" alt="dashboard" />
    <h3>Dashboard</h3>
</div>
<br/>
        <div className="option2 nav-option">
          {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png" className="nav-img" alt="articles" /> */}
          <h3>New Order</h3>
        </div>
        <br/>
        <div className="nav-option option3">
          {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png" className="nav-img" alt="report" /> */}
          <h3>Total Product</h3>
        </div>
        <br/>
        <div className="nav-option option4">
          {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png" className="nav-img" alt="institution" /> */}
          <h3>Pending Order</h3>
        </div>
        <br/>
        <div className="nav-option option5">
          {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png" className="nav-img" alt="profile" /> */}
          <h3>Rejected Orders</h3>
        </div>
        <br/>
        <div className="nav-option option6">
          {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png" className="nav-img" alt="settings" /> */}
          <h3>Daily Sale</h3>
        </div>
        <br/>
        <div className="nav-option logout">
          {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png" className="nav-img" alt="logout" /> */}
          <h3>Add Product</h3>
        </div>
        <br/>
      </div>

    </nav>
    <br/>
  </div>
  <div className="main">
    {/* <div className="searchbar">
      <input type="text" placeholder="Search" />
      {/* <button className="searchbtn">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png" className="icn" alt="search-button" />
      </button> */}
    {/* </div>  */}
    <div className="box-container">
      <div className="box box1">
        <div className="text">
          <h2 className="topic-heading">60.5k</h2>
          {/* <h2 className="topic">Article Views</h2> */}
        </div>
        {/* <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png" alt="Views" /> */}
      </div>
     
       
    </div>
    <div className="report-container">
      {/* <div className="report-header">
        <h1 className="recent-articles">Recent Articles</h1>
        <button className="view">View All</button>
      </div> */}
     <div className="report-container">
  <div className="report-heading-box">
    <div className="report-topic-heading">
      <h3 className="t-op"> No</h3>
      <h3 className="t-op">Orders</h3>
      <h3 className="t-op">Status</h3>
      <h3 className="t-op">Total</h3>
    </div>
  </div>
  <div className="report-body-box">
    <div className="items">
      <div className="item">
        <h3 className="t-op-nextlvl">Article 73</h3>
        <h3 className="t-op-nextlvl">2.9k</h3>
        <h3 className="t-op-nextlvl label-tag">Published</h3>
        <h3 className="t-op-nextlvl">210</h3>
        
      </div>
      <div className="item">
        <h3 className="t-op-nextlvl">Article 72</h3>
        <h3 className="t-op-nextlvl">1.5k</h3>
        <h3 className="t-op-nextlvl label-tag">Published</h3>
        <h3 className="t-op-nextlvl">360</h3>
        
      </div>
      <div className="item">
        <h3 className="t-op-nextlvl">Article 71</h3>
        <h3 className="t-op-nextlvl">1.1k</h3>
        <h3 className="t-op-nextlvl label-tag">Published</h3>
        <h3 className="t-op-nextlvl">150</h3>
       
      </div>
      {/* <!-- More items here --> */}
    </div>
  </div>
</div>

    </div>
  </div>
</div>

    </>
//     <div className="page-content">
//       <div className="container-fluid">
 

//         <div className="row content">
//           <div className="col-sm-3 sidenav hidden-xs">
//             {/* <h2>Logo</h2> */}
//             <br/>
//             <ul className="nav nav-pills nav-stacked">
//   <li className="bg-brown">
//     <a href="#section1" className="gty"><h4>Dashboard</h4></a>
//   </li>
// </ul>

//             <br />
//           </div>
//           <div className="col-sm-9">
//             <div className="well">
//               <h4>Dashboard</h4>
//               <p>Some text..</p>
//             </div>

//             <div className="row">
//               <div className="col-sm-3">
//                 <div className="well">
//                   <h4>Users</h4>
//                   <p>1 Million</p>
//                 </div>
//               </div>
//               <div className="col-sm-3">
//                 <div className="well">
//                   <h4>Pages</h4>
//                   <p>100 Million</p>
//                 </div>
//               </div>
//               <div className="col-sm-3">
//                 <div className="well">
//                   <h4>Sessions</h4>
//                   <p>10 Million</p>
//                 </div>
//               </div>
//               <div className="col-sm-3">
//                 <div className="well">
//                   <h4>Bounce</h4>
//                   <p>30%</p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-sm-4">
//                 <div className="well">
//                   <p>Text</p>
//                   <p>Text</p>
//                   <p>Text</p>
//                 </div>
//               </div>
//               <div className="col-sm-4">
//                 <div className="well">
//                   <p>Text</p>
//                   <p>Text</p>
//                   <p>Text</p>
//                 </div>
//               </div>
//               <div className="col-sm-4">
//                 <div className="well">
//                   <p>Text</p>
//                   <p>Text</p>
//                   <p>Text</p>
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-sm-8">
//                 <div className="well">
//                   <p>Text</p>
//                 </div>
//               </div>
//               <div className="col-sm-4">
//                 <div className="well">
//                   <p>Text</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  );
};

export default Dashboard;
