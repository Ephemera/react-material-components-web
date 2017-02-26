/* @flow */
import React from 'react';
import classNames from 'classnames';

import {Elevation} from '@react-mdc/elevation';
import {Typography, Title, Subheading2, Body2} from '@react-mdc/typography';
import {
  Grid,
  Cell
} from '@react-mdc/layout-grid';

import styles from './styles.css';

/**
 * Section divider for each secion
 */
export class Section extends React.Component {
  props: {
    className?: string
  }
  render (): React.Element<*> {
    return (
      <Grid {...this.props} className={classNames(this.props.className, styles.section)} />
    );
  }
}

/**
 * Section Title
 */
export class SectionTitle extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }
  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Typography wrap={Cell} span={12} {...props}>
        <Title>
          {children}
        </Title>
      </Typography>
    );
  }
}

/**
 * Section Subtitle
 */
export class SectionSubtitle extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }
  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Typography wrap={Cell} span={12} {...props}>
        <Subheading2>
          {children}
        </Subheading2>
      </Typography>
    );
  }
}

/**
 * Explanation
 */
export class Explanation extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }

  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Typography wrap={Cell} span={4} {...props}>
        <SectionSubtitle>
          Explanation
        </SectionSubtitle>
        <Body2>
          {children}
        </Body2>
      </Typography>
    );
  }
}

/**
 * Example Code
 */
export class ExampleCode extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }

  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Cell span={8} {...props}>
        <Typography>
          <SectionSubtitle>
            Example Code
          </SectionSubtitle>
        </Typography>
        {children}
      </Cell>
    );
  }
}

/**
 * Demo
 */
export class Demo extends React.Component {
  props: {
    children?: Array<React.Element<*>> | React.Element<*>
  }

  render (): React.Element<*> {
    let {
      children,
      ...props
    } = this.props;
    return (
      <Cell className={styles.demo} span={12} {...props}>
        <Typography className={styles['demo-title']}>
          <SectionSubtitle>
            Demo
          </SectionSubtitle>
        </Typography>
        <Elevation zSpace={4}>
          <div className={styles['demo-content']}>
            {children}
          </div>
        </Elevation>
      </Cell>
    );
  }
}
