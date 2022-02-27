import React from 'react'
import PropTypes from 'prop-types'
import IndexPageTemplate from "../../pages/templates/index-page-template";

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <IndexPageTemplate
                image={getAsset(data.image)}
                bannerImage={getAsset(data.bannerImage)}
                title={data.title}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default IndexPagePreview