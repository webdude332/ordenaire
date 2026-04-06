import React from 'react';

const RenderIcon = ({ icon, className = '', ...props }: { icon: any; className?: string; [key: string]: any }) => {
    if (!icon) return null;
    if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null && !icon.src)) {
        const IconComponent = icon;
        return <IconComponent className={className} {...props} />;
    }
    return <img src={icon} alt="" className={className} {...props} />;
};

export default RenderIcon;