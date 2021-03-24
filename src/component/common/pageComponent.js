import React from 'react';

const PageComponent = ({title, children, style, classTitle})=> {
    const mainBoxStyle = {
        padding: '0 0 30px'
    }

    return (
        <div style={style ? style : mainBoxStyle} className={classTitle ? classTitle : null}>
            <h3>{title}</h3>
            {children}
        </div>
    )


}
export default PageComponent;
