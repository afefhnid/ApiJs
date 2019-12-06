import React from "react";
import "./styles.scss";

function SplitPage(props) {
    return (
        <div className="SplitPage">
            <div className="SplitPage__top-image-mobile is-hidden-tablet" />
            <div className="SplitPage__inner-wrapper">
                <div className="SplitPage__left is-hidden-mobile" />
                <div className="SplitPage__right">{props.children}</div>
            </div>
        </div>
    );
}

export default SplitPage;
