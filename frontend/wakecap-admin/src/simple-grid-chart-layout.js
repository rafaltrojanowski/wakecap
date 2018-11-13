import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CardContentInner from './card-content-inner';
import Labeled from './labeled';

import { withStyles } from '@material-ui/core/styles';

import './simple-grid-chart-layout.css';

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: '100px',
  },
};

const sanitizeRestProps = ({
    children,
    className,
    record,
    resource,
    basePath,
    version,
    initialValues,
    translate,
    ...rest
}) => rest;

/**
 * Inspired by: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
 * Based on: https://github.com/marmelab/react-admin/blob/master/packages/ra-ui-materialui/src/detail/SimpleShowLayout.js
 */

export const SimpleGridChartLayout = ({
    basePath,
    className,
    children,
    record,
    resource,
    version,
    ...rest
}) => (
    <CardContentInner
        className={className}
        key={version}
        {...sanitizeRestProps(rest)}
    >
        <div style={styles.wrapper}>
          {Children.map(
              children,
              (field, index) =>
                  field ? (
                      <div
                          key={field.props.source}
                          className={classnames(
                              `ra-field ra-field-${field.props.source}`,
                              field.props.className,
                                `Chart-box${index+1}`
                            )}
                        >
                            {field.props.addLabel ? (
                                <Labeled
                                    record={record}
                                    resource={resource}
                                    basePath={basePath}
                                    label={field.props.label}
                                    source={field.props.source}
                                    disabled={false}
                                >
                                    {field}
                                </Labeled>
                            ) : typeof field.type === 'string' ? (
                                field
                            ) : (
                                React.cloneElement(field, {
                                    record,
                                    resource,
                                  basePath,
                              })
                          )}
                      </div>
                  ) : null
          )}
        </div>
    </CardContentInner>
);

SimpleGridChartLayout.propTypes = {
    styles: PropTypes.object,
    basePath: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
    version: PropTypes.number,
};

export default withStyles(styles)(SimpleGridChartLayout);
