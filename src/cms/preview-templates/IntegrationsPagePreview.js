import React from 'react'
import PropTypes from 'prop-types'
import { IntegrationsPageTemplate } from '../../templates/about-page'

const IntegrationsPagePreview = ({ entry, widgetFor }) => (
  <IntegrationsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

IntegrationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IntegrationsPagePreview
