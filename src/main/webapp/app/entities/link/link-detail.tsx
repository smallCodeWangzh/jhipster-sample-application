import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './link.reducer';
import { ILink } from 'app/shared/model/link.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILinkDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const LinkDetail = (props: ILinkDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { linkEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="jhipsterSampleApplicationApp.link.detail.title">Link</Translate> [<b>{linkEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="jhipsterSampleApplicationApp.link.name">Name</Translate>
            </span>
          </dt>
          <dd>{linkEntity.name}</dd>
          <dt>
            <span id="url">
              <Translate contentKey="jhipsterSampleApplicationApp.link.url">Url</Translate>
            </span>
          </dt>
          <dd>{linkEntity.url}</dd>
        </dl>
        <Button tag={Link} to="/link" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/link/${linkEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ link }: IRootState) => ({
  linkEntity: link.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LinkDetail);
