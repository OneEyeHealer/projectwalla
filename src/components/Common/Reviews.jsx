import React, {Fragment} from 'react';

const Reviews = ({data, key, url, name, occupation,paperTitle, comment}) => {
    const style = {
        fontSize: "34px",
        fontWeight: 400
    }
    return (
        <Fragment>
            <div className="cli-ent" data-aos="fade-down">
                <section className="slider">
                    <div className="flexslider">
                        <ul className="slides">
                            {data.map(user => (
                                <li key={user[key]}>
                                    <div className="item g1">
                                        <div className="agile-dish-caption">
                                            <img className="lazyOwl" src={user[url]} alt="" width='100px' height="auto"/>
                                            <h4 style={style}>{user[name]}</h4>
                                            <span><span className="">{user[occupation]}</span> | <span style={{color: "#00ffff", textDecoration: "underline"}}>{user[paperTitle]}</span></span>

                                        </div>

                                        <div className="clearfix"/>
                                        <p className="para-w3-agile">
                                            <span className="fa fa-quote-left" aria-hidden="true"/>
                                            {user[comment]}
                                            <span className="fa fa-quote-right" aria-hidden="true"/>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};
Reviews.defaultProps ={
    key : "key",
    url : "url",
    name : "name",
    occupation : "occupation",
    paperTitle : "paperTitle",
    comment : "comment",
}
export default Reviews;