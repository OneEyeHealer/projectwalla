import React, { Fragment, useState } from "react";

const ListBox = ({ data, key, aosTypeText, icon, head, para, subPara }) => {
  const [shown, setShown] = useState(false);
  const [ikey, setIkey] = useState("");
  return (
    <Fragment>
      <div className="col-md-6 agileits_services_grid" data-aos={aosTypeText}>
        <div className="col-md-12 agileits_services_grid">
          <h3>{head}</h3>
          <p>{para}</p>
          {data.map((item) => (
            <div key={item[key]} data-aos="zoom-in">
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  shown ? setIkey(item[key]) : setIkey("");
                  setShown(!shown);
                }}
              >
                <span
                  style={{
                    color: "#1d7ce2",
                    paddingRight: "5px",
                    fontSize: "18px",
                  }}
                >
                  <i
                    className={
                      item[key] === ikey ? "fa fa-angle-down" : item[icon]
                    }
                  />
                </span>
                {/* {
                  <img
                    src={item[url]}
                    alt="Profile-Image"
                    width="20px"
                    height="auto"
                  />
                }
                &nbsp; */}
                <span>{item[subPara]}</span>
              </p>
              {/* {item[key] === ikey ? <SubListBox LOne={item[lOne]} /> : null} */}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
ListBox.defaultProps = {
  subPara: "subPara",
  icon: "icon",
  key: "key",
  url: "url",
  lOne: "lOne",
};
export default ListBox;
