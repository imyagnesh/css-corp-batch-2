import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Overlay = ({ className }) => (
    <div>
        <div className="loader-overlay" />
        <div className={className} />
    </div>
)

Overlay.propTypes = {
    className: PropTypes.string.isRequired
}

export default memo(Overlay);