/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./PlacardsTable.css";
const PlacardsTable = ({onCurrentPage}) => {
  return (
    <div>
      <table className="placards-table">
        <tbody>
          <tr>
            <td>
            <div className="placard" onClick={() => onCurrentPage("Udaipur")}><img className="img" src="https://www.tripsavvy.com/thmb/UDmHZJbN0vABSWgEzgxDOmRTSp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1271599611-fda4a50f48c24c298709969f36491b86.jpg" alt="Udaipur"></img><br></br>
                Udaipur
              </div>
            </td>
            <td>
            <div className="placard" onClick={() => onCurrentPage("Banaras")}><img className="img" src="https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.jpg?s=612x612&w=0&k=20&c=WHGBF2zwPkVMpAma832RbHrov6VwKIMXuDR3N2WmfGg=" alt="Banaras"></img><br></br>
              Banaras
              </div>
            </td>
            <td>
            <div className="placard" onClick={() => onCurrentPage("Goa")}><img className="img" src="https://static.toiimg.com/thumb/msid-55310626,width-748,height-499,resizemode=4,imgsize-175052/The-best-beaches-of-Goa.jpg" alt="Goa"></img><br></br>Goa</div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="placard" onClick={() => onCurrentPage("Sikkim")}><img className="img" src="https://media.istockphoto.com/id/538010535/photo/maldivian-capital-from-above.jpg?s=612x612&w=0&k=20&c=d3S2dA405UKYQieCVkACNvTMbFYDBL9NYxyInFZqgac=" alt="Sikkim"></img><br></br>Sikkim</div>
            </td>
            <td>
            <div className="placard" onClick={() => onCurrentPage("Bangkok")}><img className="img" src="https://miro.medium.com/v2/resize:fit:1200/0*wWfIKxAcCGjtKCgE.jpg" alt="Bangkok"></img><br></br>Bangkok</div>
            </td>
            <td>
            <div className="placard" onClick={() => onCurrentPage("Paris")}><img className="img" src="https://media.istockphoto.com/id/155381519/photo/romantic-paris-with-tour-eiffel.jpg?s=612x612&w=0&k=20&c=tZO0BKZ4VT_FN09FgsKFLNxTdAH7ETjQOQkHSufz1x8=" alt="Paris"></img><br></br>
              Paris</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PlacardsTable;